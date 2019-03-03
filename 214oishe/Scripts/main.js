var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/photo.jpg') {
      myImage.setAttribute ('src','Images/tor.jpg');
    } else {
      myImage.setAttribute ('src','Images/photo.jpg');
    }
}