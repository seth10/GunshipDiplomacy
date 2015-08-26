//var map = [[]];

var n = 50;
var m = 50;

var map = [];
for(var i = 0; i < n; i++)
    map[i] = [];

for(var i = 0; i < n; i++)
    for(var j = 0; j < m; j++)
        map[i][j] = Math.floor(Math.random()*4);

//console.log(map);

document.write("<table>");
for(var i = 0; i < n; i++){
    document.write("<tr>");
    for(var j = 0; j < m; j++)
        document.write("<td>"+map[i][j]+"</td>");
    document.write("</tr>");
}
document.write("</table>");