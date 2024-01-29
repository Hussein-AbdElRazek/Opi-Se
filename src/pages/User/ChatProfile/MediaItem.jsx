import classes from './styles/Media.module.css'

const MediaItem = ({ img }) =>
{
    return (
        <img src={img} alt={img} className={classes.item} />
    )
}

export default MediaItem