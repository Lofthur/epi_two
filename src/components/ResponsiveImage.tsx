import React from 'react';

type ResponsiveImageProps = {
  image: string;
  altText: string;
  imgCaption: string;
};

export const ResponsiveImage = ({
  image,
  altText,
  imgCaption,
}: ResponsiveImageProps) => {
  return (
    <figure className="image-container">
      <img src={image} alt={altText} className="box-shadow" />
      <figcaption>{imgCaption}</figcaption>
    </figure>
  );
};
