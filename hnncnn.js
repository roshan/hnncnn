Array.from(document.getElementsByClassName("subtext")).forEach(x => {
  if (x.children.length > 1) {
    x.children[1].style.display = "none";
  }
  if (x.children.length > 6) {
    x.children[6].style.display = "none";
  }
})
