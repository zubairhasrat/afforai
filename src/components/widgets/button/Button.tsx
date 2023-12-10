import {TButtonProps } from './type';

export const Button = ({ children, classes }: TButtonProps) => {
  return (
    <button className={classes}>{children}</button>
  )
}