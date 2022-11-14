import { useContext } from "react";
import { places } from "../../../db/places";
import { getImageUrl } from "./utils";
import { ImageContextProvider, ImageContext } from "./ImageContextProvider";
import styles from '../sample.module.scss'


const { body } = styles

function CtxUst2() {
  return (
    <ImageContextProvider>
      <InnerApp />
    </ImageContextProvider>
  );
}

export function InnerApp() {
  const [isLarge, setIsLarge] = useContext<ImageContextParam>(ImageContext);
  return (
    <div className={body}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </div>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: PlaceProps) {
  const [isLarge] = useContext<ImageContextParam>(ImageContext);
  const imageSize = isLarge ? 150 : 100;
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}


export { CtxUst2 }
