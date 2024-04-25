import { languagesInputs } from '../../Guest/SignUp/signUpInputsData'

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
