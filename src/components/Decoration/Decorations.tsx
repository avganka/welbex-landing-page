import styles from './Decorations.module.css';
import cn from 'classnames';

export default function Decorations() {
  return (
    <>
      <div className={cn(styles.decoration, styles.purple)}></div>
      <div className={cn(styles.decoration, styles.red)}></div>
      <div className={cn(styles.decoration, styles.brown)}></div>
      <div className={cn(styles.decoration, styles.redLight)}></div>
      <div className={cn(styles.decoration, styles.purpleLight)}></div>
    </>
  );
}
