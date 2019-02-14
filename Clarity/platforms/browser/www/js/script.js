 var app = new Framework7 ({
    
    root:'#app',  

})

var mainView = app.view.create('.view-main');

function reloadPage() { 
    location.reload(true);
}
const Http = new XMLHttpRequest();
const url='https://api.adviceslip.com/advice';
Http.open("GET", url);
Http.send(); 

//Http.onreadystatechange=(e)=> { 
//    console.log(JSON.parse(Http.responseText));
//}

