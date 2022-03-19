var btn = document.getElementById("btn");
var search = document.getElementById("search");
var searchContainer = document.getElementById("search-container");

function printingOnConsole() {
    var searchVal = search.value;
    if (searchVal === "") {
        console.log("required field you must enter it")
    } else {
        var api_link = `https://api.github.com/users/${searchVal}/repos`;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                showData(this.responseText)
            }
        }

        xhr.open("GET", api_link);
        xhr.send();

    }
}

function showData(data) {
    data = JSON.parse(data);
    var allData = ``;
    for (var i = 0; i < data.length; i++) {
        allData += `<div id="repo">
        <a href = "${data[i].html_url}">${data[i].name}</a>
        <span>${data[i].stargazers_count}</span>
        
        </div>`;
    }
    document.getElementById("results").innerHTML = allData;


}