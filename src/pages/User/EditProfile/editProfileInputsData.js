const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
        size: 5,
        sm: 4,
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
        size: 4,
        sm: 3,
    },
]

export const editProfileInputs = [
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
    },
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
        size: 6
    },
    {
        control: "input",
        type: "number",
        name: "age",
        label: "Age",
        min: 10,
        max: 60,
        size: 6,
        disabled: true
    },
    {
        control: "array",
        inputs: languagesInputs,
        name: "languages",
        label: "Languages",
        intialObject: {
            languageName: "",
            level: ""
        },
    },
];