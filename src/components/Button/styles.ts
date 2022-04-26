import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #000;
  border: 1px solid #3D958450;
  width: 25.25rem;
  height: 3.57rem;
  font-weight: bold;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  transition: ease-in-out .2s;

  &:hover {
    background-color: #3D9584;
    color: #fff;
  }
`