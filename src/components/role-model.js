import React from 'react'
import PropTypes from 'prop-types'

const RoleModel = ({ name, comment, url, imageUrl }) => (
    <div className='col--6-ml col--8-mm col--offr1 w520'>
      <h3 className='pt30'><a href={url} target='_blank' rel='noopener noreferrer'>{name}</a></h3>
      <p className='pt18 pb6 hmin72'>{comment}</p>
      <div className='z-neg1 flex-parent flex-parent--center-main flex-parent--end-cross mt12 px12 bg-gradient h240 hide-shadow'>
        <div className='flex-child hmax180 wmax300 shadow-darken25-bold'><img draggable={false} src={imageUrl} alt={name} className=''/></div>
      </div>
      <div className='z5 bg-white h36'></div>
    </div>
)

RoleModel.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string
}

export default RoleModel
