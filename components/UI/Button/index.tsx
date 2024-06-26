import { IButtonProps } from './types';

const Button = ({ btnColor = 'primary', variant = 'solid', isLoading = false, className = '', children, ...props }: IButtonProps) => {
  return (
    <button
      className={`button--${btnColor} button--${variant} ${className} text-heading-6 px-4 py-2.5 ${props.disabled || isLoading ? 'button--disabled' : ''}`}
      disabled={props.disabled || isLoading}
      {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
