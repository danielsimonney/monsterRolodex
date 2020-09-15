import React, {Component} from "react";
import {Cardlist} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      monsters:[],
      searchField:'',
      searchEmail:'',
     }
    //  Si on veut pas utiliser d'arrows fonctions mais de fonctions normals , pour remettre le scope à une fonction on peut faire comme ca , le bind permet de passer le contexte à la fonction
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users=> this.setState({ monsters:users}))
  }

  handleChange=(e)=>{
    this.setState({ searchEmail: e.target.id === 'email' ? e.target.value : ''})
    this.setState({ searchField: e.target.id === 'name' ? e.target.value : ''})
  }

  render() {
    const {monsters,searchField,searchEmail }=this.state
    console.log(searchEmail)
    const filteredMonsters=monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) &&
      monster.email.toLowerCase().includes(searchEmail.toLowerCase())
      )
      filteredMonsters.filter(monster => 
        monster.name.toLowerCase().includes(searchEmail.toLowerCase())
        )
      console.log(filteredMonsters)

  return (
    <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox
      value={this.state.searchField}
      filter="name"
      placeholder="search monsters"
      handleChange={this.handleChange} />
      <SearchBox
      filter="email"
      value={this.state.searchEmail}
      placeholder="search monsters by email"
      handleChange={this.handleChange} />
      <Cardlist monsters={filteredMonsters} />
    </div>
    );
  }
}
 
export default App;
