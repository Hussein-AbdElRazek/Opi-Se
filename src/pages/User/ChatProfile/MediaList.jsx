import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

import MediaItem from './MediaItem'
import { LoadingCenter } from '../../../components/ui';
import classes from './styles/Media.module.css';

const MediaList = (props) =>
{
    const { imageList, isLoadingGetChatMedia, lastElementRef } = props;
    return (
        <div className={classes.listContainer}
        >
            <Grid
                container
                spacing={2}
            >
                {/* Display image list */}
                {imageList?.map((img, index) => (
                    <Grid
                        xs={6}
                        sm={4}
                        sx={{ aspectRatio: 1, objectFit: 'cover' }}
                        key={index}
                    >
                        <MediaItem
                            img={img.mediaUrl}
                            lastElementRef={index === imageList.length - 1 ? lastElementRef : null}
                        />
                    </Grid>
                ))}

                {/* Loading Spinner */}
                {isLoadingGetChatMedia && (
                    <LoadingCenter />
                )}
            </Grid>
        </div>

    )
}

export default MediaList