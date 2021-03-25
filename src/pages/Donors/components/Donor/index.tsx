import React from 'react';

import * as S from './styles';

type Props = {
  photoURL: string;
  displayName: string;
};

function Donor(props: Props) {
  const { displayName, photoURL } = props;

  return (
    <S.Card>
      <S.UserPhoto src={photoURL} />
      <S.UserName label={displayName} type="textRegular4" />
    </S.Card>
  );
}

export default Donor;
