import styled, { css } from 'styled-components';
import { Theme } from '../../../styles/theme';

export const MenuStyled = styled.div`
  ${({ theme }: Theme) => css`
    box-sizing: border-box;
    position: relative;
    top: 0px;
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: ${theme.colors.themeThree};
  `}
`;
