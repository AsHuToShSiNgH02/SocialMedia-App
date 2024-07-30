import MainContainer from './MainContainer/MainContainer'
import Input from './Input/Input';
import PostsContext from '../Providers/PostsProvider';
import usePosts from '../hooks/usePosts';

function SocialApp() {
    const [posts, setPosts] = usePosts();
    return (
        <div>
            <PostsContext.Provider value={ {posts, setPosts} }>
                <Input/>
                <MainContainer />
            </PostsContext.Provider>
        </div>
    )
}

export default SocialApp