export const changeCalculatorAction = (actions) => {
    return actions.reduce((res, action) => {
        const value = action.hex ? `0x${action.value}` : action.value;
        const action = action.action ? action.action : '';
        return res += `${value} ${action} `;
    }, '');
};
