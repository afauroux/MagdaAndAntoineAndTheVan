
javascript: (function () {
    let links = "Here are the links kohanie:\n\n";
    imgs = document.querySelectorAll('[data-latest-bg]');
    for (let a of imgs) {
        links+="![](" + a.style.backgroundImage.match(/http.*w/)[0] + "6000-h4000-no)\n"
    };
    console.log(links);
})();



