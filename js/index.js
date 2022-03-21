function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    // script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript('./js/flow.js');
loadScript('./js/insect.js');
loadScript('./js/quotes.js');
loadScript('./js/todos.js');