import React from 'react'
import PropTypes from 'prop-types'

const Cinema = ({ title, director, image1Url, image2Url, image1Alt, image2Alt}) => (
    <div className='txt-li mt6'>
        <span>
            <img draggable="false" className="h24 w24 emoji mr6" alt={image1Alt} src={image1Url} />
        </span>
        <span>
            <img draggable="false" className="h24 w24 emoji mr6" alt={image2Alt} src={image2Url} />
        </span>
        {title} - <span className='color-darken50'>{director}</span>
    </div>
)

Cinema.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  image1Url: PropTypes.string,
  image2Url: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string
}

export default Cinema
