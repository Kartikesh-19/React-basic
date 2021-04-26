import './App.css';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost'
import Edit from './Edit'
import Post from './Post'

function App() {
  return (
    <div className="App">
      <PostForm/>
      <AllPost/>
      <Edit/>
      <Post/>


    </div>
  );
}

export default App;
