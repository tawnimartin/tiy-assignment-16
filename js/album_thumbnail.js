var AlbumThumbnail = (function() {

  var template = JST["album_thumbnail"]

  function AlbumThumbnail(data) {
    this.data = data;
  }

  AlbumThumbnail.prototype = {
    render: function() {
      return $( template(this.data) );

    }
  }

  return AlbumThumbnail;

})();