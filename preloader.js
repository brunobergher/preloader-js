/*
 * preloader.js 0.1 (2014-02-12)
 * © 2014 Bruno Bergher
 * Free to use under terms of MIT license
 */

var Preloader = {
  list: [],
  add: function(image) {
    this._init();

    if(image instanceof Array) {
      for(var i=0; i< image.length; i++) {
        this.add(image[i]);
      }
    } else {
      var img = new Image();
      img.src = image;
      this.list.push(img);
    }
  }
}