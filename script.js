var docReload = document.querySelectorAll("[data-reload]");
var language = {
    eng:{
        test: "Hello Everyone" 
    },
    de:{
        test: "Hallo zusammen"
    },
    fra:{
        test: "Bonjour à tous"
    },
    es:{
        test: "Hola a todas"
    },
    ua:{
        test: "Привіт усім"
    }
}
if (window.location.hash){
    if (window.location.hash === "#de"){
        test.textContent = language.de.test;
    }
    if (window.location.hash === "#fra"){
        test.textContent = language.fra.test;
    }
    if (window.location.hash === "#es"){
        test.textContent = language.es.test;
    }
    if (window.location.hash === "#ua"){
        test.textContent = language.ua.test;
    }
}
for (i = 0; i <= docReload.length; i++) {
    docReload[i].onсlick = function() {
        location.reload(true);
    };
}
