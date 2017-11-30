import React from 'react'
import PropTypes from 'prop-types'

const Cinema = ({ title, director, image1Url, image2Url }) => (
    <div className='txt-li mt6'>
        <span>
            <img draggable="false" className="h24 w24 emoji mr6" alt="videocassette" src={image1Url} />
        </span>
        <span>
            <img draggable="false" className="h24 w24 emoji mr6" alt="hotel" src={image2Url} />
        </span>
        {title} - <span className='color-darken50'>{director}</span>
    </div>
)

Cinema.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  image1Url: PropTypes.string,
  image2Url: PropTypes.string
}

export default Cinema
