import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Timer from './Timer'
import Conditioner from './Conditioner'

class App extends Component {
  state = {
	reverted: false  
  }
	
  render() {
	return(
    	<div className = "container">
	  		<div className = "jumbotron">
      			<h1 className = "display-3">
			<button className="btn" onClick = {this.revert}>Revert</button>
			</h1>	  
      			<Timer />
      			<Conditioner />
      		</div>	  
    	</div>
  	)
  }
  
  revert = () => this.setState({
	reverted: !this.state.reverted  
  })
}

export default App