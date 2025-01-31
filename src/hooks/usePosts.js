import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePosts() {
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
    }, []);

    return [posts, setPosts];
}


