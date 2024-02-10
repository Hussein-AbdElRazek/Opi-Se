import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux'
import {  ListItemIcon } from '@mui/material';

import { PopUpMenu } from '../../../../components/common'
import { ReactComponent as AddPicIcon } from '../../../../assets/icons/addPic.svg'
import { ReactComponent as BinIcon } from '../../../../assets/icons/bin.svg'
import classes from '../Profile.module.css'
import plusIcon from '../../../../assets/icons/plus.svg'
import { uiActions } from '../../../../store/ui-slice';
import useChangeProfilePic from '../hooks/use-change-profile-pic';
import { LoadingCenter } from '../../../../components/ui';
const ChangeProfilePic = () =>
{
    const profileUploadId = "profileUploadId";

    const profileImage = useSelector(state => state.auth?.userData?.profileImage);
    const dispatch = useDispatch();
    
    const closeMenu = () =>
    {
        dispatch(uiActions.closePopMenu(profileUploadId));
    };

    const [images, setImages] = useState();

    const {
        handleChangeProfilePic,
        isLoadingChangeProfilePic
    } = useChangeProfilePic();

    //  pass selected image to handleChangeProfilePic
    const onChangeImage = (imageList) =>
    {
        const selectedFile = imageList[0];
        setImages(selectedFile);
        const formData = new FormData();
        formData.append("userImage", selectedFile.file);
        formData.append("type", "upload");
        handleChangeProfilePic(formData, selectedFile.data_url);
    };

    // handleChangeProfilePic with remove pic key
    const removePhoto = () =>
    {
        const formData = new FormData();
        formData.append("type", "remove");
        handleChangeProfilePic(formData, "default.png");
    }

    return (
        <>
            {isLoadingChangeProfilePic ? (<div className={`${classes.plusIcon} ${classes.loading}`}><LoadingCenter /></div>) :
                (
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChangeImage}
                        maxNumber={1}
                        dataURLKey="data_url"
                    >
                        {({
                            onImageUpload,
                            dragProps,
                        }) =>
                        {
                            return (
                                <PopUpMenu
                                    id={profileUploadId}
                                    openBtnType={"icon"}
                                    openBtnChild={<img src={plusIcon} alt="add" />}
                                    openBtnClassName={classes.plusIcon}
                                    menuProps={{
                                        anchorOrigin: {
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        },
                                        transformOrigin: {
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }
                                    }}
                                    menuItems={
                                        [{
                                            onClick: () => { onImageUpload(); closeMenu(); },
                                            children:
                                                <div
                                                    className='center-y'
                                                    {...dragProps}
                                                >
                                                    <ListItemIcon className={classes.icon}>
                                                        <AddPicIcon className={classes.listIcon} />
                                                    </ListItemIcon>
                                                    Upload Photo
                                                </div>,
                                        },
                                        {
                                            onClick: () => { removePhoto(); closeMenu(); },
                                            children:
                                                profileImage !== "default.png" ? (
                                                    <div
                                                        className='center-y'
                                                    >
                                                        <ListItemIcon className={classes.icon}>
                                                            <BinIcon className={classes.listIcon} />
                                                        </ListItemIcon>
                                                        Remove Photo
                                                    </div>
                                                ) : (null)
                                            ,
                                        }]
                                    }
                                />
                            )
                        }
                        }
                    </ImageUploading >
                )}
        </>
    )
}

export default ChangeProfilePic