$(function(){
	$("th").click(function(){
		var picture = this.setAttribute("id", "up");
		if(picture == "up"){
				this.setAttribute("id", "down");
				sortcol($(this), true);
			}else{
				this.setAttribute("id", "up");
				sortcol($(this), false);
			}
		
	});
	changeother();
});



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