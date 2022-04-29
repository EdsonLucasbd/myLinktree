import Link from 'next/link';
import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiFacebook, FiLinkedin, FiMail } from 'react-icons/fi'

import { Container } from './styles';

interface SocialProps {
  socialName: string;
  socialLink: string;
}
const SocialButton: React.FC<SocialProps> = ({ socialName, socialLink }) => {

  const options: { [key: string]: ReactElement } = {
    instagram: <FaInstagram />,
    whatsapp: <FaWhatsapp />,
    facebook: <FiFacebook />,
    linkedin: <FiLinkedin />,
    email: <FiMail />
  }

  const returnButton = () => {
    for (const option in options) {
      if (option === socialName) {
        return (
          <Link href={socialLink}>
            <a target={'_blank'} rel='noopener'>
              {options[option]}
            </a>
          </Link>
        );
      }
    }
  }
  return (
    <IconContext.Provider value={{ color: "#3D9584", size: '1.88rem' }}>
      <Container tabIndex={1}>
        {returnButton()}
      </Container>
    </IconContext.Provider>
  )
}

export default SocialButton;