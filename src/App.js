import React, { Component } from 'react';
import './index.css';
import Cinema from './components/cinema'
import RoleModel from './components/role-model'
import githubIcon from './assets/github.svg';
import instaIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';
import escapades from './assets/escapades-screenshot.png';
import geoponts from './assets/geoponts-screenshot.png';
import rebecca from './assets/img/rebecca.png';
import shainblum from './assets/img/shainblum.png';
import saporito from './assets/img/saporito.png';



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
          <div className='pt12'>
            <a href='mailto:mamysrh@gmail.com'><img className='h24 w24 mr6' alt='email' draggable={false} src={emailIcon} /></a>
            <a href='https://linkedin.com/in/sarahmamy'><img className='h24 w24 mr6' alt='linkedin' draggable={false} src={linkedinIcon} /></a>
            <a href='https://github.com/sarahmamy'><img className='h24 w24 mr6' alt='github' draggable={false} src={githubIcon} /></a>
            <a href='https://instagram.com/sarah_mamy'><img className='h24 w24 mr6' alt='instagram' draggable={false} src={instaIcon} /></a>
          </div>
          <h2 className='pt60'>
            Projects
          </h2>
          <h3 className='pt24'>
            <a href='https://www.escapades.voyage' target='_blank' rel='noopener noreferrer'>Escapades</a>
          </h3>
          <p className='pt12'>
            A story-telling hiking blog centered around trail maps and photos.
            With Benjamin TD, we designed and developed the website from scratch in one month during our spare time.
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

          <h2 className='pt60'>
            Hobbies
          </h2>
          <p className='py12'>
            I love going to art exhibits or watching movies.
            <br />
            When I am not at my desk, I am usually climbing or having a beer with friends.
            <br />
            I welcome bribes in the form of{' '}
            <span><img draggable="false" className="h24 w24 emoji" alt="🍍" src="https://apps.timwhitlock.info/static/images/emoji/emoji-apple/1f34d.png" /></span>.
          </p>
          <h3 className='pt24'>Cinema</h3>
          <p className='py12'>
            Here is a list of movies I love.
          </p>
          <div className='txt-ul'>
              <Cinema
                  title='Mommy'
                  director='Xavier Dolan'
                  image1Url='https://apps.timwhitlock.info/static/images/emoji/emoji-apple/1f341.png'
                  image1Alt='maple'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/family-woman-boy_1f469-200d-1f466.png'
                  image2Alt='mother and son'
              ></Cinema>
              <Cinema
                  title='There Will Be Blood'
                  director='Paul Thomas Anderson'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/syringe_1f489.png'
                  image1Alt='blood'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/fuel-pump_26fd.png'
                  image2Alt='fuel'
              ></Cinema>
              <Cinema
                  title='A Separation'
                  director='Asghar Farhadi'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/flag-for-iran_1f1ee-1f1f7.png'
                  image1Alt='Iran'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/broken-heart_1f494.png'
                  image2Alt='separation'
              ></Cinema>
              <Cinema
                  title='Jackie Brown'
                  director='Quentin Tarantino'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/samsung/100/pistol_1f52b.png'
                  image1Alt='gun'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/female-office-worker-type-6_1f469-1f3ff-200d-1f4bc.png'
                  image2Alt='Jackie'
              ></Cinema>
              <Cinema
                  title='L’Esquive'
                  director='Abdellatif Kechiche'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/couple-with-heart_1f491.png'
                  image1Alt='couple love'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/performing-arts_1f3ad.png'
                  image2Alt='theatre'
              ></Cinema>
              <Cinema
                  title='The Grand Budapest Hotel'
                  director='Wes Anderson'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/hotel_1f3e8.png'
                  image1Alt='hotel'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-1-2_1f935-1f3fb_1f3fb.png'
                  image2Alt='groom'
              ></Cinema>
              <Cinema
                  title='La Mala Educación'
                  director='Pedro Almodóvar'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/two-men-holding-hands_1f46c.png'
                  image1Alt='couple'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/flag-for-spain_1f1ea-1f1f8.png'
                  image2Alt='Spain'
              ></Cinema>
              <Cinema
                  title='Be Kind Rewind'
                  director='Michel Gondry'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/videocassette_1f4fc.png'
                  image1Alt='videocassette'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/film-projector_1f4fd.png'
                  image2Alt='cinema'
              ></Cinema>
              <Cinema
                  title='De Battre Mon Coeur S’est Arrêté'
                  director='Michel Audiard'
                  image1Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/man_emoji-modifier-fitzpatrick-type-1-2_1f468-1f3fb_1f3fb.png'
                  image1Alt='Romain Duris'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/musical-keyboard_1f3b9.png'
                  image2Alt='piano'
              ></Cinema>
          </div>
          <h2 className='pt60'>
            People I admire
          </h2>
          <p className='py12'>
            Be thankful.
          </p>
          <div class='pt12'>
            <RoleModel
              name='Nick Saporito'
              comment='His design tutorials are the best Ive ever followed.'
              url='https://logosbynick.com/'
              imageUrl={saporito}
            ></RoleModel>
            <RoleModel
              name='Rebecca Manzoni'
              comment='Her short capsules on music are fun, full of anecdotes and enlightening (in French).'
              url='https://www.franceinter.fr/emissions/pop-co'
              imageUrl={rebecca}
            ></RoleModel>
            <RoleModel
              name='Michael Shainblum'
              comment='A guy whose photos are breathtaking and exotic.'
              url='http://www.shainblumphoto.com/'
              imageUrl={shainblum}
            ></RoleModel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
