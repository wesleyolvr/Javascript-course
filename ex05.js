
function checaIdade() {
    var idade = document.getElementsByName("user")[0].value
    var checa = new Promise(function(resolve,reject){ 
        if (idade > 18){
            resolve(idade);
        } else if(idade < 18){
            reject(idade);
        }

    });
    checa.then(function() {
        console.log("Maior que 18");
        })
        .catch(function() {
        console.log("Menor que 18");
        });
   }
    