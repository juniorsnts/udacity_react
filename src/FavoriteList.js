import React, { Component } from 'react';
class FavoriteList extends Component {
  render(){
    console.log(this.props.profiles);
    console.log(this.props.users);
    console.log(this.props.movies);
    return (
      <ol className="favorite-list">
      {this.props.profiles.map((profile)=>(
          <li className="favorite-list-item" key={profile.id}>{this.props.users[profile.userID].name} favorite movies is {this.props.movies[profile.favoriteMovieID].name}</li>
        ))}
      </ol>
    )
  }  
}
export default FavoriteList;