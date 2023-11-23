import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page404 from '../Components/Page404';
import BlogHome from '../Components/BlogHome';
import ReadBlogCompo from '../Components/ReadBlogCompo';
import BlogComponent from '../Components/BlogComponent';
function BlogRouteCompo() {
    return (
        <Routes>
            <Route path='/' element={<BlogHome />} />
            <Route path='/blog/:category' element={<BlogComponent/>}/>
            <Route path='/:Blog/:ID' element={<ReadBlogCompo />}/>
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default BlogRouteCompo
