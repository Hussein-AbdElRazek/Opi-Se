import classes from './styles/Paragraph.module.css'

export const Paragraph = ({ children }) =>
{
    return (
        <p
            className={`
                ${classes.paragraph} 
                center-text
            `}
        >{children}</p>
    )
}