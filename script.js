var arr = document.querySelectorAll("a")
var div=document.querySelector(".content")
var popup = document.getElementById("popup")
var img
arr.forEach(function(ele){
    // console.log(ele.textContent)
    ele.addEventListener("click", function(){
        if (ele.textContent == "Virender Sehwag"){
            img='<img class="player-img" src="./assets/Player6.png" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Sachin Tendulkar"){
            img='<img class="player-img" src="./assets/Player5.png" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Gautam Gambhir"){
            img='<img class="player-img" src="./assets/Player4.png" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Virat Kohli"){s
            img='<img class="player-img" src="./assets/Player3.png" />'
            injectPopup(img)
            var close = document.querySelector(".close-icon")
        }
        else if (ele.textContent == "MS Dhoni(c &#38; wk)"){
            img='<img class="player-img" src="./assets/Player2.png" />'
        }
        else if (ele.textContent == "Yuvraj Singh"){
            img='<img class="player-img" src="./assets/Player1.png" />'
        }
        else if (ele.textContent == "Suresh Raina"){
            img='<img class="player-img" src="./assets/Player1-1.jpg" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Harbhajan Singh"){
            img='<img class="player-img" src="./assets/Player1-2.jpg" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Zaheer Khan"){
            img='<img class="player-img" src="./assets/Player1-3.jpg" />'
            injectPopup(img)
        }
        else if (ele.textContent == "Munaf Patel"){
            img='<img class="player-img" src="./assets/Player1-4.jpg" />'
            injectPopup(img)
        }
        else if (ele.textContent == "S Sreesanth"){
            img='<img class="player-img" src="./assets/Player1-5.jpg" />'
            injectPopup(img)
        }
    })
    // close()
    
})

function remove(){
    popup.parentElement.removeChild(popup)
}
function injectPopup(img){
    var str=`<img
    class="close-icon"
    src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961937.png?token=exp=1657558599~hmac=6dd51a1626fa1357bf0492cac2d0e216"
    alt="close"
    width="20px"
    height="20px"
  />${img}`
  div.insertAdjacentHTML('afterbegin',str)
  var close = document.querySelector(".close-icon")
  close.addEventListener("click", remove)
}