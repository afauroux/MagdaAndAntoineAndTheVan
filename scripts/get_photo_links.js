javascript: (function() {

  /* retrieve the links */
  let links = "";
  imgs = document.querySelectorAll('[data-latest-bg]');
  let i = 1;
  for (let a of imgs) {
    let link = a.style.backgroundImage.match(/http.*w/)[0]
    if (link.includes("url")) {
      link = link.replace(/.*url\(\"/, "")
    }
    links += "[blog-" + i + "]: " + link + "1500-h1000-no\n"
    i++;
  };
  console.log(links);

  /* Create the copylink closure */
  function copylinks() {
    navigator.clipboard.writeText(links).then(function() {
      alert("Links copied to clipboard successfully !");
    }, function() {
      alert("Something weird occured !");
    })
  }

  /* hijacking the first button so it becomes the copy button so we can bypass the CSP */
  var btn  = document.querySelectorAll("button")[0];
  btn.removeAttribute('jsaction');
  btn.removeAttribute('jscontroller');

  btn.onclick = copylinks;

})();