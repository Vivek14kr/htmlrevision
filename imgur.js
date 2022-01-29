let p = true
let k = document.getElementById("tagchange");

let j = document.getElementById("boxtag2nd")
k.addEventListener("click", yo)
console.log(j)
let count = 1;
function yo(){

    if (p == true){
j.style.display = "contents";
k.textContent = "LESS TAGS x"
p = false;
    } else {
        j.style.display = "none"
        k.textContent = "MORE TAGS +";
        p = true;
    }
    
}

let content = document.getElementById("content")

function onload(){
  console.log("working")

fetch(
  `https://api.unsplash.com/photos?page=${count}&per_page=20&client_id=t0NfiJg33o2mTdlP79LZ7l7jH-tc5JBITiR6TZ0PP_s`
)
  .then((response) => response.json())
  .then((data) => {
    showData(data);
    console.log(data);
  });


}


function showData(data) {

  data.forEach((item) => {
    let div = document.createElement("div");
 div.className = "boxno"
    let image = document.createElement("img");
    
 
    let title = document.createElement("p");

    image.src = item.urls.small;
    image.style.height = "350px"
    
        image.style.width= "250px";
    
    // title.textContent = item.title;
    div.append(image, title);
    content.append(div);
  });
}

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", nextpage)
btn1.addEventListener("click", prevpage);

function nextpage(){
  count++;
  content.innerHTML = "";
  onload()
  topFunction()
}
function prevpage(){
  if (count ==1){
    btn1.style.color = "brown"
  }
  
  else {
    count--;
      content.innerHTML = "";
    onload()
    topFunction();
  }
}
function topFunction() {

 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("workkkking")
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("bar").style.display= "none";
    document.getElementById("expr").style.display = "block";
  } else if (document.documentElement.scrollTop == 0)  {
         document.getElementById("expr").style.display = "none";
     document.getElementById("bar").style.display= "block";
  }
  
}
