import React, {Component} from 'react';
import { Text } from 'react-native';
import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';
import API from './utils/api'
import CategoryList from './src/videos/container/category-list';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const movie = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState({
      suggestionList: movie,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Home>
        <Header><Text>show</Text></Header>
        <CategoryList
          list = {this.state.categoryList}
        />
        <SuggestionList
          list = {this.state.suggestionList}
        />
      </Home>
    );
  }
}
