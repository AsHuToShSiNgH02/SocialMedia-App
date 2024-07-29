import { useEffect, useContext } from 'react';
import PostCard from '../PostCard'
import axios from 'axios';
import PostsContext from '../../Providers/PostsProvider';

function PostCardList() {
    // const [posts, setPosts] = useState([]);
    const {posts, setPosts} = useContext(PostsContext);

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