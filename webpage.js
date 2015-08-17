
var origjson;

$(document).ready(function(){
    var URL = "1vAgy-We0uSG12LNsbU8WfZuYtrrmgTEHsf51_MBxO3o";
    Tabletop.init( { key: URL, callback: convertTolove, simpleSheet: true } )
});
/////calls the spreadsheet
function convertTolove(data) {//creates a function that prints the data
    //console.log(data);
	//console.log(data.length);
    origjson = data;
	var names = [];		
    for(var i = 0; i < 36; i++) {
        //console.log(data[i]);  //logs the data in the console
		var title = data[i]["nameofprogram"];
		var description = data[i]["locationofprogram"];
		var bio = data[i]["bio"];
		var qualifications = data[i]["qualifications"];
		var link = data[i]["linktowebsite"]	;
//sets variables equal to a column of the spreadsheet
			if (data[i]["category"]==="Summer"){//calls all the rows that have summer as its category
				document.write( "<div><br/>Title: " + title +   "<br/><br/>Info: " + description + " " + bio + " " + qualifications + "<br/><br/>Link: " + link + " <br/><br/></div>" );// prints out those rows
			}}}
	
		
