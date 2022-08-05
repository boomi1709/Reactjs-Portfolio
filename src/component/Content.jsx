import React from 'react'
import wave from '../img/Emoji.png'
import Image from '../img/44400.jpg'

function Content() {
  return (
    <div className='content'>
      <main>
        <div>
          <h1>Hi <img src={wave} alt="wave" width={40} /></h1>
          <h1>I'm Boomibalan.D</h1>
          <h1>Front-end developer</h1>
          <p>I design and developer experiences that make people's lives simpler through Web and Mobile Apps.
             I work with Figma, HTML5, CSS3, JavaScript, React, ReactNative and Flutter</p>
        </div>
        <div className='buttons'>
          <button className="cta hire">HIRE ME</button>
          <button className="cta project">SEE MY PROJECTS</button>
        </div>
      </main>
      <figure>
        <img src={Image} alt="Charles Kasasira" className='me-img' width={350} />
        <div className='img-bg'></div>
      </figure>
    </div>
  )
}

export default Content