import { useNavigate } from "react-router-dom";

export const Logo = () =>
{
    const navigate = useNavigate();

    return (
        <h1
            style={{
                margin: ' 0',
                cursor:"pointer"
            }}
            onClick={() => { navigate("/") }}

        >Logo</h1>
    )
}