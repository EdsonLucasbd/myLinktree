import React from 'react';

import { Container, MyButton } from './styles';

interface ButtonProps {
  children: string,
  buttonLink: string
}

const ContactButton: React.FC<ButtonProps> = ({ children, buttonLink }) => {
  return (
    <Container href={buttonLink}>
      <MyButton>
        {children}
      </MyButton>
    </Container>
  );
}

export default ContactButton;