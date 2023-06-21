import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormContact = styled(Form)`
    width: 350px;
    border: 1px solid black;
    padding: 10px;
}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 5px;
  margin-bottom: 20px;
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

export const Button = styled.button`
  background: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  transition: background 250ms linear, color 250ms linear;
  &:hover,
  &:active {
    background: #508ef0;
    color: white;
  }
`;

export const Div = styled.div`
  font-size: 14px;
  color: red;
`;
