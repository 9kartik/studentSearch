import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/card";
import SearchBar from "./components/header";
import Api from "./helpers/api";
import Trance from "./helpers/transformer";
import {names} from "./constants/urls";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studs: [],
      SearchBar : {
        name: 'asc',
        score : 'asc',
        filterName: ''
      }
    };
  }

  updateStuds( {studs = this.state.studs, SearchBar={}} ){
    this.setState({
      studs,
      SearchBar
    })
    // console.log(SearchBar)
  }
  componentDidMount() {
    Api(names).then(res=>{
      this.updateStuds({studs: Trance(res)})
      // console.log(this.state.studs)
    })
  }
  render() {
    return (
      <div >
          <SearchBar studs={this.state.studs} upState={this.updateStuds.bind(this)}></SearchBar>
            <CardList cards={this.state.studs} orderName={this.state.SearchBar.name} filterName={this.state.SearchBar.nameFilter} orderScore={this.state.SearchBar.score}>
            </CardList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));