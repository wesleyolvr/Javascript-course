
function github() {
    var user = document.getElementsByName("user")[0].value
    var checa = new Promise(function(resolve,reject){ 
        var xhr = new XMLHttpRequest();
        xhr.open("GET" , "https://api.github.com/users/"+user+"/repos");
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
    checa.then(function(response) {
        var linkElement = document.createElement('UL');
	    linkElement.setAttribute("id","myUL");
	    document.body.appendChild(linkElement);

	for (var i = 0; i < response.length; i++) {
		var li = document.createElement("LI");
		var nm = document.createTextNode(response[i].name);
		li.appendChild(nm);
		document.getElementById("myUL").appendChild(li);
	}
        console.log(response);
        })
        .catch(function(error) {
        console.warn(error);
        });
   }
    