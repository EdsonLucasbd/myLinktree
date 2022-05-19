import React from 'react';

import { Container, MyButton } from './styles';

interface ButtonProps {
  children: string,
  buttonLink: string,
  color: string
}

const ContactButton: React.FC<ButtonProps> = ({ children, buttonLink, color }) => {
  return (
    <Container href={buttonLink} tabIndex={1}>
      <MyButton borderColor={color}>
        {children}
      </MyButton>
    </Container>
  );
}

export default ContactButton;