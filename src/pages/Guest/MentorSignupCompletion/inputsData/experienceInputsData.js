export const experienceInputs = [
    {
        control: "input",
        type: "text",
        name: "title",
        label: "Title",
        placeholder: "Add title"
    },
    {
        control: "input",
        type: "text",
        name: "employmentType",
        label: "Employment Type",
        placeholder: "Add Employment Type"
    },
    {
        control: "input",
        type: "text",
        name: "companyName",
        label: "Company Name",
        placeholder: "Add Company Name"
    },
    {
        control: "date",
        name: "startDate",
        label: "Start Date",
        size: 6,
        xs: 12
    },
    {
        control: "date",
        name: "endDate",
        label: "End Date",
        size: 6,
        xs: 12
    },
]
export const experienceInitialValues = {
    title: "",
    employmentType: "",
    companyName: "",
    startDate: "",
    endDate: ""
}