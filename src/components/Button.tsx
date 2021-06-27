import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
  & {
    isOutlined?: boolean
  };
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}
    /* o repasse de props é uma operação de spread
e que está recebendo a tipagem de html button element
(ou seja recebe os atributos de um botão em html)
*/




