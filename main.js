const countDown = document.querySelector('.countdown');

//    Set Launch Date
const launchDate = new Date('July 21, 2019 15:00:00').getTime();

//    Update every second
const intvl = setInterval(() => {
  //    Get today's Date
  const now = new Date().getTime();

  //    Distance from now to launch date
  const distance = launchDate - now;

  //    Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(distance % (1000 * 60) / (1000));

  //    Display result
  countDown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  //    If launch date passed
  if(distance < 0){
    clearInterval(intvl);
    countDown.innerHTML = 'Lauched';
  }
}, 1000)
