import React, {Component} from 'react'
import { subtotalSelector, taxSelector, totalSelector } from "../selectors"

class Article extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			isOpen: props.defaultOpen
		}
	}
	
//	state = {
//		isOpen: false
//	}
	
	componentWillMount(){
		console.log('---', 'mounting')
	}

	componentWillReceiveProps(nextProps){
		console.log('---', 'will receive props')		
		if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
		  isOpen: nextProps.defaultOpen 
		})
	}
	
	componentWillUpdate(){
		console.log('---', 'will update')
	}
		
	render() {
  		const {article} = this.props
		const style = {width: '50%'}
  		console.log('---', this.props)
  		const body = this.state.isOpen && <section>{article.text}</section>
  		return (
    		<div className="card mx-auto" style={style}>
				<div className="card-header">
      				<h2>
	  					{article.title}
	  					<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
							{this.state.isOpen ? 'close' : 'open'}
						</button>
	  				</h2>
				</div>
				<div className="card-body">			
      				<h6 className="card-subtitle text-muted">
						creation date: {(new Date(article.date)).toDateString()}
      				</h6>
	  				{body}
				</div>
    		</div>    
  		)		
	}	
	
	handleClick = () => {
		let exampleState = {
  			shop: {
    		taxPercent: 8,
    		items: [{ name: "apple", value: 1.2 }, { name: "orange", value: 0.95 }]
  			}
		};

		console.log(subtotalSelector(exampleState)); // 2.15
		console.log(taxSelector(exampleState)); // 0.172
		console.log(totalSelector(exampleState)); // { total: 2.322 }
		
		console.log('---', 'clicked')	
		this.setState({
			isOpen : !this.state.isOpen
		})
	}
}
	

export default Article