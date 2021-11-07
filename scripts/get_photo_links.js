
javascript: (function () {
    let links = "";
    imgs = document.querySelectorAll('[data-latest-bg]');
    for (let a of imgs) {
        links+="![](" + a.style.backgroundImage.match(/http.*w/)[0] + "6000-h4000-no)\n"
    };
    console.log(links);

    navigator.clipboard.writeText(links).then(function() {
        /* clipboard successfully set */
        alert("Links copied to clipboard successfully !");
    }, function() {
        /* clipboard write failed */
        alert("Something weird occured !");
    });
})();
