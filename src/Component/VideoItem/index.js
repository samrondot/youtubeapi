import React from 'react';
import './videoItem.css';

const VideoItem = (props) => {
    return (
        <div onClick={() => props.onVideoSelect(props.singleVideo)} className='video-item item'>
            <img className='ui image' src={props.singleVideo.snippet.thumbnails.medium.url}/>
            
            <div className='content'>
                <div className='header'>
                    {props.singleVideo.snippet.title}
                </div>
                
            </div>
        </div>
    );
};

export default VideoItem;