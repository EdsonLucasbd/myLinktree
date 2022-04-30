import styled from 'styled-components';
import { device } from '../theme';

interface ContainerProps {
  backgroundColor?: string
}

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const ContentContainer = styled.div<ContainerProps>`
  background: ${(props) => (props.backgroundColor !== undefined ? `${props.backgroundColor}` : `${props.theme.background}`)};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center !important;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  padding-top: 2.07rem;
`

export const Description = styled.h2`
  margin: 0 1rem;
  max-width: 100%;
  font-weight: 500;
  font-size: 0.88rem;
  padding-bottom: 2.07rem;

  @media ${device.mobile} {
    text-align: center;
    max-width: 80%;
  }
`

export const Footer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.9rem;
  }

  @media ${device.mobile} {
    image{
      width: 25px;
      height: 25px      
    }
  }
`