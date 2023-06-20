import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: 18px;
  font-weight: 500;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
