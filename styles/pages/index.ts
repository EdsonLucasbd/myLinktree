import styled from 'styled-components';

interface ContainerProps {
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : `${props.theme.background}`)};
  display: flex;
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

