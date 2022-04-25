import { Image } from 'react-datocms';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 7.75rem;
  height: 7.75rem;
  border-radius: 50%;
`;

export const ProfilePhoto = styled(Image)`
  object-fit: fill;
  object-position: 50%;
  position: relative;
`
