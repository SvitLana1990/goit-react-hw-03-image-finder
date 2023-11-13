import { Component } from 'react';
import { GlobalStyle } from "GlobalStyle";
import { PictureSearchBar } from "./Searchbar/Searchbar";
import { List } from "./ImageGallery/ImageGallery";
import { LoadMoreButton } from "./Button/Button";
import { ImageLoader } from "./Loader/Loader";
import { Container } from "./App.styled";
import { apiFetchImages } from 'api';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    valueSearch: '',
    page: 1,
    isLoading: false,
    error: false,
  }
  
  handleSubmit = value => {
   if (value.trim() === "") {
    return;
   } else {
     this.setState({
      valueSearch: `${Date.now()}/${value}`,
      page: 1,
      images: [],
    });
  }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: false });

      if (this.state.valueSearch) {
        const initialImages = await apiFetchImages(
          this.state.valueSearch,
          this.state.page,
        );
        this.setState({
          images: initialImages,
        });
      }
    } catch (error) {
  console.error('Error fetching images:', error);
  toast.error('Oops! Something went wrong! Try reloading the page!')
  this.setState({ error: true });
} finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSearch !== this.state.valueSearch || prevState.page !== this.state.page) {
    const valueAfterSlash = this.state.valueSearch.split('/').slice(1).join('/');
      try {
        this.setState({ isLoading: true, error: false });
        const newImages = await apiFetchImages(valueAfterSlash, this.state.page);

        if (newImages.length === 0) {
          toast.error('No more images');
        } else {
          this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
        }
      } catch (error) {
  console.error('Error fetching images:', error);
  toast.error('Oops! Something went wrong! Try reloading the page!')
  this.setState({ error: true });
} finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { images, isLoading} = this.state;
    return (
      <Container>
        <PictureSearchBar onSubmit={this.handleSubmit} />
        {isLoading && <ImageLoader />}
        {images.length > 0 && <List images={images}/>}
        {images.length > 0 && <LoadMoreButton onClick={this.handleLoadMore} />}
        <GlobalStyle />
        <Toaster/>
      </Container>
    )
  };
};
