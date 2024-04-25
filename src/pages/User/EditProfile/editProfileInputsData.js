const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
        size: 6,
        sm: 6,
        xs: 4,
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
        size: 4,
        sm: 3,
        xs: 3,
    },
]

export const editProfileInputs = [
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
        size: 6
    },
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
        size: 6
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

export const aboutInput = [
    {
        control: "input",
        type: "text",
        multiline: true,
        maxRows: 5,
        rows: 5,
        name: "bio",
        label: "Description",
    }
];

export const interestsInputs = [
    {
        control: "input",
        type: "text",
        multiline: true,
        maxRows: 5,
        rows: 5,
        name: "bio",
        label: "Description",
    }
];
