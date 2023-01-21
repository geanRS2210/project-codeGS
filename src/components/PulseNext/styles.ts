import styled, { css, StyledComponent } from 'styled-components';
import { Theme } from '../../../styles/theme';

export const Container: StyledComponent<'div', any, object, never> = styled.div`
  ${({ theme }: Theme) => css`
    [data-pulse] {
      animation: 1s cubic-bezier(0, 0, 0, 0) infinite alternate-reverse forwards
        pulse;
    }
    @keyframes pulse {
      from {
        transform: translateY(10%);
        // transform: translate3d(0, 100%, 0);
      }
      50% {
        transform: translateY(0);
        // transform: translate3d(0, 0, 0);
      }
      to {
        transform: translateY(-10%);
        // transform: translate3d(0, -100%, 0);
      }
    }
  `}
`;
