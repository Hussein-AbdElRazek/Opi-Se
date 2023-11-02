import Input from "./Input";
import InputArray from "./InputArray";
import Password from "./Password";
import Select from "./Select";
function FormikControl(props)
{
    const { control, size, ...rest } = props;
    switch (control)
    {
        case "input":
            return <Input {...rest} />;
        case "password":
            return <Password {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "array":
            return <InputArray {...rest} />;

        default:
            return null;
    }
}

export default FormikControl;
