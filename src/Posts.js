import {useState} from "react";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [newPostText, setNewPostText] = useState('')
    const addPost = () => {
        let newPostID
        if (!posts.length) {
            newPostID = 1
        } else {
            newPostID = posts[posts.length - 1].id + 1
        }
        setPosts([...posts, {id: newPostID, title: newPostText}])
    }
    const removePostById = (id) => {
        const newPosts = posts.filter(post => post.id !== id)
        console.log(newPosts)
        setPosts(newPosts)
    }
    const onInputChange = (value) => {
        setNewPostText(value)
    }
    return (
        <div className="App">
           <div>
                <input
                    onChange={(e)=>  onInputChange(e.target.value)}
                    value={newPostText}
                    type="text"
                    placeholder="Пост..."
                />
                <button onClick={addPost}>Добавить пост</button>
            </div>
            {posts.map(post => <div key={post.id}>
                {post.id}. {post.title}
                <button onClick={() => removePostById(post.id)}>Удалить пост</button>
            </div>)}
            
        </div>
    );
}

export default Posts;