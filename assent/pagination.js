var limiteitem = 5,memotritab=0;
let testval,
memoval, nbART,memoNext;

let memoArticle;

//var totalPages = Math.round(numberOfArticle / limiteitem);
let y
let btnContainer ;
let btns;

btnContainer = document.getElementById("contenaiBPN");
btns = btnContainer.getElementsByClassName("btn");


filterSelection("all",0);

function filterSelection(c,demareArticle) {
  var i,id,posiPages;
  
  
  memoArticle = document.getElementsByClassName("list-item-carte-Article");

  if (c == "all") {c = "";nbART=document.getElementsByClassName("list-item-carte-Article");}else{
  nbART=document.getElementsByClassName(c);}
  memoval=0;
  for (i = 0; i < memoArticle.length; i++) {
    w3RemoveClass(memoArticle[i], "show");	
  }
  for (i = memotritab; i < memoArticle.length; i++) {	
		testval =memoArticle[i].className.indexOf(c);
	
		//totalPages = Math.round(numberOfArticle / limiteitem);
    if ((testval > -1)&&(memoval < limiteitem)) {
      w3AddClass(memoArticle[i], "show");
      memoval++;}
	}
	posiPages=(memotritab/5)+1;

		$(document).ready(function()
			{
				var numberOfArticle = nbART.length;

				var totalPages = Math.round(numberOfArticle / limiteitem);
				memoNext=totalPages+1;
				$(".pagination").text("");
				$('.pagination').append("<li id='previous-page' onclick='appel(0)'><a class='page-link' href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span><span class='sr-only'>Previous</span></a></li>");
				$('.pagination').append("<li class='current-page page-item' onclick='appel(1)'><a class='page-link' href='#'>" + 1 + "</a></li>"); // append() signifie qu'on insère du contenu à la fin de la sélection ;
				
				/***faire une boucle pour ajouter des paginations par à port aux nombres de pages besoin***/
				for (var i = 2; i <= totalPages; i++) {
					$('.pagination').append("<li class='current-page page-item' onclick='appel("+i+")'><a class='page-link' href='#'>" + i + "</a></li>");
					
				}
				$('.pagination').append("<li id='next-page' onclick='appel("+memoNext+")'><a class='page-link' href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>")
				$('.page-link').on('click',function(e) {	//Cette parti ce met à la fin car j'ai créé les boutton dans mon js
						e.preventDefault();
						//console.log('test');
					});

					
			});
			document.getElementById('posiActu').innerHTML ="Vous est à la page N°"+posiPages;
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

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("btn active");
    console.log([0].className);
    current[0].className = current[O].className.replace(" active","");
    this.className += " active";
  });
}
function appel(posi){
// 	modiPO(posi);
// 	affiche();
// }
// 	function modiPO(val){
			var position = posi
				//console.log(memotritab);
				$('.pagination li.active').removeClass('active');
				var currentPage = posi;
				console.log(currentPage);
					if((currentPage<(memoNext))&&(currentPage>0)){
									memotritab=(5*(currentPage-1));}
					else{
						if(((memotritab-5)>=0)&&(currentPage==0))
								{memotritab-=5;
									position-=1;}
						else{position=1;}
						
						if(((memotritab+6)<(nbART.length))&&(currentPage==memoNext))
								{memotritab+=5;
									position+=1;}
						else{position=memoNext-1;}
					}

 			$('.pagination li.current-page:eq(' + (position - 1 ) + ')').addClass('active');
				console.log(memotritab);
				affiche();
      
	  
		}
function affiche(){
  y = document.getElementsByClassName("btn active");
      //console.log(y[0].id);
      switch(y[0].id){
        case "all": 
          filterSelection("all",memotritab);
          break;
        case "action": 
          filterSelection("action",memotritab);
          break;
        case "art-pre": 
          filterSelection("art-pre",memotritab);
          break;
        case "forma": 
          filterSelection("forma",memotritab);
          break;
        case "com-pre": 
          filterSelection("com-pre",memotritab);
          break;
        case "phare": 
          filterSelection("phare",memotritab);
          break;
        case "syn-loc": 
          filterSelection("syn-loc",memotritab);
          break;
        case "service": 
          filterSelection("service",memotritab);
          break;
        case "info": 
          filterSelection("info",memotritab);
          break;
        case "video": 
          filterSelection("video",memotritab);
          break;
        // case "": 
        //   filterSelection("",memotritab);
        //   break;
	  }
	  

}