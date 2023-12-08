const colorButton = document.getElementById('colorButton');
  const toggleButton = document.getElementById('toggleButton');
  let animationRunning = true;

  const colors = [
    "#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881",
    "#f53b57", "#3c40c6", "#0fbcf9", "#00d8d6", "#05c46b",
    "#ffc048", "#ffdd59", "#ff5e57", "#d2dae2", "#485460",
    "#ffa801", "#ffd32a", "#ff3f34","#ef5777"
  ];

  function startVibrantAurora() {
    document.body.classList.add('vibrantAurora');
    animationRunning = true;
  }

  function stopVibrantAurora() {
    document.body.classList.remove('vibrantAurora');
    animationRunning = false;
  }

  function toggleAnimation() {
    if (animationRunning) {
      stopVibrantAurora();
    } else {
      startVibrantAurora();
    }
  }

