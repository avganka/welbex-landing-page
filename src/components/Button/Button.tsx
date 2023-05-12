import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({children, className, ...props}: ButtonProps) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
