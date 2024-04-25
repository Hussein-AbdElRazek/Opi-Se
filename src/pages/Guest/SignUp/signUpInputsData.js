export const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
        isFirst:true,
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
        min:1,
        max:5,
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
        min: 10,
        max: 60,
        size: 6
    },
    {
        control: "gender",
        name: "gender",
        size: 6
    },
    {
        control: "input",
        type: "text",
        name: "location",
        label: "location",
    },
    {
        control: "password",
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
        control: "input",
        type: "text",
        label: "National Id",
        name: "nationalId",
        size: 12
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