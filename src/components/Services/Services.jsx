import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { AwesomeText, Blur, BtnAwesome, Service, ServiceAwesome, ServiceCards, Container, LinksResume } from './StyledServices';
import Card from './Card/Card';
// import resume
import Resume from '../../resume/Ahmad Khatib cv.docx.pdf'
// import images
import heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: 'spring' };
  return (
    <Service id='Services'>
      <ServiceAwesome>
        <AwesomeText
          style={{ color: darkMode ? 'white' : '' }}
        >My Awesome </AwesomeText>
        <AwesomeText>Service</AwesomeText>
        <AwesomeText
          style={{ color: darkMode ? 'silver' : '' }}
        >Lorem ipsum dolor sit amet.Ut aspernatur ipsam in earum vero est<br />
          quisquam cupiditate sit vitae blanditiis sit enim porro aut eaque autem vel ratione saepe.
        </AwesomeText>
        <Blur />
        <LinksResume href={Resume} download >
          <BtnAwesome>Download Cv</BtnAwesome>
        </LinksResume>
      </ServiceAwesome>
      <ServiceCards>
        <Container
          initial={{ left: '30rem' }}
          whileInView={{ left: '25rem' }}
          transition={transition}
        >
          <Card image={heartemoji}
            heading={'Design'}
            details={'figma, sketch, photoShop, Adobe , Adobe xd  '} />
        </Container>
        <Container
          initial={{ left: '-5rem' }}
          whileInView={{ top: '12rem', left: '0rem' }}
          transition={transition}
        >
          <Card image={Glasses}
            heading={'Developer'}
            details={'Html ,css ,JavaScripts ,React '} />
        </Container>
        <Container
          initial={{ top: '25rem' }}
          whileInView={{ top: '20rem', left: '22rem' }}
          transition={transition}
        >
          <Card image={Humble}
            heading={'UI&Ux'}
            details={'Lorem ipsum dolor sit amet.Ut aspernatur ipsam in earum vero est '} />
        </Container>
        <Blur />
        <Blur />
      </ServiceCards>
    </Service>
  )
}

export default Services