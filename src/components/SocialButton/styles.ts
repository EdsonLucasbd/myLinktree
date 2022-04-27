import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  cursor: pointer;

  svg {
    transition: all .2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`