import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alphabets: [
        { letter: "Start Typing", positions: [100,200,300,400], color:"white", size: "4em"}
      ]
    }
    this.genAlphabet = this.genAlphabet.bind(this)
  }

  // genPositions() {
  //   let positions = []
  //   for (let i = 0; i < 3; i++) {
  //     positions.push((Math.floor(Math.random() * 99) + 0) + "%")
  //   }
  //   return positions
  // }
  genAlphabet(event) {
    console.log(event.key)
    let alphabets = this.state.alphabets.slice()
    let newAlphabet = {
      letter: event.key,
      positions: (() => {
        let positions = []
        for (let i = 0; i < 4; i++) {
          positions.push((Math.floor(Math.random() * 99) + 0) + "%")
        }
        return positions
      })(),
      color: (() =>{
        return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
      })(),
      size: (() =>{
        let sizes = ["2em","2.5em","3em","3.5em","4em"]
        return sizes[Math.floor(Math.random() * sizes.length)]
      })()
    }

    alphabets.push(newAlphabet)
    this.setState({
      alphabets : alphabets
    })

  }

  render() {
    let alphabets = this.state.alphabets.slice()

    const genStyle = (alphabet) => {
      let style = {
        position: 'fixed',
        top: alphabet.positions[0],
        bottom: alphabet.positions[1],
        left: alphabet.positions[2],
        right: alphabet.positions[3],
        color: alphabet.color,
        fontSize: alphabet.size
      }
      return style
    }

    alphabets = alphabets.map(alphabet => {
      return <h1 key={alphabet.positions}style={genStyle(alphabet)}>{alphabet.letter}</h1>
    })
    return (
      <div>
        <input onBlur={(e) => e.target.focus()} autoFocus className={"transparent"} id="one" onKeyPress={this.genAlphabet}/>
        {alphabets}
      </div>
    )
  }
}

export default App;
