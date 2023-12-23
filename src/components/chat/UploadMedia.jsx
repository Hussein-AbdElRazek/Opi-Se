import { useContext, useEffect, useState } from 'react'
import ImageUploading from 'react-images-uploading';
import classes from './styles/UploadMedia.module.css'
// import uploadIcon from '../../assets/uploadIcon.svg'
// import FileBorder from '../ui/FileBorder';
import ImagesContext from '../../imagesStore/images-context';
import { ButtonBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; const UploadMedia = ({ maxNumber, size, getImages, name, type, key }) =>
{
    const imgCtx = useContext(ImagesContext);

    // let initial = (imgCtx.images[name] || []);
    const [images, setImages] = useState([]);
    const onChange = (imageList, addUpdateIndex) =>
    {
        setImages(imageList);
        if (typeof getImages === "function") getImages(imageList);
        if (name) imgCtx.updateImages(name, imageList)
    };
    const handleDelete = (index, onImageRemove) =>
    {
        onImageRemove(index);
        // setImages(prev=>prev.splice(index, 1))
        setOpenedImage((prev) =>
        {
            if (prev)
            {
                return prev - 1;
            }
        })
    }
    const handleRemoveAll = () =>
    {
        setImages([])
    }
    const [openedImage, setOpenedImage] = useState(0);
    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={20}
            dataURLKey="data_url"
            key={key}
        >
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
            }) =>
            {
                return (
                    <>
                        {!images.length ? (
                            <IconButton
                                className={classes.marginRight}
                                onClick={onImageUpload}
                            >
                                {/* Files IconButton */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13.8791 8.37503L8.39309 13.861C7.56709 14.687 7.56709 16.027 8.39309 16.853V16.853C9.21909 17.679 10.5591 17.679 11.3851 16.853L18.6171 9.62103C20.1321 8.10603 20.1321 5.65003 18.6171 4.13503V4.13503C17.1021 2.62003 14.6461 2.62003 13.1311 4.13503L5.89909 11.367C3.69509 13.571 3.69509 17.143 5.89909 19.347V19.347C8.10309 21.551 11.6751 21.551 13.8791 19.347L18.2681 14.958" stroke="#000E08" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </IconButton >
                        ) : (<div
                            {...dragProps}
                            className={classes.container}
                        >
                            <IconButton
                                className={classes.closeIcon}
                                onClick={handleRemoveAll}
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
                                                onClick={() => { handleDelete(index, onImageRemove) }}
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
                                <IconButton
                                className={classes.sendIcon}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28" fill="none">
                                        <path d="M0.264286 28L30.25 14L0.264286 0L0.25 10.8889L21.6786 14L0.25 17.1111L0.264286 28Z" fill="#036666" />
                                    </svg>
                                </IconButton>
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