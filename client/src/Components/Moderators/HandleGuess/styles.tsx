import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
`;

export const TeamAvatar = styled(Avatar)`
	left: -10.75rem;
	top: -8rem;
	width: 9.5rem;
	height: 9.5rem;
	margin: 0;
`
