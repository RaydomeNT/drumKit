
const clap = document.querySelector(".clap");
const boom = document.querySelector(".boom");
const hihat = document.querySelector(".hihat");
const kick = document.querySelector(".kick");
const ride = document.querySelector(".ride");
const snare = document.querySelector(".snare");
const openHihat = document.querySelector(".openHihat");
const tom = document.querySelector(".tom");
const tink = document.querySelector(".tink");

const clapI = document.querySelector("#clapI")
const boomI = document.querySelector("#boomI")
const hihatI = document.querySelector("#hihatI")
const kickI = document.querySelector("#kickI")
const rideI = document.querySelector("#rideI")
const snareI = document.querySelector("#snareI")
const openHihatI = document.querySelector("#openHihatI")
const tomI = document.querySelector("#tomI")
const tinkI = document.querySelector("#tinkI")

clapI.addEventListener("click", e => {
    clap.pause()
    clap.curretnTime = 0
    clap.play();
} )

boomI.addEventListener("click", e => {
    boom.pause()
    boom.curretnTime = 0
    boom.play();
})

hihatI.addEventListener("click", e => {
    hihat.pause()
    hihat.curretnTime = 0
    hihat.play();
})

kickI.addEventListener("click", e => {
    kick.pause()
    kick.curretnTime = 0
    kick.play();
})

rideI.addEventListener("click", e => {
    ride.pause()
    ride.curretnTime = 0
    ride.play();
})

snareI.addEventListener("click", e => {
    snare.pause()
    snare.curretnTime = 0
    snare.play();
})

openHihatI.addEventListener("click", e => {
    openHihat.pause()
    openHihat.curretnTime = 0
    openHihat.play();
})

tomI.addEventListener("click", e => {
    tom.pause()
    tom.curretnTime = 0
    tom.play();
})

tinkI.addEventListener("click", e => {
    tink.pause()
    tink.curretnTime = 0
    tink.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
       document.querySelector(".clap").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83) {
       document.querySelector(".boom").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 68) {
       document.querySelector(".hihat").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 70) {
       document.querySelector(".kick").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 71) {
       document.querySelector(".ride").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 72) {
       document.querySelector(".snare").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 74) {
       document.querySelector(".openHihat").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 75) {
       document.querySelector(".tom").play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 76) {
       document.querySelector(".tink").play();
    }
  });
