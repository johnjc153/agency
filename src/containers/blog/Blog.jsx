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
        <Article imgUrl={blog01} date="Dec 19, 2021" text="Help improve your SEO" />
      </div>
      <div className="agency__blog-container_groupB">
        <Article imgUrl={blog02} date="Mar 15, 2022" text="Enhance your internet presence" />
        <Article imgUrl={blog03} date="April 8, 2022" text="Increase marketability" />
        <Article imgUrl={blog04} date="June 25, 2022" text="Understand the fundamentals of creating a modern website" />
        <Article imgUrl={blog05} date="Oct 12, 2022" text="How we handle our business" />
      </div>
    </div>
  </div>
  )
}

export default Blog