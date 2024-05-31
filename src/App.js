import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import EditBlog from './EditBlog';


function App() {
  const [posts, setPosts] = useState([]);

  function addnewPost(title, content) {
    let newPost = {
      id: new Date().getTime(),
      title: title,
      content: content
    };
    setPosts([...posts, newPost]);
  }

  function handleDelete(id) {
      setPosts(posts.filter((el) => (
        el.id !== id
      )))
  }

  function editPost(){
    
  }
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage posts={posts} handleDelete={handleDelete}/>} />
          <Route path='/add' element={<BlogPage addnewPost={addnewPost} />} />
          <Route path='/edit/:id' element={<EditBlog/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
