import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 10px;
`;

export const Input = styled.input`
  border: 1px solid #d6d6d6;
  width: 140px;
  &:focus {
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 8px #7fabe4;
  }
`;
