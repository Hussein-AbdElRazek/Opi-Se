import { useCallback, useContext, useEffect, useState } from 'react'
import { ButtonBase, CircularProgress, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImageUploading from 'react-images-uploading';

import classes from './styles/UploadMedia.module.css'
import ImagesContext from '../../imagesStore/images-context';
import { ReactComponent as PhotoIcon } from '../../assets/icons/photo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const UploadMedia = ({ name, handleUploadMedia, isLoadingUploadMedia, flag }) =>
{
    const imgCtx = useContext(ImagesContext);

    const [images, setImages] = useState([]);

    const onChangeImage = (imageList) =>
    {
        setImages(imageList);
        if (name) imgCtx.updateImages(name, imageList)
    };

    const handleDeleteOneImage = (index, onImageRemove) =>
    {
        onImageRemove(index);
        setOpenedImage((prev) =>
        {
            if (prev)
            {
                return prev - 1;
            }
        })
    }
    const dispatch = useDispatch();
    const menuId = "chatMenu";
    const closeMenu = useCallback(() => { dispatch(uiActions.closePopMenu(menuId)) }, [dispatch])
    const isMenuOpened = useSelector(state => state.ui.isPopMenuOpened)[menuId];
    const handleDeleteAllImages = () =>
    {
        imgCtx.deleteAllImages();
        closeMenu();
    }

    const [openedImage, setOpenedImage] = useState(0);

    // update state with store images 
    useEffect(() =>
    {
        setImages(imgCtx.images[name] || []);
    }, [imgCtx.images, name])

    useEffect(() =>
    {
        if (images.length >= 1 && isMenuOpened)
        {
            closeMenu();
        }
    }, [closeMenu, images.length, isMenuOpened])
    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChangeImage}
            maxNumber={20}
            dataURLKey="data_url"
        >
            {({
                onImageUpload,
                onImageRemove,
                dragProps,
            }) =>
            {
                return (
                    <>
                        {!images.length ? (
                            <MenuItem
                                key={"uploadMedia"}
                                onClick={() => { onImageUpload(); }}
                                style={{ display: flag ? "none" : "flex" }}
                            // className={`${classes.item}${item.noHover ? classes.noHover : ""} ${item.haveStroke ? classes.hoverStroke : ""}`}
                            >
                                <ListItemIcon >
                                    < PhotoIcon
                                        fill='var(--text-header)' />
                                </ListItemIcon>
                                Photo
                            </MenuItem>
                        ) : (<div
                            {...dragProps}
                            className={classes.container}
                            style={{ display: !flag ? "none" : "static" }}
                        >
                            <IconButton
                                className={classes.closeIcon}
                                onClick={handleDeleteAllImages}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.3839 6.61612C23.872 7.10427 23.872 7.89573 23.3839 8.38388L8.38388 23.3839C7.89573 23.872 7.10427 23.872 6.61612 23.3839C6.12796 22.8957 6.12796 22.1043 6.61612 21.6161L21.6161 6.61612C22.1043 6.12796 22.8957 6.12796 23.3839 6.61612Z" fill="black" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.61612 6.61612C7.10427 6.12796 7.89573 6.12796 8.38388 6.61612L23.3839 21.6161C23.872 22.1043 23.872 22.8957 23.3839 23.3839C22.8957 23.872 22.1043 23.872 21.6161 23.3839L6.61612 8.38388C6.12796 7.89573 6.12796 7.10427 6.61612 6.61612Z" fill="black" />
                                </svg>
                            </IconButton>
                            <div
                                className={`${classes.opened} ${classes.borderRadius}`}
                            >
                                <img
                                    src={images[openedImage]['data_url'] || images[openedImage]}
                                    alt="opened"
                                />
                            </div>

                            <div
                                className={classes.imgList}
                            >
                                <ButtonBase
                                    onClick={onImageUpload}
                                    className={`${classes.imgItem} ${classes.borderRadius} ${classes.addIcon}`}
                                >
                                    <AddIcon />
                                </ButtonBase>

                                {images.map((image, index) => (
                                    <div
                                        className={`${classes.imgItem} ${classes.borderRadius} ${index === openedImage ? classes.selected : ""}`}
                                        onClick={() => setOpenedImage(index)}
                                        key={index}
                                    >
                                        {index === openedImage && (
                                            <IconButton
                                                className={classes.deleteIcon}
                                                onClick={() => { handleDeleteOneImage(index, onImageRemove) }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <path d="M10.0007 31.6667C10.0007 33.5 11.5007 35 13.334 35H26.6673C28.5007 35 30.0007 33.5 30.0007 31.6667V11.6667H10.0007V31.6667ZM13.334 15H26.6673V31.6667H13.334V15ZM25.834 6.66667L24.1673 5H15.834L14.1673 6.66667H8.33398V10H31.6673V6.66667H25.834Z" fill="white" />
                                                </svg>
                                            </IconButton>
                                        )}
                                        <img
                                            src={image['data_url'] || image}
                                            alt="uploaded"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                {isLoadingUploadMedia ? (
                                    <CircularProgress
                                        className={classes.loading}
                                    />
                                ) : (
                                    <IconButton
                                        className={classes.sendIcon}
                                        onClick={handleUploadMedia}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28" fill="none">
                                            <path d="M0.264286 28L30.25 14L0.264286 0L0.25 10.8889L21.6786 14L0.25 17.1111L0.264286 28Z" fill="#036666" />
                                        </svg>
                                    </IconButton>
                                )}

                            </div>
                        </div >
                        )}

                    </>
                )
            }
            }
        </ImageUploading >
    )
}

export default UploadMedia