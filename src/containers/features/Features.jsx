import React from 'react'
import './features.css'
import { Feature } from '../../components'



const featuresData = [
  {
    title: 'Improve SEO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, accusamus?', 
  },
  {
    title: 'Improve SEO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, accusamus?', 
  },
  {
    title: 'Improve SEO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, accusamus?', 
  },
  {
    title: 'Improve SEO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, accusamus?', 
  },
]

const Features = () => {
  return (
    <div className="agency__features section__padding" id='features'>
      <div className="agency__features-heading">
        <h1 className="gradient__text">Work with us today</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="agency__features-container">
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={ item.title + index} />
          ))
        }
      </div>


    </div>
  )
}

export default Features