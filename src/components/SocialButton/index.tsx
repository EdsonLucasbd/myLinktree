import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

// import { Container } from './styles';

interface SocialProps {
  socialName: string
}

const SocialButton: React.FC = ({socialName}) => {
  const options = {
    intagram: <FaInstagram/>,
    whatsapp: <FaWhatsapp/>,
    facebook: <FiFacebook/>,
    linkedin: <FiLinkedin/>,
    email: <HiOutlineMail/>
  }
  return (Object.keys(options).find(socialName));
}

export default SocialButton;