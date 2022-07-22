import React, { useContext } from 'react';
import FlootingDiv from './flootingdiv/FlootingDiv';
import { Heroo, HeroLeft, HeroName, HeroRight, NameText, BtnHero, IconHero, IconImg, Links, Img, Flooting1, Flooting2, Imoje, Blur } from './StyledHero'
// img icon social media  import 
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
// img img social media  import 
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import { themeContext } from '../../Context';

const Hero = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' };
    return (
        <Heroo>
            <HeroLeft>
                <HeroName>
                    <NameText
                        style={{ color: darkMode ? 'white' : '' }}
                    >Hi! I Am</NameText>
                    <NameText>Ahmad khatib</NameText>
                    <NameText
                        style={{ color: darkMode ? 'silver' : '' }}
                    > am an information technology engineer specialized in the field of front end development. I have a
                        lot of passion and love for the work that I do and I enjoy everything I do ventricular assist device
                        care management</NameText>
                </HeroName>
                <BtnHero>Hire me</BtnHero>
                <IconHero>
                    <Links href="https://github.com/ahmadkhatib1">
                        <IconImg src={Github} alt="github" />
                    </Links>
                    <Links href="https://www.linkedin.com/in/ahmad-khatib-00aab6198/">
                        <IconImg src={LinkedIn} alt="LinkedIn" />
                    </Links>
                    <Links href="https://www.instagram.com/ahmadkhatib__/">
                        <IconImg src={Instagram} alt="instagram" />
                    </Links>
                </IconHero>
            </HeroLeft>
            <HeroRight>
                <Img src={Vector1} alt="Vector1" />
                <Img src={Vector2} alt="Vector2" />
                <Img src={Boy} alt="Boy" />
                <Flooting1
                    initial={{ top: '-4%', left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                >
                    <FlootingDiv Img={Crown} text1="web" text2="Developer" />
                </Flooting1>
                <Flooting2
                    initial={{ top: '62.5%', left: '-2%' }}
                    whileInView={{ left: '' }}
                    transition={transition}
                >
                    <FlootingDiv Img={Thumbup} text1="Best " text2="Design" />
                </Flooting2>
                <Imoje src={Glassesimoji}
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                />
                <Blur>
                    <Blur></Blur>
                </Blur>
            </HeroRight>
        </Heroo>
    )
}

export default Hero