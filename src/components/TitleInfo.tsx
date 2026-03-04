import React from 'react';

type TitleInfoProps = {
  title: string;
  info: string;
};

export const TitleInfo = ({ title, info }: TitleInfoProps) => {
  return (
    <div className="title-info">
      <h5>{title}</h5>
      <p>{info}</p>
    </div>
  );
};
