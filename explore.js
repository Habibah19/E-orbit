let lang={
    ar:{
     subscribe: "لا تنس الاشتراك"
    },
    en:{
     subscribe: "Dont forget to Subscribe"
    }
    
    }
    
    let selector =document.getElementById('language-selector');
    selector .onchange = updatelanguage();
    
    function updatelanguage() {
    let language = selector.option[selector . selectedindex].value;
    let nodes = document .queryselectorAll('[data-lang]');
    
    let i = nodes .length;
    
    while(i--) {
        let Key= nodes[i] .getATTribute('data-lang');
        nodes[i].innerHTML = lang[language][Key]; //lang ar//
    
    }
    }