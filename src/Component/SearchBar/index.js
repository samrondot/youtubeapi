import axios from 'axios';
import React, { useState } from 'react';
import VideoDetail from '../VideoDetail';
import VideoList from '../VideoList';
import './searchbar.css';

const SearchBar = (props) => {
    const listItems = props.items.map((item, index) => {
       
        return(
        <> 
        <div className='title active' key={item.title}
            onClick ={() => console.log('hello', index)}>
            <i className='dropdown icon'></i>
                 {item.title}
        </div>
        <div className='content active'>
            <p>{item.content}</p>
        </div>
         </>
        )
    })

   const [searchItem, setSearchItem] = useState('')
   const [videos, setVideos] = useState([])
   const [selectedVideo, setSelectedVideo] = useState(null)

    function onVideoSelect (video) {
        console.log(video);
       setSelectedVideo(video);
    }
    
    function onFormSubmit(event) {
        //this prevents the form from being submitted after every keystroke
        event.preventDefault();
        const KEY = 'AIzaSyBt41FxrZ6q-nOZSSW_TVXOUJw6DTx26fs'
        onSearchSubmit()
        async function onSearchSubmit(){
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params : {  
                   part : 'snippet',
                   maxResults : 5,
                   type: 'video',
                    q: searchItem,
                    key : KEY,
                   
                },
              
            });
           setVideos(response.data.items)
           setSelectedVideo(response.data.items[0])
    
        };
      
    }
    return (
        <>
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} id='formSub' className = 'ui form' value={searchItem} onChange = {(e) => setSearchItem(e.target.value)}>
                <div className='field'>
                    <label>Video Search</label>
                    <input type='text'></input>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide columm'>
                                <VideoDetail video = {selectedVideo}/>
                            </div>
                             <div className='five wide column'>
                                 <VideoList videos = {videos} onVideoSelect = {onVideoSelect}/>
                                 {listItems}
                             </div>
                             
                            
                             
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
            </form>
        </div>
        
        </>
        
    );
};

export default SearchBar;