import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding-top: 0.5rem;
  /* padding-top: 0.8rem; */
  cursor: pointer;

  svg {
    transition: all .2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`