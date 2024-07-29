import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import PostsContext from '../../Providers/PostsProvider';

function Input() {
    const[postText, setPostText] = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const[loading, setLoading] = useState(false);
    const {posts, setPosts} = useContext(PostsContext);

    async function createPost(){
        setLoading(true);
        axios.post('https://dummyapi.io/data/v1/post/create', 
        {
            owner: '60d0fe4f5311236168a109ca',
            text: postText,
            image: imageUrl,
            likes: 0,
            publishDate: new Date()
        },
        {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }

        }
        )
        .then(response => {
            console.log(response.data);
            setPosts([...posts, response.data])
            setLoading(false);
            setImageUrl("");
            setPostText("");
        })
    }

    return (
        <Box sx={{mt: '1rem'}}>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                label="Your next post" 
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                variant="outlined" />

            <TextField 
                fullWidth 
                sx={{mt: '1rem', mb: '1rem'}} 
                id="outlined-basic" 
                label="Image for your post ..." 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                variant="outlined" />
            {
                (!loading) ? <Button loading variant="contained" onClick={createPost}>Submit</Button> : <LoadingButton loading variant="contained" >Submit</LoadingButton>
            }
            
        </Box>
    )
}

export default Input;
