import classes from './styles/FormCard.module.css'

export const FormCard = ({ children, size }) =>
{
    return (
        <div
            className={`
                ${classes.formCard} 
                ${size === "big" ?
                    classes.big :
                    size === "full" ?
                        classes.full :
                        classes.small
                }
            `}
        >
            <div
                className={classes.content}
            >
                {children}
            </div>
        </div>
    )
}