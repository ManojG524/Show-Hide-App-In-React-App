// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  displayFirstName = () => {
    const {showFirstName} = this.state
    this.setState({showFirstName: !showFirstName})
  }

  displayLastName = () => {
    const {showLastName} = this.state
    this.setState({showLastName: !showLastName})
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div>
        <h1>Show/Hide</h1>
        <div className="container">
          <div className="cardContainer">
            <button onClick={this.displayFirstName} type="button">
              Show/Hide Firstname
            </button>
            {showFirstName ? (
              <div className="nameCard">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="cardContainer">
            <button onClick={this.displayLastName} type="button">
              Show/Hide Lastname
            </button>
            {showLastName ? (
              <div className="nameCard">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
