import classes from './styles/FormCard.module.css'

export const FormCard = ({ children }) =>
{
    return (
        <div
            className={`
                ${classes.formCard} 
                ${classes.small}
            `}
        >
            {children}
        </div>
    )
}