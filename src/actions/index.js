export function selectAlbum (album) {
  // selectAlbum is an ActionCreator, it needs to return an action,
  // an abject with a type property
  return {
    // An Action always contains a TYPE, and sometimes contains a PAYLOAD.
    // TYPE is always in UPPERCASE.
    type: 'ALBUM_SELECTED',
    payload: album
  }

}
