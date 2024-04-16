import React from 'react'
import { ecg, heartrate, proto1, proto2, spo2, thermo } from '../assets/images/Image'

import '../styles/Services.css'
const Services = () => {

  const services = [
    {
      'name': 'Temperature',
      'image':thermo
    },
    {
      'name': 'SpO2',
      'image':spo2
    },
    {
      'name':'Heart Rate',
      'image':heartrate
    },
    {
      'name': 'ECG',
      'image':ecg
    }
  ]

  return (
    <div className='services'>
      <section className="imgproto">
        <img className='proto' src={proto1} alt="proto1" />
        <img className='proto' src={proto2} alt="proto2" />
      </section>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptas pariatur repellendus dolorum dolore impedit accusamus rem accusantium illum eos facilis suscipit reiciendis ullam soluta nisi aliquam ipsam. Inventore, nihil?
      </p>
        <ul className="facility_sec">
        {
          services.map((item, index) => {
            return (
              <li key={index} className="facility_item">
                <img src={item['image']} alt="thermo" className="facility_image" />
                <h2 className="facility_name">
                  {item['name']}
                </h2>
              </li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default Services