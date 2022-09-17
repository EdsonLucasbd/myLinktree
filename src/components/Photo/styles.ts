import { Image } from 'react-datocms';

import styled from 'styled-components';

interface ContainerProps {
  shadowColor?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 7.75rem;
  height: 7.75rem;
  -webkit-box-shadow: 5px 5px 15px -4px ${(props) => (props.shadowColor !== undefined ? `${props.shadowColor}` : 'transparent')}; 
  box-shadow: 0px 8px 15px -4px ${(props) => (props.shadowColor !== undefined ? `${props.shadowColor}` : 'transparent')};

  img {
    border-radius: 50%;
  }
`;

export const ProfilePhoto = styled(Image)`
  object-fit: fill;
  object-position: 50%;
  position: relative;
`
