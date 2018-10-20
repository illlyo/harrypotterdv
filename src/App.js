import React, { Component } from 'react';
import './App.css';
import {InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

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

    const hermoine = [
  {
    source: "Hermoine Granger",
    target: "Harry Potter",
    weight: 23
  },
  {
    source: "Hermoine Granger",
    target: "Ron Weasley",
    weight: 14
  },
  {
    source: "Hermoine Granger",
    target: "Percy Weasley",
    weight: 1
  },
  {
    source: "Hermoine Granger",
    target: "Professor McGonagall",
    weight: 2
  },
  {
    source: "Hermoine Granger",
    target: "Rubeus Hagrid",
    weight: 3
  },
  {
    source: "Hermoine Granger",
    target: "Neville",
    weight: 1
  }
]

const ron = [
  {
    "source": "Ron Weasley",
    "target": "Mother Weasley",
    "weight": 1
  },
  {
    "source": "Ron Weasley",
    "target": "Fred Weasley",
    "weight": 2
  },
  {
    "source": "Ron Weasley",
    "target": "George Weasley",
    "weight": 3
  },
  {
    "source": "Ron Weasley",
    "target": "Harry Potter",
    "weight": 49
  },
  {
    "source": "Ron Weasley",
    "target": "Hermoine Granger",
    "weight": 20
  },
  {
    "source": "Ron Weasley",
    "target": "Draco Malfoy",
    "weight": 4
  },
  {
    "source": "Ron Weasley",
    "target": "Sir Nicholas de Mimsy-Porpington (ghost)",
    "weight": 1
  },
  {
    "source": "Ron Weasley",
    "target": "Neville",
    "weight": 4
  },
  {
    "source": "Ron Weasley",
    "target": "Rubeus Hagrid",
    "weight": 6
  },
  {
    "source": "Ron Weasley",
    "target": "Professor McGonagall",
    "weight": 1
  },
  {
    "source": "Ron Weasley",
    "target": "Peeves - a poltergeist",
    "weight": 1
  },
  {
    "source": "Ron Weasley",
    "target": "troll",
    "weight": 1
  },
  {
    "source": "Ron Weasley",
    "target": "Dean Thomas",
    "weight": 1
  }
]
    console.log(harrypotter.map(a => a.source))
    const hpGraphPoints = harrypotter.map(function(a) {
        return([
              <ForceGraphNode node={{ id: a.source, label: a.source }} fill="red" />,
              <ForceGraphNode node={{ id: a.target, label: a.target }} fill="blue" />,
              <ForceGraphLink link={{ source: a.source, target: a.target }} />  
              ])      
            })
    const hgGraphPoints = hermoine.map(function(a) {
        return([
              <ForceGraphNode node={{ id: a.source, label: a.source }} fill="purple" />,
              <ForceGraphNode node={{ id: a.target, label: a.target }} fill="blue" />,
              <ForceGraphLink link={{ source: a.source, target: a.target }} />  
              ])      
            })
    const ronPoints = ron.map(function(a) {
        return([
              <ForceGraphNode node={{ id: a.source, label: a.source }} fill="green" />,
              <ForceGraphNode node={{ id: a.target, label: a.target }} fill="blue" />,
              <ForceGraphLink link={{ source: a.source, target: a.target }} />  
              ])      
            })
    return (
      <div className="App">
        <header className="App-header">
        <h1>Harry Potter Data Visualization</h1>
        <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          {hpGraphPoints}
          {hgGraphPoints}
          {ronPoints}
        </InteractiveForceGraph>
        </header>
      </div>
    );
  }
}

export default App;
