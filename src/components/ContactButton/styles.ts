import styled from "styled-components";
import { device } from "../../../styles/theme";

interface ButtonProps {
  borderColor?: string
}

export const Container = styled.a`
  text-decoration: none;
  width: 25.25rem;
  height: 3.57rem;
  margin-bottom: 0.5rem;

  @media ${device.mobile} {
    width: 17.32rem;
    height: 3.5rem;
  }
`;

export const MyButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.borderColor !== undefined ? `${props.borderColor}` : `${props.theme.background}`)};
  color: #fff;
  cursor: pointer;
  border: none;
  width: 25.25rem;
  height: 3.57rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  transition: ease-in-out .2s;

  &:hover {
    background-color: ${(props) => (props.borderColor !== undefined ? `${props.borderColor}99` : `${props.theme.background}`)};
    color: #000;
  }

  @media ${device.mobile} {
    width: 17.32rem;
    height: 3.5rem;
  }
`