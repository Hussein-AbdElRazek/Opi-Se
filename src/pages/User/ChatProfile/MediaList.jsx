import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

import MediaItem from './MediaItem'
import { LoadingCenter } from '../../../components/ui';
import classes from './styles/Media.module.css';

const MediaList = (props) =>
{
    const { imageList, isLoadingGetChatMedia } = props;
    return (
        <div className={classes.listContainer}
        >
            <Grid
                container
                spacing={2}
            >
                {/* Loading Spinner */}
                {isLoadingGetChatMedia && (
                    <LoadingCenter />
                )}

                {/* Display image list */}
                {imageList?.map((img) => (
                    <Grid
                        xs={6}
                        sm={4}
                        sx={{ aspectRatio: 1, objectFit: 'cover' }}
                    >
                        <MediaItem
                            img={img.mediaUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default MediaList