

import React, { useState, useEffect } from "react";

const ImageLoading = () => {
  const [isImageLoading, setImageLoading] = useState(true);
  const [movieItem, setMovieItem] = useState();

  const ImageLoad = (item) => {
    setMovieItem(item);
  };

  useEffect(() => {
    if (movieItem != null) {
      let image = movieItem;
      let bigImage = document.createElement("img");
      bigImage.src = image;
      bigImage.onload = function () {
        setImageLoading(false);
      };
    }

    return () => {
      setImageLoading(true);
    };
  }, [movieItem]);

  return { ImageLoad, isImageLoading };
};

export default ImageLoading;
