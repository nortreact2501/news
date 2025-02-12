import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import BlogDetails from './pages/BlogDetails';
import useFetchBlogsListRedux from './hooks/useFetchBlogsListRedux';
import { Spinner } from 'react-bootstrap';

export default function App() {
  const {status, error, blogItems} = useFetchBlogsListRedux();
  if (status === 'pending') {
    return <Spinner />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs  blogItems={blogItems} />} />
          <Route path="blogs/:postId" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
