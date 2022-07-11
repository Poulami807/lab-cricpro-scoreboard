var div = document.querySelector(".content");
var img;
function addPopup(id) {
      if (id == "1") {
        img = '<img class="player-img" src="./assets/Player6.png" />';
        injectPopup(img);
      } else if (id == "2") {
        img = '<img class="player-img" src="./assets/Player5.png" />';
        injectPopup(img);
      } else if (id == "3") {
        img = '<img class="player-img" src="./assets/Player4.png" />';
        injectPopup(img);
      } else if (id == "4") {
        img = '<img class="player-img" src="./assets/Player3.png" />';
        injectPopup(img);
      } else if (id == "5") {
        img = '<img class="player-img" src="./assets/Player2.png" />';
        injectPopup(img);
      } else if (id == "6") {
        img = '<img class="player-img" src="./assets/Player1.png" />';
        injectPopup(img);
      } else if (id == "7") {
        img = '<img class="player-img" src="./assets/Player1-1.jpg" />';
        injectPopup(img);
      } else if (id == "8") {
        img = '<img class="player-img" src="./assets/Player1-2.jpg" />';
        injectPopup(img);
      } else if (id == "9") {
        img = '<img class="player-img" src="./assets/Player1-3.jpg" />';
        injectPopup(img);
      } else if (id == "10") {
        img = '<img class="player-img" src="./assets/Player1-4.jpg" />';
        injectPopup(img);
      } else if (id == "11") {
        img = '<img class="player-img" src="./assets/Player1-5.jpg" />';
        injectPopup(img);
      }
}

function remove() {
    div.removeChild(div.children[0]);
    div.removeChild(div.children[0]);
}
function injectPopup(img) {
  var str = `<img
    class="close-icon"
    src="./assets/close.png"
    alt="close"
    width="20px"
    height="20px"
  />
  ${img}`;
  div.insertAdjacentHTML("afterbegin", str);
  var close = document.querySelector(".close-icon");
  close.addEventListener("click", remove);
}
