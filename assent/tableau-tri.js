var limiteitem = 5;
var testval,
memoval;
filterSelection("all",0)
var memoArticle;

function filterSelection(c,demareArticle) {
  var i;
  memoArticle = document.getElementsByClassName("list-item-carte-Article");
  if (c == "all") c = "";
  console.log(memoArticle.length);
  memoval=0;
  for (i = demareArticle; i < memoArticle.length; i++) {
    w3RemoveClass(memoArticle[i], "show");
    console.log(testval);
    testval =memoArticle[i].className.indexOf(c);
    if ((testval > -1)&&(memoval < limiteitem)) {
      w3AddClass(memoArticle[i], "show");
      memoval++;}
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) 
    {element.className += " " + arr2[i];}
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("btn active");
    console.log(current);
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

var y

$('#showfilmP').on('click', function() {
  // $('#showfilmP').css("display","none");
  // $('#showfilmM').css("display","block");
  // $('#showfilmM').css("text-align","center");
  // limiteitem=18;
  // y = document.getElementsByClassName("btn active");
  // console.log(y[0].id);
  // switch(y[0].id){
  //   case "all": 
  //     filterSelection("all");
  //     break;
  //   case "action": 
  //     filterSelection("action");
  //     break;
  //     case "aventure": 
  //     filterSelection("aventure");
  //     break;
  //     case "amour": 
  //     filterSelection("amour");
  //     break;
  //   case "comedie": 
  //     filterSelection("comedie");
  //     break;
  //   case "drame": 
  //     filterSelection("drame");
  //     break;
  //     case "fantasy": 
  //     filterSelection("fantasy");
  //     break;
  //     case "guerre": 
  //     filterSelection("guerre");
  //     break;
  //     case "sci-fi": 
  //     filterSelection("sci-fi");
  //     break;
  //     case "thriller": 
  //     filterSelection("thriller");
  //     break;
  //     case "western": 
  //     filterSelection("western");
  //     break;

  // }
});
$('#showfilmM').on('click', function() {

      // $('#showfilmM').css("display","none");
      // $('#showfilmP').css("display","block");

      // $('#showfilmP').css("text-align","center");
      // limiteitem=12;
      // y = document.getElementsByClassName("btn active");
      // console.log(y[0].id);
      // switch(y[0].id){
      //   case "all": 
      //     filterSelection("all");
      //     break;
      //   case "action": 
      //     filterSelection("action");
      //     break;
      //   case "aventure": 
      //     filterSelection("aventure");
      //     break;
      //   case "amour": 
      //     filterSelection("amour");
      //     break;
      //   case "comedie": 
      //     filterSelection("comedie");
      //     break;
      //   case "drame": 
      //     filterSelection("drame");
      //     break;
      //   case "fantasy": 
      //     filterSelection("fantasy");
      //     break;
      //   case "guerre": 
      //     filterSelection("guerre");
      //     break;
      //   case "sci-fi": 
      //     filterSelection("sci-fi");
      //     break;
      //   case "thriller": 
      //     filterSelection("thriller");
      //     break;
      //   case "western": 
      //     filterSelection("western");
      //     break;
      // }
});