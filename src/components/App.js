// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { countMinus, countPlus } from '../actions';
// import React, { Component ,useState } from 'react';

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

// class App extends Component {
  // render() {
  //   const huge = "あほんだら"
  //   return (<div>{huge}</div>)
  // }
  // render2() {
  //   return React.createElement("div",null,"hello")
  // }
  // render(){
  //   const tasks = [
  //     {id: 1,title:"one"},
  //     {id: 2,title:"two"},
  //     {id: 3,title:"three"}
  //   ]
  //   const num =tasks.filter((val,index)=>{return val.id >=2 } )
  //   const num2=num.map((val,index) => {return <div>IDは{val.id}TITLEは{val.title}</div>})
  //   return(<div>{num2}</div>)
  // }
  // render(){
  //   let isMorning = true
  //   return (
  //     <div>
  //       {(() => {
  //         if (isMorning) {
  //           return <span>GoodMorning</span>
  //         } else {
  //           return <span>Hello</span>
  //         }
  //       })()}
  //     </div>
  //   )
  // }
  // render(){
  //   let isMorning = true
  //   return(
  //     <div>
  //       {isMorning && <span>GoodMorning</span>}
  //     </div>
  //   )
  // }
  // render(){
  //   let isMorning = false
  //   return (
  //     <div>
  //       {isMorning ? <span>GoodMorning</span> : <span>Hello</span>}
  //     </div>
  //   )
  // }
  // render(){
  //   let isMorning = false
  //   function Greeting(){
  //     if (isMorning) {
  //       return <span>GoodMorning</span>
  //     }else{
  //       return <span>Hello</span>
  //     }
  //   }
  //   return (
  //     <div>
  //       <Greeting/>
  //     </div>
  //   )
  // }

  // renderWithCondition(isMorning) {
  //   if (isMorning) {
  //     return <span>GoodMorning</span>
  //   }else{
  //     return <span>Hello</span>
  //   }
  // }
  // clickMe(){
  //   console.log("ハゲタコ")
  // }

  // render(){
  //   let isMorning = true

  //   return (
  //     <div>
  //       {this.renderWithCondition(isMorning)}
  //       </div>
  //   )
  // }
  // render(){
  //   return (
  //     // <button onClick={() => {console.log("hoi")}}></button>
  //     <button onClick={this.clickMe}>押して</button>
  //   )
  // }
// }

// const App = () => {
//   return <div>
//     <Hoge />
//     <Host />
//     <Num />
//     <button onClick={()=> {console.log("ほい")}}>ほい</button>
//   </div>
// }
// const Hoge = () =>{
//   return <div>こんにちわ</div>
// }
// const Host = () =>{
//   return <div>ようこそ</div>
// }
// let Num = () =>{
//   let a = 5
//   let b = 14
//   return a*14
// }

// const Menbers = [
//   {name:"たかし",age:12},
//   {name:"こじろう",age:25},
//   {name:"ふさえ"},
//   {name:"おにがしま",age:22}
// ]

// const human2 = Menbers.filter((human,index) =>{
//   return human.age > 20
// })
// const App = () => {
//   return(
//     <div>
//       {
//         Menbers.map((human,index) =>{
//           return <Menber name={human.name} age={human.age} />
//         })
//       }
//     </div>
//   )
// }

// const Menber = (props) =>{
//   return <div>I'm{props.name} age 「{props.age}」</div>
// }

// Menber.defaultProps ={
//   age:55
// }

// Menber.propTypes ={
//   name:PropTypes.string,
//   age:PropTypes.number.isRequired
// }

// class App extends React.Component {
//   constructor(props){
//       super(props)
//       this.state = {
//         count:0
//       }
//     }
//     render(){
//       return(
//         <React.Fragment>
//           <p>現在の数字は{this.state.count}です</p>
//           <button onClick={() => this.setState({count: this.state.count +1})}>+1</button>
//           <button onClick={() => this.setState({count: this.state.count -1})}>-1</button>
//           <button onClick={() => this.setState({count:0})}>0</button>
//         </React.Fragment>
//       )
//     }

// }

// const App= ()=>{
//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <p>現在の数字は{count}です</p>
//       <button onClick={() => setCount(prevState =>prevState+1)}>+1</button>
//       <button onClick={() => setCount(count-1)}>-1</button>
//       <button onClick={() => setCount(0)}>0</button>
//     </div>
//   )
// }

class App extends React.Component {
  render(){
    const props =this.props
    return (
      <React.Fragment>
        <p>現在の数字は{props.val}です</p>
        <button onClick={props.countPlus}>+1</button>
        <button onClick={props.countMinus}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({
  val: state.counter.val
})

const mapDispatchToProps = dispatch =>({
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus())
})

export default connect (mapStateToProps,mapDispatchToProps)(App)