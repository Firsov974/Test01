import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import i18next from 'i18next'

import * as actions from '../ac'

class Conditioner extends Component {
    constructor(props) {
      super(props);
      this.state = {temperature: 0};

      // Привязка необходима, чтобы сделать this доступным в коллбэке
      this.onIncrease = this.onIncrease.bind(this);
      this.onDecrease = this.onDecrease.bind(this);
    }

    componentWillMount() {
      this.setLanguage('en');
    }

    setLanguage(language) {
      i18next.init({
        lng: language,
        resources: require(`json!./${language}.json`)
      });

      this.props.actions.changeLanguage(i18next);
    }
 
     onIncrease(){
      this.setState(prevState => ({
        temperature: prevState.temperature + 1
      }))
    }

    onDecrease(){
      this.setState(prevState => ({
        temperature: prevState.temperature - 1
      }))
    }

    render() {
      return (
        <div>
          <div>
            <button onClick={this.setLanguage.bind(this, 'en')}>English</button>
            <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
          </div>
          <div>
            <h2>’ҐЄги п вҐ¬ЇҐа вга : {this.state.temperature}</h2>
            <button onClick={this.onDecrease}>-</button>
            <button onClick={this.onIncrease}>+</button>
          </div>
        </div>
    )}
  }

function mapStateToProps(state) {
  return {
    globalState: state.globalState
  }
}

function actionsStateToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, actionsStateToProps)(Conditioner);