import React, { Component } from 'react';
import './App.css';
import Table from './Table';

export default class App extends Component{
  

  state = {
    characters: [
      {
        nome: "Arthur",
        idade: 17,
        profissao: "Programador"
      },
      {
        nome: "João",
        idade: 20,
        profissao: "Médico"
      },
      {
        nome: "Luana",
        idade: 32,
        profissao: "Advogada"
      },
      {
        nome: "Mariana",
        idade: 28,
        profissao: "Nutricionista"
      }
    ]
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }
  
  render(){   
    const { characters } = this.state
    return(     
      <div className="container">
        <Table charactersData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}