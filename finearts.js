
var origjson;

$(document).ready(function(){
    var URL = "1vAgy-We0uSG12LNsbU8WfZuYtrrmgTEHsf51_MBxO3o";
    Tabletop.init( { key: URL, callback: convertTolove, simpleSheet: true } )
});
/////calls the spreadsheet
function convertTolove(data) {//creates a function that prints the data

    origjson = data;
	var names = [];		
    for(var i = 0; i < 36; i++) {

		var title = data[i]["nameofprogram"];
		var description = data[i]["locationofprogram"];
		var bio = data[i]["bio"];
		var qualifications = data[i]["qualifications"];
		var link = data[i]["linktowebsite"]	;
//sets variables equal to a column of the spreadsheet
			if (data[i]["category"]==="Fine Arts"){//calls all the rows that have summer as its category
				document.write( "<div><br/><h2>Title: <h2> <h3>"+ title +   "<h3><br/><h2>Info: <h2><h3>" + description + "<h3><br/><h2>About: <h2><h3>" + bio + "<h3><br/><h2>Qualifications: <h2><h3>" + qualifications + "<br/>Link: " + link + " </div>" );// prints out those rows
			}}}
	
		
