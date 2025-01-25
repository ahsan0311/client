// import { createContext, useState, useContext, useEffect } from 'react';

// const ImageContext = createContext();

// export const ImageProvider = ({ children }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const savedImageUrl = sessionStorage.getItem('imageUrl');

//     if (savedImageUrl) {
//       setImageUrl(savedImageUrl);
//     }
//   }, []);

//   const updateImageUrl = (url) => {
//     setImageUrl(url);
//     sessionStorage.setItem('imageUrl', url); 
    
//   };

//   return (
//     <ImageContext.Provider value={{ imageUrl, setImageUrl: updateImageUrl }}>
//       {children}
//     </ImageContext.Provider>
//   );
// };

// export const useImage = () => useContext(ImageContext);


