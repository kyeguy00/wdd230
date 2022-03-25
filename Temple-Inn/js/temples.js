const url = 'https://kyeguy00.github.io/wdd230/Temple-Inn/js/temples.json';

fetch(url) 
    .then((response) => response.json())
    .then((jsObject) => 
    console.log(jsObject))
    