import { Image, ResponsiveImageType } from 'react-datocms';
import React from 'react';

import { Container } from './styles';

interface Params {
  url: ResponsiveImageType;
  shadowColor?: string;
}

export const Photo = ({ url, shadowColor }: Params) => {
  return (
    <Container shadowColor={shadowColor}>
      <Image data={url} />
    </Container>
  );
}
