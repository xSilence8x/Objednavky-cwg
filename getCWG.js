const regex = /\+[0-9]{1,2}CWG/;

var table = document.querySelector("#cache_logs_table")
var tbody = table.querySelector("tbody")

var rows = tbody.querySelectorAll("tr")

rows.forEach(function(row) {
    var firstDiv = row.querySelector("td > div:first-child");
    var secondDiv = row.querySelector("td > div:nth-child(2)");
    var log = secondDiv.querySelector("p").textContent;
    var match = regex.exec(log);
    var linkText = firstDiv.querySelector('a').textContent;
    if (match) { 
        console.log(linkText, match[0]);
    }
});