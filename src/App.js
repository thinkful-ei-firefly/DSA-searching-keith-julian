import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "linear",
      text: "",
      input: 0,
      ops: 0
    };
  }

  onChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  onTextChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  submit = event => {
    event.preventDefault()
    if(this.state.selectedOption === 'linear'){
      for (let i = 0; i < this.state.arr.length; i++){
        console.log(this.state.arr[i])
        if (this.state.arr[i] == this.state.input){
          this.setState({
            text: `Item found in linear search after ${i + 1} attempts`
          })
          return
        }
      }
      this.setState({
        text: "Item not found after 100 attempts"
      })
      return
    }
    if(this.state.selectedOption === 'binary'){
      let search = this.binarySearch(this.state.arr, this.state.input)
      if (search < 0){
        this.setState({
          text: `Item not found after ${search * -1} attempts`
        })
      } else {
        this.setState({
          text: `Item was found after ${search} attempts`
        })
      }
    }
  }

  binarySearch(arr, value, start=0, end = arr.length -1, o = 0){
    if(start > end) return -1 * o;
    let index = Math.floor((start + end) / 2)
    let item = arr[index]
    if(item == value)
      return o
    else if (item < value)
      return this.binarySearch(arr, value, index+1, end, o+1)
    else if (item > value)
      return this.binarySearch(arr, value, start, index-1, o+1)
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.text}</p>
        <form onSubmit={this.submit}>
          <input onChange={this.onTextChange} className="in" type="number" placeholder="search query" />
          <label><input onChange={this.onChange} type="radio" value="linear" checked={this.state.selectedOption === "linear"}/>Linear Search</label>
          <label><input onChange={this.onChange} type="radio" value="binary" checked={this.state.selectedOption === "binary"}/>Binary Search</label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72,
      56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91,
       9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43,
        9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    this.setState({
      arr: array.sort((a,b) => {
        if (a > b) return 1
        else return -1
      })
    })
  }
  
}

export default App;
