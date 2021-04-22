import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      cats:[]
    };
  }
   componentDidMount(){
     fetch('https://thatcopy.pw/catapi/rest/')
     .then(response=>response.json())
     .then(pics => this.setState({cats:pics}));
     //.then(pics => console.log(pics));
   }
   render(){
    return(
    <div className="App" div className="App">{
     
      //this.state.cats.map(cat => <h1 key={cat.id}>{cat.url}</h1>)
      //<div>{this.state.cats.url}</div>
      <div style={{backgroundColor:"blanchedalmond"}}>
        <div>
          <h1 style={{color:"teal", font:"Fira Sans"}}> Cat Heaven</h1>
        </div>
        <div>
        <img width="500" height="500" src={this.state.cats.url}/>
        </div>
      </div>
    }
    </div>
    );
  }
  }
 

export default App;
