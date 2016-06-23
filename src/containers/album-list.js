import React, { Component } from 'react';
import { connect }from 'react-redux';
import { selectAlbum } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class AlbumList extends Component {
  renderList() {
    return this.props.albums.map((album) => {
      return (
        <li
          key={album.name}
          onClick={() => this.props.selectAlbum(album)}
          className="list-group-item">
          {album.name}
        </li>
      );
    });
  }

  render() {
      return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of AlbumList
  return {
    albums: state.albums
  };
}


// Anthing returned from this function will end up as props on the AlbumList container
function mapDispatchToProps(dispatch) {
  // Whenever selectAlbum is called, the result should be passed
  // to all of the reducers
  return bindActionCreators({ selectAlbum: selectAlbum }, dispatch)
}



// Promote AlbumList from a component to a container - it needs to know
// about this new dispatch method, selectAlbum. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
