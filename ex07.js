function github() {
    var user = document.getElementsByName("user")[0].value
    var linkElement = document.createElement('UL');
    linkElement.setAttribute("id","myUL");
    document.body.appendChild(linkElement);
    var li = document.createElement("LI");
    var nm = document.createTextNode("Carregando...");
    li.appendChild(nm);
    document.getElementById("myUL").appendChild(li);


    var checa = new Promise(function(resolve,reject){ 
        var xhr = new XMLHttpRequest();
        xhr.open("GET" , "https://api.github.com/users/"+user+"/repos");
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404){
                    reject("Pagina nao existente!");
                }
            }
        }
    });
    
    checa.then(function(response) {
        document.getElementById("myUL").innerHTML = "";
        for (var i = 0; i < response.length; i++) {
            var li = document.createElement("LI");
            var nm = document.createTextNode(response[i].name);
            li.appendChild(nm);
            document.getElementById("myUL").appendChild(li);
        }
        console.log(response);
        })
        .catch(function(error) {
            var para = document.createElement("P");                       
            var t = document.createTextNode(error);       
            para.appendChild(t);                                          
            document.body.appendChild(para); 
        });
   };