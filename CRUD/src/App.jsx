import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { AddPost } from './components/AddPost/AddPost';
import { PostView } from './components/PostView/PostView';

function App() {
  return (
    <Router>
      <div className="page-grud">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;