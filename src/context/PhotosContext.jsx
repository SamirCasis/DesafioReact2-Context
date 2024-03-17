import React, { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [liked, setLiked] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch("./photos.json");
      if (!response.ok) {
        throw new Error("No se encuentra la información");
      }
      const { photos: photosData } = await response.json();
      setPhotos(photosData.map((photo) => ({ ...photo, liked: false })));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos, liked, setLiked }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosProvider;