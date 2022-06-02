//excercise 1
function increase () {
    let counter = document.getElementById("counter")
    counter.innerHTML++
}
function decrease () {
    let counter = document.getElementById("counter")
    counter.innerHTML--
}

//excercise 2

function showToogle() {
    let content = document.getElementById("content");
    let toogleBtn = document.getElementById("toogleBtn")   
    if (content.style.display === "none") {
        content.style.display = "block";
        toogleBtn.innerHTML = "Hide";
    } else {
        content.style.display = "none";
        toogleBtn.innerHTML = "Show";
    }
}
//exercise 3.1
function areaCircle(valNum) {
    document.getElementById("outputSquareM").innerHTML=
    valNum * valNum * Math.PI
}

//exercise 4.1
function changeColor() {
    let colorPick = document.getElementById ("favColor").value;
    let myText = document.getElementById ("myText")
    //alert (colorPick)
    myText.style.color = colorPick;
}

//exercise 3.2
    function dynamicList() {
    let txt = "";    
    const numbers = [1,2,3,4,5];

    for (let i = 0; i< numbers.length; i++) {
        txt += "<li>" + numbers[i] + "</li>"; 
        document.getElementById("numlist").innerHTML = txt;
        }
    }
    // function hideList(){
    // document.getElementById("numlist").style.display="none";
    // }

//exercise 4.2
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("This element can't be empty!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("newInput").value = "";
  }
//exercise 5
const interval = setInterval (myTime, 1000);
function myTime() {
const date = new Date();
const clock = date.toLocaleTimeString ();
document.getElementById("myClock").innerHTML  = clock;
}