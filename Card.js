import React, { Component } from 'react';

const cardStyle = {
  display:'flex',
  flexDirection: 'column',
  border: '2px solid yellow',
  borderRadius: '5px',
  color: 'yellow',
  padding: '5px 10px',
  width: '200px',
  margin: '0px 5px'
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div style={cardStyle}>
        <h2>{this.props.person.name}</h2>
        <span><strong>Height:</strong>{this.props.person.height}</span>
        <span><strong>Mass:</strong>{this.props.person.mass}</span>
        <span><strong>Hair color:</strong>{this.props.person.hair_color}</span>
        <span><strong>Skin color:</strong>{this.props.person.skin_color}</span>
        <span><strong>Eye color:</strong>{this.props.person.eye_color}</span>
        <span><strong>Birth year:</strong>{this.props.person.birth_year}</span>
        <span><strong>Gender: </strong>{this.props.person.gender}</span>
      </div>
    );
  }
}

export default Card;