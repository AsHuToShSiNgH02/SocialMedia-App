// import  PostCard from './PostCard';
import MainContainer from './MainContainer/MainContainer'
import Navbar from './Navbar/Navbar';
import Input from './Input/Input';
import PostsContext from '../Providers/PostsProvider';
import { useState } from 'react';

function SocialApp() {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            <PostsContext.Provider value={ {posts, setPosts} }>
                <Navbar/>
                <Input/>
                <MainContainer/>
            </PostsContext.Provider>
        </div>
    )
}

export default SocialApp