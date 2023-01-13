import React from 'react'
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'

const Blog = () => {
  return (
    <div className="agency__blog section__padding" id="blog">
      <div className="agency__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>

      <div className="agency__blog-container">
        
        <div className="agency__blog-container_groupA">
          <Article imgUrl={blog01} date="Dec 19, 2021" text="5 Tips for Designing a User-Friendly Website" />
        </div>

        <div className="agency__blog-container_groupB">
          <Article imgUrl={blog02} date="Mar 15, 2022" text="The Importance of Mobile Responsive Design" />
          <Article imgUrl={blog03} date="April 8, 2022" text="Maximizing the Power of Social Media for Your Business" />
         <Article imgUrl={blog04} date="June 25, 2022" text="The Top 5 Website Design Trends of 2021" />
          <Article imgUrl={blog05} date="Oct 12, 2022" text="Why Your Business Needs a Professional Website" />
       </div>
      </div>
  </div>
  )
}

export default Blog