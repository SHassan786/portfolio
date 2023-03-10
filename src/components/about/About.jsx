import React from 'react'
import './about.css'
import picture from '../../assests/me.png'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about"> 
        <h5> Get To Know</h5>
        <h2> About Me </h2>

        <div className="container about__container"> 
        <div className="about__me">
        <div className='about__me-image'> 
        <img src={picture} alt="picture" />
        </div> 
        </div>

        <div className="about__content">
          <div className='about__cards'>
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5> Experience</h5>
            <small> 1+ Years Working </small>
          </article>
          <article className="about__card">
            <HiUsers className="about__icon" />
            <h5> Clients</h5>
            <small> 10+ Worldwide </small>
          </article>
          <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
            <h5> Projects </h5>
            <small> 5+ Completed </small>
          </article>
        </div>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
        </div>
    </section>

  )
}

export default About