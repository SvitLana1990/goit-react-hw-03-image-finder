import { Component } from 'react';
import { GlobalStyle } from "GlobalStyle";
import { PictureSearchBar } from "./Searchbar/Searchbar";
import { GalleryList } from "./ImageGallery/ImageGallery.styled";
import { LoadMoreButton } from "./Button/Button";
import { ImageLoader } from "./Loader/Loader";
import { Container } from "./App.styled";


export class App extends Component {
  state = {
    images: [],
    valueSearch: '',
    page: 1,
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSearch !== this.state.valueSearch || prevState.page !== this.state.page) {
      // ОТРЕЗАТЬ ID ЗАПРОСА ИЗ QUERY
      // делаем http запрос с query и page
      // записываем результат в images
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      valueSearch: `${Date.now()}/${event.target.value}`,
      page: 1,
      images: []
    });
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <PictureSearchBar onSubmit={this.handleSubmit} />
        <ImageLoader />
        <GalleryList />
        <LoadMoreButton onClick={this.handleLoadMore} />
        <GlobalStyle />
      </Container>
    )
  };
};
