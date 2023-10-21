const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
    },
]

export const signUpInputs = [
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
    },
    {
        control: "input",
        type: "number",
        name: "age",
        label: "Age",
    },
    {
        control: "select",
        name: "gender",
        label: "Gender",
        options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
        ]
    },
    {
        control: "input",
        type: "text",
        name: "location",
        label: "location",
    },
    {
        control: "input",
        type: "text",
        name: "nationalId",
        label: "National Id",
    },
    {
        control: "input",
        type: "password",
        name: "password",
        label: "Password",
    },
    {
        control: "password",
        name: "confirmPassword",
        label: "Confirm Password",
    },
    {
        control: "array",
        inputs: languagesInputs,
        name: "languages",
        label: "Languages",
    },
];

export const signUpInitialValues = {
    userName: "",
    email: "",
    age: "",
    gender: "",
    location: "",
    nationalId: "",
    password: "",
    confirmPassword: "",
    languages: [
        {
            languageName: "",
            level: ""
        }
    ]
}