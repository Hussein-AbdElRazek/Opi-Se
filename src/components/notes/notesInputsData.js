export const notesInputs = [
    {
        control: "input",
        type: "text",
        name: "noteTitle",
        label: "Note Title",
        placeholder: "Add note title"
    },
    {
        control: "input",
        type: "text",
        multiline: true,
        maxRows: 4,
        name: "noteContent",
        label: "Description",
        placeholder: "Add description..."
    },
]
export const notesInitialValues = {
    noteTitle: "",
    noteContent: "",
    noteColor: "",
}