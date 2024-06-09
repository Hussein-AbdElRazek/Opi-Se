import { HeaderTextHero } from './HeaderTextHero'
import { Paragraph } from './Paragraph'
import classes from './styles/PicAndText.module.css'

export const PicAndText = ({ pic, title, paragraph, isTextFirst }) =>
{
    return (
        <div className={`${classes.container} center-y space-between ${isTextFirst ? classes.textFirst : ""}`}>
            <div className={classes.pic}>
                <img src={pic} alt="" />
            </div>
            <div className={classes.text}>
                <HeaderTextHero type={'h2'}>
                    {title}
                </HeaderTextHero>
                <Paragraph>
                    {paragraph}
                </Paragraph>
            </div>
        </div>
    )
}
