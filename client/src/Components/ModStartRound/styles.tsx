import styled from '@emotion/styled';

export const Container = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  // padding: 0.5rem;
`;

export const FlexItem = styled.div`
  width: 100%;
  flex-basis: 100%;
`;

export const GridStyle =styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridHeader = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-end;
  justify-content: center;
`;

export const GridButton = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`