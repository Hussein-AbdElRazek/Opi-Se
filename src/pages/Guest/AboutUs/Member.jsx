import classes from './AboutUs.module.css'

const Member = ({ img, name, position }) =>
{
    return (
        <div
            className={classes.member}
        >
            <div className={classes.memberImgContainer}>
                <img src={img} alt={name} />
            </div>
            
            <div
                className={classes.memberInfo}
            >
                <h4>{name}</h4>
                <span>{position}</span>
            </div>
        </div>
    )
}

export default Member