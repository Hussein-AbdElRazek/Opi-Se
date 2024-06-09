export const contactUsInputData = [
    {
        control: "input",
        type: "text",
        name: "name",
        label: "Name",
        size: 10
    },
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
        size: 10
    },

    {
        control: "input",
        type: "text",
        multiline: true,
        rows: 5,
        name: "message",
        label: "Message",
        size: 10
    }
];

export const contactUsInitialValues = {
    name: "",
    email: "",
    message: "",
}