import { Carde, Heading, ImgCard, Details, BtnService } from './StyledCard';
// context
import React, { useContext } from 'react';
import { themeContext } from '../../../Context';
const Card = ({ image, heading, details }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Carde
      style={{ color: darkMode ? 'white' : '', background: 'rgba(100, 100, 0, 0.26)' }}
    >
      <ImgCard src={image} />
      <Heading>
        {heading}
      </Heading>
      <Details
          style={{ color: darkMode ? 'silver' : '', }}
      >
        {details}
      </Details>
      <BtnService 
        style={{ color: darkMode ? 'black' : '', }}
      >
        Learn More
      </BtnService>
    </Carde>
  )
}

export default Card