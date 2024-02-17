const activeTimeMap = {
  'option1': 20,
  'option2': 30,
  'option3': 60
};

const sedentaryTimeMap = {
  'option1': 60,
  'option2': 120,
  'option3': 180
};

const activeTimes = [];
const sedentaryTimes = [];

function startSession() {
  const setTaskInput = document.getElementById('set-task');
  const activeTimeSelect = document.getElementById('active-time');
  const sedentaryTimeSelect = document.getElementById('sedentary-time');

  const task = setTaskInput.value;
  const activeTimeKey = activeTimeSelect.value;
  const sedentaryTimeKey = sedentaryTimeSelect.value;

  const activeTime = activeTimeMap[activeTimeKey];
  const sedentaryTime = sedentaryTimeMap[sedentaryTimeKey];

  // Add activeTime and sedentaryTime to the respective arrays
  activeTimes.push(activeTime);
  sedentaryTimes.push(sedentaryTime);

  setTaskInput.value = ''; // Clear the input field
  activeTimeSelect.selectedIndex = 0; // Reset the select to default
  sedentaryTimeSelect.selectedIndex = 0; // Reset the select to default

  // Display countdown pop-up for sedentary time
  displayCountdown(task, activeTime, sedentaryTime, true);
}

function displayCountdown(task, activeTime, sedentaryTime, isSedentary) {
  const countdownWindow = window.open('', 'Countdown', 'width=400,height=300,top=screen.height-150,right=0,menubar=no,toolbar=no,location=no,status=no');
  countdownWindow.document.body.style.backgroundColor = '#f5f5f5';
  countdownWindow.document.body.style.padding = '10px';

  let seconds = sedentaryTime * 60;
  const intervalId = setInterval(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    countdownWindow.document.body.innerHTML = `
      <h2>Task: ${task}</h2>
      <h3>Active Time: ${activeTime} mins</h3>
      <h3>Sedentary Time: ${sedentaryTime} mins</h3>
      <h3>${isSedentary ? 'Sedentary' : 'Active'} Time Remaining: ${minutes}:${String(remainingSeconds).padStart(2, '0')}</h3>
    `;
    if (seconds <= 0) {
      clearInterval(intervalId);
      if (isSedentary) {
        countdownWindow.document.body.innerHTML += '<audio autoplay><source src="bell.mp3" type="audio/mpeg"></audio><button onclick="startActiveSession()">Get Active</button>';
      } else {
        if (confirm('Active time is over. Do you want to start another session?')) {
          displayCountdown(task, activeTime, activeTime, false); // Fixed the argument order here
        } else {
          countdownWindow.close();
        }
      }
    } else if (!isSedentary) {
      countdownWindow.document.body.innerHTML += `<h3>Active Time Remaining: ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}</h3>`;
    }
    seconds--;
  }, 1000);
}

function startActiveSession() {
  const activeTime = parseInt(document.getElementById('active-time').value);
  displayCountdown(activeTime, false);
}

export { startSession, startActiveSession, activeTimeMap, sedentaryTimeMap, activeTimes, sedentaryTimes };
