var text = ["OOH BABY", "OOH BABY", "I FEEL RIGHT", "THE MUSIC", "SOUNDS BETTER", "WITH YOUUUUUU"];
var counter = 0;
var elem = document.getElementById("changeLyrics");
setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
