import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumDetail extends Component {
  render() {
    if(!this.props.album) {
      return <div>Select an album to get started.</div>
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>Album : {this.props.album.name}</div>
        <div>Items : {this.props.album.items}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    album: state.activeAlbum
  }
}

export default connect(mapStateToProps)(AlbumDetail);
