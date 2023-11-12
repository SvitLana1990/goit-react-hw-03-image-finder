import { GlobalStyle } from "GlobalStyle";
import { PictureSearchBar } from "./Searchbar/Searchbar";
import { GalleryList } from "./ImageGallery/ImageGallery.styled";
import { LoadMoreButton } from "./Button/Button";
import { ImageLoader } from "./Loader/Loader";
import { Container } from "./App.styled";


export const App = () => {
  return (
    <Container>
      <PictureSearchBar />
      <ImageLoader/>
      <GalleryList />
      <LoadMoreButton/>
    <GlobalStyle />
  </Container>
  );
};
