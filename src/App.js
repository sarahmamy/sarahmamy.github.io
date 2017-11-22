import React, { Component } from 'react';
import './index.css';
import githubIcon from './assets/github.svg';
import instaIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';
import escapades from './assets/escapades-screenshot.png';
import geoponts from './assets/geoponts-screenshot.png';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='bg-white px36 py36 mx18 my18 px60-ml py60-ml mx36-ml my36-ml shadow-darken25-bold'>
          <h1 className=''>
            Sarah
            <br />Mamy
          </h1>
          <p className='pt36'>
            Hello! Welcome to my website.
            <br />
            I am a Product Manager based in Paris.
          </p>
          <div className='py12'>
            <a href='mailto:mamysrh@gmail.com'><img className='h24 w24 mr6' alt='email' draggable={false} src={emailIcon} /></a>
            <a href='https://linkedin.com/in/sarahmamy'><img className='h24 w24 mr6' alt='linkedin' draggable={false} src={linkedinIcon} /></a>
            <a href='https://github.com/sarahmamy'><img className='h24 w24 mr6' alt='github' draggable={false} src={githubIcon} /></a>
            <a href='https://instagram.com/sarah_mamy'><img className='h24 w24 mr6' alt='instagram' draggable={false} src={instaIcon} /></a>
          </div>
          <h2 className='pt36'>
            Projects
          </h2>
          <h3 className='pt24'>
            <a href='https://www.escapades.voyage' target='_blank' rel='noopener noreferrer'>Escapades</a>
          </h3>
          <p className='pt12'>
            A story-telling hiking blog centered around trail maps and photos.
            With Benjamin TD, we designed and developed the website from scratch.
          </p>
          <p className='py12'>
            I am pretty proud of the lamp animation{' '}
            <a href='https://www.escapades.voyage' target='_blank' rel='noopener noreferrer'>if you want to take a look</a>.
          </p>
          <a href='https://www.escapades.voyage'>
            <img className='w-full h120 h360-mm' alt='escapades' draggable={false} style={{objectFit: 'cover'}} src={escapades} />
          </a>
          <h3 className='pt24'>
            <a href='https://www.geoschool.fr' target='_blank' rel='noopener noreferrer'>GéoSchool</a>
          </h3>
          <p className='py12'>
            We started building a geolocalized alumni platform in 2015.
            Since then, we launched in 8 engineering universities and gathered 3.5K+ users.
            Our design principles: user-centered, data-driven and fun-to-use. Access is reserved to members.
          </p>
          <a href='https://geoponts.enpc.fr'>
            <img className='w-full h120 h360-mm' alt='geoponts' style={{objectFit: 'cover'}} src={geoponts} />
          </a>

          <h2 className='pt36'>
            Hobbies
          </h2>
          <p className='py12'>
            I love going to art exhibits or watching movies.
            <br />
            When I am not at my desk, I am usually climbing or having a beer with friends.
            <br />
            I welcome bribes in the form of{' '}
            <span><img draggable="false" className="h24 w24 emoji" alt="🍍" src="https://twemoji.maxcdn.com/2/72x72/1f34d.png" /></span>.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
