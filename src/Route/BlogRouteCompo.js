import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page404 from '../Components/Page404';
import BlogHome from '../Components/BlogHome';
import BlogHollywood from '../Components/BlogHollywood';
import BlogBollywood from '../Components/BlogBollywood';
import BlogFitness from '../Components/BlogFitness';
import BlogSports from '../Components/BlogSports';
import BlogTech from '../Components/BlogTech'
function BlogRouteCompo() {
    return (
        <Routes>
            <Route path='/' element={<BlogHome />} />
            <Route path='/hollywood' element={<BlogHollywood />} />
            <Route path='/bollywood' element={<BlogBollywood />} />
            <Route path='/fitness' element={<BlogFitness />} />
            <Route path='/technology' element={<BlogTech />} />
            <Route path='/sports' element={<BlogSports />} />

            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default BlogRouteCompo
