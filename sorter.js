


window.onload = function(){
	initialize();
}

$(document).ready(function(){
	$("th").click(function(){
		var picture = this.getElementsByTagName("p")[0].innerHTML;
		if(picture == "d"){
				this.getElementsByTagName("p")[0].innerHTML = "u";
				sortcol($(this), true);
			}else{
				this.getElementsByTagName("p")[0].innerHTML = "d";
				sortcol($(this), false);
			}
		
	});
	changeother();
});

function initialize(){
	$("tr:even").css("background","#C3C3C3");
	var hape = document.getElementsByTagName("th");
	for(var i = 0; i < hape.length; i++){
		var myImage = document.createElement("p");
		myImage.innerHTML = "d";
		myImage.style.float = "right";
		myImage.style.opacity = "0";
		hape[i].appendChild(myImage);
	}
}

function changeother(){
	$("th").click(function(){
		$(this).parent().parent().find("th").css("background","#011868");
		$(this).css("background","#A4B0FC");
	});
}

function sortcol(hape,way){
	var tablebody = hape.parent().parent().parent().find("tbody")
	var rows = tablebody.find("tr").get();
	rows.sort(function(a,b){
		return a.cells[hape.index()].textContent.localeCompare(b.cells[hape.index()].textContent);
	})
	if(way == true)	rows.reverse();
	tablebody.append(rows);
	$("tr:odd").css("background","white");
	$("tr:even").css("background","#C3C3C3");
}
