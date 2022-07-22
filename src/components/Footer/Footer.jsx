import React from 'react'
import { ContentFooter, EmailFooter, Footers, IconFooter } from './StyledFooter'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Face from '@iconscout/react-unicons/icons/uil-facebook';
import Git from '@iconscout/react-unicons/icons/uil-github';
const Footer = () => {
  return (
    <Footers>
      <img src={Wave} alt="Wave" />
      <ContentFooter>
        <EmailFooter>
          ahmadkhatib199@gmail.com
        </EmailFooter>
        <IconFooter>
          <Insta color='white' size='3rem' />
          <Face color='white' size='3rem' />
          <Git color='white' size='3rem' />
        </IconFooter>
      </ContentFooter>
    </Footers>
  )
}

export default Footer