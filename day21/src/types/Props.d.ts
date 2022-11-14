/* //> Sample 1 */

interface PlacesProps {
  places: Place[]
}

interface ImageSizeControlProps {
  isLarge: boolean
  setIsLarge: React.Dispatch<React.SetStateAction<boolean>>
}


/* //> Sample 2 */

type ImageContextParam = [boolean, Dispatch<SetStateAction<boolean>>]

interface PlaceProps {
  place: Place
}
