


window.onload = function(){
	initialize();
}

$(function(){
	$("th").click(function(){
		var picture = this.getElementsByTagName("img")[0].getAttribute("src");
		if(picture == "asced.png"){
				this.getElementsByTagName("img")[0].src = "desced.png";
				sortcol($(this), true);
			}else{
				this.getElementsByTagName("img")[0].src = "asced.png";
				sortcol($(this), false);
			}
		
	});
	changeother();
});

function initialize(){
	$("tr:even").css("background","#C3C3C3");
	var hape = document.getElementsByTagName("th");
	for(var i = 0; i < hape.length; i++){
		var myImage = document.createElement("img");
		myImage.src = "desced.png";
		myImage.style.float = "right";
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
