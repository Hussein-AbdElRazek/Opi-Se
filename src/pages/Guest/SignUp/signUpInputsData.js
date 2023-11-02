const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
        size: 6
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
        size: 6
    },
]

export const signUpInputs = [
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
    },
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
    },
    {
        control: "input",
        type: "number",
        name: "age",
        label: "Age",
        size:6
    },
    {
        control: "select",
        name: "gender",
        label: "Gender",
        options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
        ],
        size: 6
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
        control: "password",
        type: "password",
        name: "password",
        label: "Password",
        size: 6
    },
    {
        control: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        size: 6
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