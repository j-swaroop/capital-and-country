import "./index.css"
import {Component} from "react"


const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component{
  state = {
    activeCapitalId: countryAndCapitalsList[0].id
  }


  onChangeCapital = (event) => {
    const {activeCapitalId} = this.state
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const countryName = countryAndCapitalsList.find(eachCoutry => eachCoutry.id === activeCapitalId)
    return countryName.country
  }


  render(){
    const {activeCapitalId} = this.state
    const countryName = this.getCountry(activeCapitalId)
    
    return(
      <div className="bg-container">
        <div className="capitials-container">
          <h1 className="title"> Countries and Capitals</h1>
          <div className="label-container">
            <select onChange={this.onChangeCapital} value={activeCapitalId} className="select-container" >
              {countryAndCapitalsList.map(eachCountry => <option key={eachCountry.id} value={eachCountry.id}> {eachCountry.capitalDisplayText}</option>)}
            </select>
            <p className="label-text" > is capital of which country? </p>
          </div>
          <p className="capital-text"> {countryName} </p>
        </div>
      </div>
    )
  }
}



export default Capitals










