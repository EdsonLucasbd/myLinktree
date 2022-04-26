import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

import { Container } from './styles';

interface SocialProps {
  socialName: string;
}
const SocialButton: React.FC<SocialProps> = ({ socialName }) => {

  const options: { [key: string]: ReactElement } = {
    instagram: <FaInstagram />,
    whatsapp: <FaWhatsapp />,
    facebook: <FiFacebook />,
    linkedin: <FiLinkedin />,
    email: <HiOutlineMail />
  }

  const returnButton = () => {
    for (const option in options) {
      if (option === socialName) {
        return options[option];
      }
    }
  }
  return (
    <IconContext.Provider value={{ color: "#3D9584", size: '1.88rem'}}>
      <Container>
        {returnButton()}
      </Container>
    </IconContext.Provider>
  )
}

export default SocialButton;