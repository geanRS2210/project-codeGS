import styled, { css, StyledComponent } from 'styled-components';
import { Theme } from '../../../styles/theme';

export const MenuStyled: StyledComponent<
  'header',
  any,
  object,
  never
> = styled.header`
  ${({ theme }: Theme) => css``}
`;
