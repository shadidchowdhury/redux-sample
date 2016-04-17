import React from 'react';
import VideoListItem from './video_list_item';

const videoList = (props) => {

    const videoItems =  props.videos.map( (video) => {return <VideoListItem video={video}/>});
    return (
        <ul className="col-md4- list-group">
            {videoItems}
        </ul>
    );
};

export default videoList;

