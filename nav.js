function nav(){
  fetch('./js/menu.json').then(response => {
    return response.json();
  }).then(data => {
    var b = data;
    for (i=0; i < b.length;) {
      document.getElementById("nav" + i).innerHTML = b[i];
      i++;
    }
  });
}
