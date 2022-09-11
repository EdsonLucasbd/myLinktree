import React from 'react';

import { Container, MyButton } from './styles';

interface ButtonProps {
  children: string,
  buttonLink: string,
  color?: string,
  hoverColor?: string,
  textColor?: string,
  textHoverColor?: string
}

const ContactButton: React.FC<ButtonProps> = ({ children, buttonLink, color,
  hoverColor, textColor, textHoverColor }) => {
  return (
    <Container href={buttonLink} tabIndex={1}>
      <MyButton
        borderColor={color}
        hoverColor={hoverColor}
        textColor={textColor}
        textHoverColor={textHoverColor}
        aria-label={`Entre em contato comigo via ${children}`}
      >
        {children}
      </MyButton>
    </Container>
  );
}

export default ContactButton;