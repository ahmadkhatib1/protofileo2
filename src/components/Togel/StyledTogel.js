import styled from 'styled-components';
export const Toggel = styled.div`
   display: flex;
  justify-content: space-between;
  border: 3px solid var(--orange);
  border-radius:1rem;
  position: relative;
  padding: 2px;
  cursor: pointer;
  &>*{
    width: 1rem;
    height: 1rem;
    color: var(--orange);
  }
`;
export const BtnTogel = styled.div`
 border-radius: 100%;
 background:var(--orange);
 position: absolute;
`;