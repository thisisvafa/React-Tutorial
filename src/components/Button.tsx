import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'danger';
    onClick: () => void;
}

const Button = ({children, color = 'primary', onClick}: Props) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>{children}</div>
  )
}

export default Button