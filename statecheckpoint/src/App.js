import React from 'react'
import './App.css';

import imageSrc from './zizou.jpg'


class App extends React.Component {
   
   state = {person :{
    fullName :"Lakehal Mounir",
    bio:"I'm Lakehal Mounir, a computer engineer graduated from the institute of electricity and electrical engineering which is located in Boumerdes",
    profession:"FullStack Developper",
    img:imageSrc
  },
  show:false,
  counter:0
}
handleClick=()=>this.setState({show :!this.state.show})
incrementCounter = () =>{
  const {counter} = this.state
  this.setState({counter: counter + 1})
}
componentDidMount = () => {
  setInterval(this.incrementCounter, 1000)
}



  render(){
    const styleDiv0={position:"relative",left:"465px"}
    const styleDiv1={display:"flex",position:"relative",left:"10px", padding:"30px"}
    const styleDiv2={padding:"20px"}
    const stylebut = {position:"relative",left:"615px", padding:"10px",margin:"15px"}
    return (
      <>
          <div>
              <h1 style={styleDiv0}>the component has mounted</h1>
              <h2 style={{position:"relative",left:"680px"}}>{this.state.counter}</h2>
          </div>
    
<button style={stylebut} onClick={this.handleClick}>{this.state.show ?'hide the profile' : 'show the profile'}</button>
{this.state.show ? 
    <div style={styleDiv1}>
    <div style={styleDiv2}>
   <img src={this.state.person.img} alt="" width="140" height="180"/>
   
    </div>
   <div style={styleDiv2}>
   <h3>{this.state.person.fullName}</h3>
   <p>{this.state.person.bio}</p>
   <p>{this.state.person.profession}</p>
   </div>
     </div> :
     <div></div> }

    
    
    </>
    )};
}

export default App ;
