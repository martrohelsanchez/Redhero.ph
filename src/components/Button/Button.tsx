import React from 'react';

import * as S from './Button.styles';

export type Props = {
  className?: string;
  hidden?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type: 'white1';
  onClick: () => void;
};

export default function Button(props: Props) {
  const { className, isDisabled, label, leftIcon, rightIcon, type, onClick } = props;

  function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
    if (isDisabled) {
      return;
    }

    onClick();
  }

  return (
    <S.Button
      buttonType={type}
      className={className}
      data-testid="Button"
      disabled={isDisabled}
      type="button"
      onClick={handleClick}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </S.Button>
  );
}
