function countDown(seconds) {
  let timer = setInterval(function () {
    seconds--;

    if (seconds > 0) {
      console.log(seconds);
    } else {
      console.log("DONE!");
      clearInterval(timer);
    }
  }, 1000);
}
