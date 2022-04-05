import React, { InputHTMLAttributes } from 'react';
import { Input, Label, Struture } from './styles';

interface InputTextProps {
  labelName: string;
  type?: string;
  value: any;
  onChange?: () => void;
}

const InputText: React.FC<InputTextProps> = ({
  labelName,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <Struture>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={labelName}
      />
      <Label>{labelName}</Label>
    </Struture>
  );
};

export default InputText;
