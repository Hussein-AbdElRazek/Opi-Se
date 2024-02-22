export const firstSectionQuestions = [
    {
        label: "1. How old are you?",
        name: "age",
        control: "textarea",
        placeholder: "Your answer....",
        type:"number"
    },
    {
        label: "2. What is your gender?",
        name: "gender",
        control: "boolean",
        firstRadio: "Male",
        secondRadio: "Female",
    },
    {
        label: "3. What is your education?",
        name: "education",
        control: "mcq",
        answers: [
            "phD",
            "Master",
            "Undergraduate",
            "High School",
        ]
    },
    {
        label: "4. Are you employed, at least part time?",
        name: "employed",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "5. What is your income?",
        name: "income",
        control: "textarea",
        placeholder: "Your answer....",
    },
    {
        label: "6. Do you have gaps in your resume?",
        name: "gap_in_resume",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "7. Do you have your own computer/ laptop separate from a smart phone?",
        name: "pc",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "8. Do you have regular access to the internet?",
        name: "internet_access",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "9. Do you live with your parents?",
        name: "live_with_parents",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "10. Do you read outside of work/School?",
        name: "read_out",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "11. Are you legally disabled?",
        name: "disabled",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "12. Have you been hospitalized for any mental illness?",
        name: "mental_illness_b4",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "13. How many times were you hospitalized for your mental illness?",
        name: "times_hosp",
        control: "textarea",
        placeholder: "Your answer....",
    },
    {
        label: "14. How many days were you hospitalized for the mental illness?",
        name: "days_hosp",
        control: "textarea",
        placeholder: "Your answer....",
    },
];

export const secondSectionQuestions = [
    {
        label: "1. Do you often feel anxious or nervous without a clear reason?",
        name: "anxiety1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "2. Have you been experiencing excessive worry or fear that is difficult to control?",
        name: "anxiety2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "3. Have you felt on edge, restless, or easily fatigued? ",
        name: "anxiety3",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "4. Do you frequently feel down, sad, or hopeless?",
        name: "depression1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "5. Have you lost interest or pleasure in activities you used to enjoy?",
        name: "depression2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "6. Have you had difficulty concentrating or making decisions lately?",
        name: "lack_of_concentration1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "7. Do you find it challenging to focus on tasks or complete them?",
        name: "lack_of_concentration2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "8. Do you find yourself caught in repetitive thoughts or concerns that you can't seem to shake off?",
        name: "obsessive_thinking1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "9. Have you been experiencing intrusive thoughts that cause distress?",
        name: "obsessive_thinking2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "10. Have you noticed sudden shifts in your mood without a clear reason?",
        name: "mood_swing1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "11. Do you find it hard to control your emotions at times?",
        name: "mood_swing2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "12. Have you experienced sudden episodes of intense fear or discomfort accompanied by physical symptoms like heart palpitations, sweating, or trembling?",
        name: "panic_attacks",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "13. Do you engage in repetitive behaviors or rituals to alleviate anxiety or distress?",
        name: "compulsive_behavior1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "14. Have you felt driven to perform certain actions repeatedly?",
        name: "compulsive_behavior2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "15. Do you often feel tired, even after getting enough sleep?",
        name: "tiredness1",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
    {
        label: "16. Have you noticed changes in your sleeping patterns?",
        name: "tiredness2",
        control: "boolean",
        firstRadio: "Yes",
        secondRadio: "No",
    },
]

export const thirdSectionQuestions = [
    {
        label: "1. How would you describe your feeling at School University work in the best few days?",
        name: "response1",
        control: "textarea",
        placeholder: "Your answer....",
    },
    {
        label: "2. how do you like to spend your free time? how do you feel after it?",
        name: "response2",
        control: "textarea",
        placeholder: "Your answer....",
    },
    {
        label: "3. Life has its up and downs, although handling success can be difficult. seatbacks can affect your mental health how do you manage your emotions after failure?",
        name: "response3",
        control: "textarea",
        placeholder: "Your answer....",
    },
    {
        label: "4. in a broad of sense how would you describe your feeling about the way your life is going on?",
        name: "response4",
        control: "textarea",
        placeholder: "Your answer....",
    },
]

export const firstSectionInitialValues = {
    age: "",
    gender: "",
    education: "",
    employed: "",
    income: "",
    gap_in_resume: "",
    pc: "",
    internet_access: "",
    live_with_parents: "",
    read_out: "",
    disabled: "",
    mental_illness_b4: "",
    times_hosp: "",
    days_hosp: "",
}

export const secondSectionInitialValues = {
    anxiety1: "",
    anxiety2: "",
    anxiety3: "",
    depression1: "",
    depression2: "",
    lack_of_concentration1: "",
    lack_of_concentration2: "",
    obsessive_thinking1: "",
    obsessive_thinking2: "",
    mood_swing1: "",
    mood_swing2: "",
    panic_attacks: "",
    compulsive_behavior1: "",
    compulsive_behavior2: "",
    tiredness1: "",
    tiredness2: "",
}

export const thirdSectionInitialValues = {
    response1: "",
    response2: "",
    response3: "",
    response4: "",
}