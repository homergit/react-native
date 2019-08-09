import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from "./styles";

import { ActionButtons } from './components/action-buttons.component'
import { ControlButtons } from './components/control-buttons.component';
import { Results } from './components/results.component';
import { ButtonsView } from './components/value-buttons.component'
import { changeCalculatorAction } from './utility';

const initState = {
  result: 0,
  calculatorActions: [],
  currentNumber: 0,
  hex: false
};

export default App = () => {
  const [result, setResult] = useState(initState.result);
  const [calculatorActions, setAllActions] = useState(initState.calculatorActions);
  const [currentNumber, setCurrentNumber] = useState(initState.currentNumber);
  const [hex, setHex] = useState(initState.hex);

  const onControlPress = (control) => {
    switch (control) {
      case 'AC': {
        clear();
        break;
      }
      case '=': {
        calculate();
        break;
      }
      default: {
        break;
      }
    }
  };

  const onOperationPress = (action) => {
    let newActions = [];

    if (result && !currentNumber) {
      newActions = [{
        hex: hex,
        value: hex ? result.replace('0x', ''): result,
        action
      }];
    } else if(result && calculatorActions.length && currentNumber) {
      newActions.push({
        hex: hex,
        value: currentNumber,
        action
      });
      setResult(initState.result);
    } else {
      newActions = [...calculatorActions];
      newActions.push({
        hex: hex,
        value: currentNumber,
        action
      });
    }

    setAllActions(newActions);
    setCurrentNumber(initState.currentNumber);
  };

  const onValuePress = (value) => {
    const prevCurrentNumber = currentNumber || '';
    setCurrentNumber(`${prevCurrentNumber}${value}`);
  };

  const clear = () => {
    setResult(initState.result);
    setAllActions(initState.calculatorActions);
    setCurrentNumber(initState.currentNumber);
  };

  const calculate = () => {
    const newActions = [ ...calculatorActions ];
    if (!currentNumber) return;

    newActions.push({
      hex: hex,
      value: currentNumber
    });
    setAllActions(newActions);

    const newResult = hex
        ? `0x${eval(changeCalculatorAction(newActions)).toString(16).toUpperCase()}`
        : eval(changeCalculatorAction(newActions)).toString();

    setCurrentNumber(initState.currentNumber);
    setResult(newResult);
  };

  const switchHandler = (val) => {
    setHex(val);
    setCurrentNumber(0);
    const newResult = val ? `0x${parseInt(result).toString(16).toUpperCase()}` : parseInt(result.toString());
    setResult(newResult);
  };

  return (
      <View style={styles.container}>
        <Results
            hex={hex}
            result={result.toString()}
            calculatorActions={calculatorActions.length ? changeCalculatorAction(calculatorActions) : ''}
            currentNumber={currentNumber.toString()}
        />
        <ControlButtons
            hex={hex}
            switchHex={(val) => switchHandler(val)}
            onPress={(control) => onControlPress(control)}
        />
        <ActionButtons
            onPress={(action) => onOperationPress(action)}
        />
        <ButtonsView
            hex={hex}
            onPress={(value) => onValuePress(value)}
        />
      </View>
  );
};
