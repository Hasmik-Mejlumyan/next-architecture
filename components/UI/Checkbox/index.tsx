'use client';

import React, { forwardRef } from 'react';
import { ICheckboxProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ checked = false, onChange = () => {}, error = '', className = '', wrapperClassName = '', ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`text-heading-6 border-[0.063rem] px-3 py-[0.938rem] text-neutral-900 focus:outline-0 ${className} ${
            !!error ? 'border-error-100' : 'border-neutral-200'
          }`}
          {...props}
          ref={ref}
        />
        {error && <p className="text-heading-7 mt-2 text-error-300">{error}</p>}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;