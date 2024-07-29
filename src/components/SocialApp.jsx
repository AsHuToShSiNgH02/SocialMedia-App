import MainContainer from './MainContainer/MainContainer'
import Navbar from './Navbar/Navbar';
import Input from './Input/Input';
import PostsContext from '../Providers/PostsProvider';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SocialApp() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((res) => {
            const resObject = res.data;
            setPosts([...resObject.data])
        })
    }, [])
    return (
        <div>
            <PostsContext.Provider value={ {posts, setPosts} }>
                <Navbar/>
                <Input/>
                <MainContainer />
            </PostsContext.Provider>
        </div>
    )
}

export default SocialApp