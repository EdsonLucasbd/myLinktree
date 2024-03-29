import styled from 'styled-components';
import { device } from '../theme';

interface ContainerProps {
  backgroundColor?: string,
  textColor?: string
}
interface TextProps {
  textColor?: string
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

export const Title = styled.h1<TextProps>`
  color: ${(props) => (props.textColor !== undefined ? `${props.textColor}` : `${props.theme.color}`)};
  font-weight: bold;
  font-size: 1rem;
  padding-top: 2.07rem;
`
export const Description = styled.h2<TextProps>`
  color: ${(props) => (props.textColor !== undefined ? `${props.textColor}` : `${props.theme.color}`)};
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

export const Footer = styled.div<ContainerProps>`
  background: ${(props) => (props.backgroundColor !== undefined ? `${props.backgroundColor}` : `${props.theme.background}`)} !important;
  color: ${(props) => (props.textColor !== undefined ? `${props.textColor}` : `${props.theme.color}`)};
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: transparent;

  p {
    font-size: 0.9rem;
    margin-right: .3125rem;
  }

  @media ${device.mobile} {
    img {
      width: 21px !important;
      height: 21px !important      
    }
    font-size: 0.5rem
  }
`