import classes from './styles/Media.module.css'

const MediaItem = ({ img, lastElementRef }) =>
{
    return (
        <img ref={lastElementRef} src={img} alt={img} className={classes.item} />
    )
}

export default MediaItem