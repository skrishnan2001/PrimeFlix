import styled, { css } from 'styled-components/native';

import { Box } from 'components/Box';

export const People = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.colors.dark600};
    overflow: hidden;
    flex-grow: 1;
    border-radius: ${theme.radii.md}px;
  `
);
