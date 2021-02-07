import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) =>{
    // console.log('in changeType', event)
    this.setState({
      filters: {type: event.target.value}
    })
  }

  onFindPetsClick = ()=>{
    if(this.state.filters.type == 'all'){
      // console.log('in fetch')
      fetch(`/api/pets`).then(resp=> resp.json()).then(pet => {
        // console.log('in fetch', pet)
        this.setState({
          pets: pet
        })
      })
      // console.log('in fetch after set', this.state.pets)
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(resp=> resp.json()).then(pet => {
        this.setState({
          pets: pet
        })
        // console.log('in fetch', this.state.pets)
      })
    }
    
  }
  onAdoptPet = (id) =>{
    console.log('in on Adopt', id)
    let array = this.state.pets
    let pet = array.find(pet=> pet.id == id)
    // console.log(id, pet)
    pet.isAdopted = true
    this.setState({
      pets: [...array, pet]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleChange={this.onChangeType} fetchReq={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser handleAdopt={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
