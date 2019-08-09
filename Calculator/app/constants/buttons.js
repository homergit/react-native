export const buttonTypes = {
    number: {
        canDisable: false
    },
    letter: {
        canDisable: true
    },
    control: {
        style: {
            backgroundColor: '#9dcaff',
            marginRight: 10
        },
        canDisable: false
    },
    action: {
        style: {
            backgroundColor: '#feff8a',
        },
        canDisable: false
    }
};

export const buttonsView = [
    [
        {
        title: '1',
        type: buttonTypes.number,
        },
        {
            title: '2',
            type: buttonTypes.number,
        },
        {
            title: '3',
            type: buttonTypes.number,
        },
        {
            title: '4',
            type: buttonTypes.number,
        }
    ],
    [
        {
            title: '5',
            type: buttonTypes.number,
        },
        {
            title: '6',
            type: buttonTypes.number,
        },
        {
            title: '7',
            type: buttonTypes.number,
        },
        {
            title: '8',
            type: buttonTypes.number,
        },
    ],
    [
        {
            title: '9',
            type: buttonTypes.number,
        },
        {
            title: '0',
            type: buttonTypes.number,
        },
        {
            title: 'A',
            type: buttonTypes.letter,
        },
        {
            title: 'B',
            type: buttonTypes.letter,
        },
    ],
    [
        {
            title: 'C',
            type: buttonTypes.letter,
        },
        {
            title: 'D',
            type: buttonTypes.letter,
        },
        {
            title: 'E',
            type: buttonTypes.letter,
        },
        {
            title: 'F',
            type: buttonTypes.letter,
        },
    ]
];

export const actionButtons = [
    {
        title: '+',
        type: buttonTypes.action,
    },
    {
        title: '-',
        type: buttonTypes.action,
    },
    {
        title: '*',
        type: buttonTypes.action,
    },
    {
        title: '/',
        type: buttonTypes.action,
    },
];

export const controlButtons = [
    {
        title: 'AC',
        type: buttonTypes.control,
    },
    {
        title: '=',
        type: buttonTypes.control,
    }
];
