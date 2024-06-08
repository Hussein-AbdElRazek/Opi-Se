export const languagesInputs = [
    {
        control: "input",
        type: "text",
        name: "languageName",
        label: "Language Name",
        validateOnInput: (value, formik, name) =>
        {
            const indexOfLang = name[10];
            const isEmpty = !value?.trim();
            const levelHaveData = !!formik.values?.languages[indexOfLang]?.level;
            if (isEmpty && levelHaveData)
                return "When Level have data Language Name is required"
        },
        isCustomValidate: true,
        isFirst: true,
    },
    {
        control: "input",
        type: "number",
        name: "level",
        label: "Level",
        validateOnInput: (value, formik, name) =>
        {
            const indexOfLang = name[10];
            const isEmpty = !value?.trim();
            const languageNameHaveData = !!formik.values?.languages[indexOfLang]?.languageName;
            if (isEmpty && languageNameHaveData)
                return "When Language Name have data Level is required"
        },
        isCustomValidate: true,
        min: 1,
        max: 5,
    },
]

const languagesInitialObject = {
    languageName: "",
    level: ""
}

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
        intialObject: languagesInitialObject
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
        languagesInitialObject
    ]
}