var text = ["OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY", "OOH BABY",
//16//
 "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT",
  "THE MUSIC", "THE MUSIC", "THE MUSIC", "THE MUSIC",
  "SOUNDS", "SOUNDS", "BETTER", "BETTER",
  //30//
  "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU",
//50//
  "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT",
  "BRING", "US", "BACK",
  "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR",
  //62
  "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD", "I FEEL SO GOOD",
//82//
  "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT", "I FEEL RIGHT",
   "THE MUSIC", "THE MUSIC", "THE MUSIC",
   "SOUNDS", "SOUNDS", "BETTER", "BETTER",
   //95//
   "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU", "WITH YOUUUUUU",
//115//
   "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT", "LOVE MIGHT",
   "BRING", "US", "BACK",
   //124//
   "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR", "TOGETHERRRR",];
  //135//
var counter = 0;
var elem = document.getElementById("changeLyrics");
setInterval(change, 237.5);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
  if (counter <= 16){
    elem.classList.add('blue');
    elem.classList.remove('teal');
  } if (counter > 16 && counter <= 22) {
    elem.classList.remove('blue');
    elem.classList.add('yellow');
  }
    if (counter > 22 && counter <= 26) {
    elem.classList.remove('yellow');
    elem.classList.add('red');
  }
  if (counter > 26 && counter <= 28) {
  elem.classList.remove('red');
  elem.classList.add('aqua');
}
if (counter > 28 && counter <= 30) {
elem.classList.remove('aqua');
elem.classList.add('darkorange');
}
if (counter > 30 && counter <= 50) {
elem.classList.remove('darkorange');
elem.classList.add('purple');
}
if (counter > 50 && counter <= 56) {
elem.classList.remove('purple');
elem.classList.add('deeppink');
}
if (counter > 56 && counter < 58) {
elem.classList.remove('deeppink');
elem.classList.add('red');
}
if (counter > 57 && counter < 59) {
elem.classList.remove('red');
elem.classList.add('yellowgreen');
}
if (counter > 58 && counter < 60) {
elem.classList.remove('yellowgreen');
elem.classList.add('aquamarine');
}
if (counter > 59 && counter <= 62) {
elem.classList.remove('aquamarine');
elem.classList.add('teal');
}
if (counter > 62 && counter <= 82) {
elem.classList.remove('teal');
elem.classList.add('purple');
}
if (counter > 82 && counter <= 88) {
elem.classList.remove('purple');
elem.classList.add('aqua');
}
if (counter > 88 && counter <= 91) {
elem.classList.remove('aqua');
elem.classList.add('yellowgreen');
}
if (counter > 91 && counter <= 93) {
elem.classList.remove('yellowgreen');
elem.classList.add('red');
}
if (counter > 93 && counter <= 95) {
elem.classList.remove('red');
elem.classList.add('green');
}
if (counter > 95 && counter <= 115) {
elem.classList.remove('green');
elem.classList.add('darkorange');
}
if (counter > 115 && counter <= 121) {
elem.classList.remove('darkorange');
elem.classList.add('deeppink');
}
if (counter > 121 && counter < 123) {
elem.classList.remove('deeppink');
elem.classList.add('red');
}
if (counter > 122 && counter < 124) {
elem.classList.remove('red');
elem.classList.add('yellowgreen');
}
if (counter > 123 && counter < 125) {
elem.classList.remove('yellowgreen');
elem.classList.add('aquamarine');
}
  if (counter > 124 && counter <= 135) {
  elem.classList.remove('aquamarine');
  elem.classList.add('teal');
}
}
