import { createContext, PropsWithChildren, useState } from "react";

/* Argument of type 'null' is not assignable to parameter of type 'ImageContextParam'. ts(2345)
@ts-ignore */
const ImageContext = createContext<ImageContextParam>(null);

/* useState was passed as a value in ImageContext.Provider */
function ImageContextProvider({ children }: PropsWithChildren) {
  return (
    <ImageContext.Provider value={useState(false)}>
      {children}
    </ImageContext.Provider>
  );
}


export { ImageContext, ImageContextProvider }
