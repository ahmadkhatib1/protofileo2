import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { Work, WorkAwesome, AwesomeText, Blur, BtnAwesome, WorkCircle, MainCircle, PrimCircle, ImageCircle, CircleBack } from './StyledWorked'
// import image
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
const Works = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Work>
            <WorkAwesome>
                <AwesomeText
                    style={{ color: darkMode ? 'white' : '' }}
                >works for All This </AwesomeText>
                <AwesomeText>Brand & Client</AwesomeText>
                <AwesomeText
                    style={{ color: darkMode ? 'silver' : '' }}
                >Lorem ipsum dolor sit amet.Ut aspernatur ipsam in earum vero est<br />
                    quisquam cupiditate sit vitae blanditiis sit enim porro aut <br />
                    eaque autem vel ratione saepe.sit vitae blanditiis sit enim porro aut<br />
                    quisquam cupiditate sit vitae blanditiis sit enim porro aut
                </AwesomeText>
                <Blur />
                <BtnAwesome>Hire me</BtnAwesome>
            </WorkAwesome>
            <WorkCircle>
                <MainCircle
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                >
                    <PrimCircle>
                        <ImageCircle src={Upwork} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Fiverr} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Amazon} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Shopify} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Facebook} alt />
                    </PrimCircle>
                </MainCircle>
                <CircleBack />
                <CircleBack />
            </WorkCircle>
        </Work>
    )
}

export default Works