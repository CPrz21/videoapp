import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';
import API from './utils/api'
import CategoryList from './src/videos/container/category-list';
import Video from 'react-native-video';

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
        <View style={{
          flex: 1,
          height:100
        }}>
          <Video
            style={{
              position:'absolute',
              left:0,
              right:0,
              bottom:0,
              top:0,
            }}
            source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
          />
        </View>
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
