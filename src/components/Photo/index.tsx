import { Image, ResponsiveImageType } from 'react-datocms';
import React from 'react';

import { Container, ProfilePhoto } from './styles';

interface Params {
  url: ResponsiveImageType
}

const Photo = ({ url }: Params) => {
  return (
    <Container>
      <Image data={url} layout='fill'/>
    </Container>
  );
}

export default Photo;