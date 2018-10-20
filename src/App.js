import React, { Component } from 'react';
import './App.css';
import {InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

const harrypotter = [
  {
    source: "Harry Potter",
    target: "Petunia Dursley",
    weight: 5
  },
  {
    source: "Harry Potter",
    target: "Vernon Dursely",
    weight: 10
  },
  {
    source: "Harry Potter",
    target: "Snake",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Dudley Dursley",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Rubeus Hagrid",
    weight: 29
  },
  {
    source: "Harry Potter",
    target: "Dedalus Diggle",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Professor Quirrell",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Griphook (goblin)",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "pale boy",
    weight: 2
  },
  {
    source: "Harry Potter",
    target: "Mr. Ollivander",
    weight: 3
  },
  {
    source: "Harry Potter",
    target: "Mother Weasley",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "George Weasley",
    weight: 3
  },
  {
    source: "Harry Potter",
    target: "Fred Weasley",
    weight: 3
  },
  {
    source: "Harry Potter",
    target: "Ron Weasley",
    weight: 38
  },
  {
    source: "Harry Potter",
    target: "Neville",
    weight: 6
  },
  {
    source: "Harry Potter",
    target: "Hermoine Granger",
    weight: 18
  },
  {
    source: "Harry Potter",
    target: "Draco Malfoy",
    weight: 5
  },
  {
    source: "Harry Potter",
    target: "Percy Weasley",
    weight: 3
  },
  {
    source: "Harry Potter",
    target: "Sir Nicholas de Mimsy-Porpington (ghost)",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Snape",
    weight: 4
  },
  {
    source: "Harry Potter",
    target: "Peeves - a poltergeist",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Portrait of the Fat Lady on the 7th floor",
    weight: 2
  },
  {
    source: "Harry Potter",
    target: "Professor Flitwick",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Oliver Wood",
    weight: 4
  },
  {
    source: "Harry Potter",
    target: "Seamus Finnigan",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Madam Pince",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Parents",
    weight: 1
  },
  {
    source: "Harry Potter",
    target: "Albus Dumbledore",
    weight: 3
  }
]

class App extends Component {
  
  render() {
    const harrypotter = [
      {
        source: "Harry Potter",
        target: "Petunia Dursley",
        weight: 5
      },
      {
        source: "Harry Potter",
        target: "Vernon Dursely",
        weight: 10
      },
      {
        source: "Harry Potter",
        target: "Snake",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Dudley Dursley",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Rubeus Hagrid",
        weight: 29
      },
      {
        source: "Harry Potter",
        target: "Dedalus Diggle",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Professor Quirrell",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Griphook (goblin)",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "pale boy",
        weight: 2
      },
      {
        source: "Harry Potter",
        target: "Mr. Ollivander",
        weight: 3
      },
      {
        source: "Harry Potter",
        target: "Mother Weasley",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "George Weasley",
        weight: 3
      },
      {
        source: "Harry Potter",
        target: "Fred Weasley",
        weight: 3
      },
      {
        source: "Harry Potter",
        target: "Ron Weasley",
        weight: 38
      },
      {
        source: "Harry Potter",
        target: "Neville",
        weight: 6
      },
      {
        source: "Harry Potter",
        target: "Hermoine Granger",
        weight: 18
      },
      {
        source: "Harry Potter",
        target: "Draco Malfoy",
        weight: 5
      },
      {
        source: "Harry Potter",
        target: "Percy Weasley",
        weight: 3
      },
      {
        source: "Harry Potter",
        target: "Sir Nicholas de Mimsy-Porpington (ghost)",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Snape",
        weight: 4
      },
      {
        source: "Harry Potter",
        target: "Peeves - a poltergeist",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Portrait of the Fat Lady on the 7th floor",
        weight: 2
      },
      {
        source: "Harry Potter",
        target: "Professor Flitwick",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Oliver Wood",
        weight: 4
      },
      {
        source: "Harry Potter",
        target: "Seamus Finnigan",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Madam Pince",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Parents",
        weight: 1
      },
      {
        source: "Harry Potter",
        target: "Albus Dumbledore",
        weight: 3
      }
    ]
    console.log(harrypotter.map(a => a.source))
    return (
      <div className="App">
        <header className="App-header">
        <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
        { harrypotter.map(a => a.source
          <ForceGraphNode node={{ id: {a.source}, label: {a.source} }} fill="red" />
          <ForceGraphNode node={{ id: {a.target}, label: {a.target} }} fill="blue" />
          <ForceGraphLink link={{ source: {a.source}, target: {a.target} }} />
        )}
        </InteractiveForceGraph>
        </header>
      </div>
    );
  }
}

export default App;
