import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ColorType, ButtonColorVariantType } from '@/types';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  btnColor?: ColorType;
  variant?: ButtonColorVariantType;
  isLoading?: boolean;
  className?: string;
}
