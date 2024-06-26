import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  wrapperClassName?: string;
  checked?: boolean;
}
