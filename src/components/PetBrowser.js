import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  makeCards=(pets)=>{
    // console.log(pets)
    let petCards = pets.map(pet=>{
      // console.log('hi')
     return <Pet pet={pet} handleAdopt={this.props.handleAdopt}/>
    })
    return petCards
  
  }
  render() {
    return(
    <div className="ui cards">
      {this.makeCards(this.props.pets)}


    </div>
    )
  }
}

export default PetBrowser
