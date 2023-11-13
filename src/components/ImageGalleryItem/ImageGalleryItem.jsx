import { GalleryImage, Image } from "./ImageGalleryItem.styled"

export const GalleryItem = ({ img,tags }) => {
  return (
    <GalleryImage>
      <Image src={img} alt={tags} />
    </GalleryImage>
    )
}