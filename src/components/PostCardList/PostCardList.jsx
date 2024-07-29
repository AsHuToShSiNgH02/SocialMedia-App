import { useEffect, useContext } from 'react';
import PostCard from '../PostCard'
import axios from 'axios';
import PostsContext from '../../Providers/PostsProvider';

function PostCardList() {
    // const [posts, setPosts] = useState([]);
    const {posts, setPosts} = useContext(PostsContext);
    useEffect(() => {
        // we will download the content from dummyapi.io
        console.log(import.meta.env.VITE_APP_ID)
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((res) => {
            const resObject = res.data;
            setPosts([...resObject.data])
        })
    }, [posts])
    return ( (posts.length == 0) ? 
                "Loading..." : 
                posts.map((post) => <PostCard 
                    authorFirstName={post.owner.firstName}
                    image={post.image} 
                    content={post.text} 
                    key={post.id}
                />)
    );
    
}

export default PostCardList;