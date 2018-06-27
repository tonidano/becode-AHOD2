var limiteitem = 5,memotritab=0;
let testval,
memoval, nbART;

let memoArticle;

//var totalPages = Math.round(numberOfArticle / limiteitem);
let y
let btnContainer = document.getElementById("nav-collapse1");
let btns = btnContainer.getElementsByClassName("btn");
filterSelection("all",0);

function filterSelection(c,demareArticle) {
  var i,id;
  
  
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
$(document).ready(function()
  {

		var numberOfArticle = nbART.length;

		var totalPages = Math.round(numberOfArticle / limiteitem);

		$(".pagination").text("");
		$('.pagination').append("<li id='previous-page' ><a class='page-link' href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span><span class='sr-only'>Previous</span></a></li>");
		$('.pagination').append("<li class='current-page active page-item' ><a class='page-link' href='#'>" + 1 + "</a></li>"); // append() signifie qu'on insère du contenu à la fin de la sélection ;
		
		/***faire une boucle pour ajouter des paginations par à port aux nombres de pages besoin***/
		for (var i = 2; i <= totalPages; i++) {
			$('.pagination').append("<li class='current-page page-item'><a class='page-link' href='#'>" + i + "</a></li>");
			
		}
		$('.pagination').append("<li id='next-page'><a class='page-link' href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>")
	
		$('.pagination li.current-page').on('click', function() {
			
			if($(this).hasClass('active')){
				return false;
			} else {
				var currentPage = $(this).index();
				console.log('Tu cliques sur ' + currentPage);
				
				$('.pagination li').removeClass('active');
				$(this).addClass('active');
				memotritab=(5*(currentPage-1));
				// $('#TabArticle .list-item-carte-Article').hide();
				// var grandTotal = limitPerPage * currentPage;
				// for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				// 	$('#TabArticle .list-item-carte-Article:eq(' + i + ')').show();
				// }
				////console.log('Tu cliques sur ' + currentPage);
			}	//affiche();
		});
	
		$('#next-page').on('click', function() {
			var currentPage = $('.pagination li.active').index();
			console.log(totalPages);
			if (currentPage === totalPages) {
				return false;
			} else {
				console.log(currentPage);
				currentPage++;
				memotritab+=5;
				$('.pagination li').removeClass('active');
				//console.log(currentPage);
				// $('#TabArticle .list-item-carte-Article').hide();
				// var grandTotal = limitPerPage * currentPage;
				// for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				// 	$('#TabArticle .list-item-carte-Article:eq(' + i + ')').show();
				// }
				console.log(currentPage);
				$('.pagination li.current-page:eq(' + (currentPage - 1) + ')').addClass('active');
				console.log(currentPage);
			};
		});
		$('#previous-page').on('click', function() {
			var currentPage = $('.pagination li.active').index();
			console.log(currentPage);
			if (currentPage === 1) {
				return false;
			} else {
				console.log(currentPage);
				currentPage--;
				memotritab-=5;
				console.log(currentPage);
				$('.pagination li').removeClass('active');
				// $('#TabArticle .list-item-carte-Article').hide();
				// var grandTotal = limitPerPage * currentPage;
				// for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				// 	$('#TabArticle .list-item-carte-Article:eq(' + i + ')').show();
				// }
				
				$('.pagination li.current-page:eq(' + (currentPage - 1 ) + ')').addClass('active');
				console.log(currentPage);
			}//affiche();
			
		});
			/***Enlever les dièses dans l'url quand tu cliques sur un lien***/
			/*ici je remplace javascript:void[0] (l'apparition du # dans l'url), plus clean 
			(& empèche que quand tu cliques sur le lien cela remonte en haut)*/

		$('.page-link').on('click',function(e) {	//Cette parti ce met à la fin car j'ai créé les boutton dans mon js
				e.preventDefault();
				//console.log('test');
			});

			
	});

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
    //console.log(current);
    current[0].className = current[0].className.replace(" active","");
    this.className += " active";
  });
}
function appel(){
				//console.log(memotritab);
				affiche();
				//console.log(y);
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