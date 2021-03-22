import React from 'react';

import * as S from './Text.styles';

type Props = {
  className?: string;
  label: string;
  type?:
    | 'roundHeavy1'
    | 'roundSemibold2'
    | 'roundHeavy3'
    | 'textRegular1'
    | 'textSemibold2'
    | 'textRegular3';
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
};

export default function Text(props: Props) {
  const { className, color, label, type, onClick } = props;

  return (
    <S.Text className={className} data-testid="Text" type={type} color={color} onClick={onClick}>
      {label}
    </S.Text>
  );
}
