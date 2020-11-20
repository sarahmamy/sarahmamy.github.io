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
import comet from './assets/comet-screenshot.png';
import configames from './assets/configames-screenshot.png';
import bigblue from './assets/bigblue-screenshot.png';
import hanabi from './assets/hanabi-screenshot.png';
import rebecca from './assets/img/rebecca.png';
import shainblum from './assets/img/shainblum.png';
import saporito from './assets/img/saporito.png';

const Section = ({title, url, imgSrc, children}) => {
  return (
    <div>
      <h3 className='pt36'>
        <a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
      </h3>
      <div className='py18'>
        {children}
      </div>
      <a href={url}>
        <img className='w-full h120 h360-mm' alt={title} draggable={false} style={{objectFit: 'cover'}} src={imgSrc} />
      </a>
    </div>) 
}

const SocialIcons = ({href, alt, src}) => {
  return (
    <a href={href}><img className='h24 w24 mr6 opacity75-on-hover' alt={alt} draggable={false} src={src} /></a>
)}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='bg-white px36 py36 mx18 my18 px60-ml py60-ml mx36-ml my36-ml shadow-darken25-bold'>
          <h1>
            Sarah
            <br />Mamy
          </h1>
          <p className='pt36'>
            Hello! Welcome to my website.
            <br />
            I am a Product Manager based in Paris.
          </p>
          <div className='pt18'>
            <SocialIcons href="mailto:mamysrh@gmail.com" alt="email" src={emailIcon} />
            <SocialIcons href="https://linkedin.com/in/sarahmamy" alt="linkedin" src={linkedinIcon} />
            <SocialIcons href="https://github.com/sarahmamy" alt="github" src={githubIcon} />
            <SocialIcons href="https://instagram.com/sarah_mamy" alt="instagram" src={instaIcon} />
          </div>
          <h2 className='pt60'>
            Projects
          </h2>

          <Section title="Bigblue" url="https://bigblue.io" imgSrc={bigblue}>
            <p>I currently work there.</p> 
            <p className="pt6">
              We are helping small businesses handle their logistics, at affordable costs. Making logistics no longer complex but enjoyable.
            </p>
          </Section>

          <Section title="Configames" url="https://configames.vercel.app" imgSrc={configames}>
              A list of remote-friendly games playable with friends and family over a videoconference call.
              <br />Wanted to help people connect and enjoy fun moments while being locked down.
          </Section>

          <Section title="Hanabi" url="https://hanabi.cards" imgSrc={hanabi}>
            The online version of the popular collaborative card game <strong>Hanabi</strong>. We have around 4K monthly users.
            <br /> I co-developed the interface with my friend Bastien Formery, with additional help from Benjamin TD.
          </Section>

          <Section title="Comet" url="https://app.comet.co" imgSrc={comet}>
            <p className="pt6">
              Comet is a dazzling marketplace to match Tech & Data freelancers with companies looking for talents.
              <br /> I joined the Product Team, and worked there for three years (2017 - 2020). Among my achievements, I kickstarted the freelancer interface, designed all the mission flow and interactions between the freelancer and client.
            </p>
          </Section>

          <Section title="Escapades" url="https://escapades.bensarah.fr" imgSrc={escapades}>
            <p>
              A story-telling hiking blog centered around trail maps and photos.
              With Benjamin TD, we designed and developed the website from scratch in one month during our spare time.
            </p>
            <p className='pt6'>
              I am pretty proud of the lamp animation{' '}
              <a href='https://escapades.bensarah.fr' target='_blank' rel='noopener noreferrer'>if you want to take a look</a>.
            </p>
          </Section>

          <Section title="GéoSchool" url="https://www.geoschool.fr" imgSrc={geoponts}>
            We started building a geolocalized alumni platform in 2015.
            Since then, we launched in 8 engineering universities and gathered 3.5K+ users.
            Our design principles: user-centered, data-driven and fun-to-use. Access is reserved to members.
          </Section>


          <h2 className='pt60'>
            Hobbies
          </h2>
          <p className='py18'>
            I love going to art exhibits or watching movies.
            <br />
            When I am not at my desk, I am usually climbing or having a beer with friends.
            <br />
            I welcome bribes in the form of{' '}
            <span><img draggable="false" className="h24 w24 emoji" alt="🍍" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/pineapple_1f34d.png" /></span>.
          </p>
          <h3 className='pt36'>Cinema</h3>
          <p className='py18'>
            Here is a list of movies I love.
          </p>
          <div className='txt-ul'>
              <Cinema
                  title='Mommy'
                  director='Xavier Dolan'
                  image1Url='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/maple-leaf_1f341.png'
                  image1Alt='maple'
                  image2Url='https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/family-woman-boy_1f469-200d-1f466.png'
                  image2Alt='mother and son'
              ></Cinema>
              <Cinema
                  title='Au Poste !'
                  director='Quentin Dupieux'
                  image1Url='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/upside-down-face_1f643.png'
                  image1Alt='🙃'
                  image2Url='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/police-officer_1f46e.png'
                  image2Alt='👮‍♂️'
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
          <p className='py18'>
            Be thankful.
          </p>
          <div className='pt18 grid'>
            <RoleModel
              name='Nick Saporito'
              comment='His design tutorials are the best I’ve ever followed.'
              url='https://logosbynick.com/'
              imageUrl={saporito}
            ></RoleModel>
            <RoleModel
              name='Rebecca Manzoni'
              comment='Her short capsules on music - in French - are fun, full of anecdotes and enlightening.'
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
