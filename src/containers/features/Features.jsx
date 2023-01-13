import React from 'react'
import './features.css'
import { Feature } from '../../components'



const featuresData = [
  {
    title: 'Custom website development',
    text: 'Our team will work with you to understand your business goals and design a website that meets your unique needs.', 
  },
  {
    title: 'Responsive design',
    text: 'All of our websites are built to be fully responsive, so they look great on any device.', 
  },
  {
    title: 'Streamlined design process',
    text: 'From start to finish, we make the design process as smooth and stress-free as possible', 
  },
  {
    title: 'Ongoing support',
    text: "We don't just build your website and disappear. We're here to support you every step of the way, with ongoing maintenance and updates as needed.", 
  },
]

const Features = () => {
  return (
    <div className="agency__features section__padding" id='features'>
      <div className="agency__features-heading">
        <h1 className="gradient__text">We want to work with you</h1>
        <p>We specialize in creating stunning, functional websites that help businesses of all sizes thrive online. When you work with us, you can expect:</p>
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