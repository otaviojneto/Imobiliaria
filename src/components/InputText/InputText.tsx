import React from 'react';
import { Input, Label, Struture } from './styles';

interface InputTextProps {
  labelName: string;
}

const InputText: React.FC<InputTextProps> = ({ labelName }) => {
  return (
    <Struture>
      <Input type="text" placeholder="email" />
      <Label>{labelName}</Label>
    </Struture>
  );
};

export default InputText;
