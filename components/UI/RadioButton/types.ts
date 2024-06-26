import { InputHTMLAttributes } from 'react';

export interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  wrapperClassName?: string;
  checked?: boolean;
}
