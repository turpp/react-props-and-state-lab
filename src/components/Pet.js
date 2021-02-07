import React from 'react'

class Pet extends React.Component {
  // genderSym = () => {
  //   if this.props.pet.gender == 'male' ? '♀' : '♂'}
  // }

  adoptButton = () => {
    if(this.props.pet.isAdopted == true){
      return <button className="ui disabled button">Already adopted</button>
    } else{
      return <button onClick={()=>this.props.handleAdopt(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender == 'male' ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton()}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
