import React from 'react';
import './styles.css';
import Nav from '../../components/Nav/Nav';
import { getData } from '../../utils/jsonFetch';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

var MainContainer = React.createClass({
  getInitialState () {
    return {
      data: ""
    }
  },
  handleClick () {
    this.props.handleCounter();
  },
  componentDidMount () {
    // bind used to 'bind' context of the 'this' variable to the outside of the current function call
    getData()
      .then(function (response) {
        this.setState({
          data: response.data
        })
      }.bind(this))
  },
  render: function() {
    console.log('JSON data', this.state.data);
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <Nav/>
        <main className="container">
          {this.props.children}
        </main>
        <button onClick={onIncreaseClick}>Add counter (redux)</button>
      </div>
    );
  }
});

const increaseAction = { type: 'increase' }

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  // console.log('map dispatch to props', dispatch);
  // return {
  //   handleSaveData: () => dispatch(saveData)
  // }
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
  // return bindActionCreators(saveData, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
