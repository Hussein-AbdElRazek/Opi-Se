import { useNavigate } from 'react-router-dom'
import { OutlinedBtn } from '../inputs'

export const BackOutlinedBtn = ({ disabled }) =>
{
    const navigate = useNavigate();

    return (
        <OutlinedBtn
            size="small"
            startIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 19.2071C15.8166 19.5976 15.1834 19.5976 14.7929 19.2071L8.79289 13.2071C8.40237 12.8166 8.40237 12.1834 8.79289 11.7929L14.7929 5.79289C15.1834 5.40237 15.8166 5.40237 16.2071 5.79289C16.5976 6.18342 16.5976 6.81658 16.2071 7.20711L10.9142 12.5L16.2071 17.7929C16.5976 18.1834 16.5976 18.8166 16.2071 19.2071Z" fill="#036666" />
                </svg>
            }
            onClick={() => navigate(-1)}
            disabled={disabled}
        >
            Back
        </OutlinedBtn>
    )
}