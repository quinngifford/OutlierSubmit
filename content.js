function SubmitTask() {
    

    const buttons = Array.from(document.querySelectorAll('button'));
    const submitButton = buttons.find(button => button.textContent.trim() === 'Submit Task');
    const timerElement = buttons.find(button=> button.textContent.trim().includes('Idle Time'));
  
    if (timerElement && submitButton) {
      const time = timerElement.innerText.split();
      for (let i = 0; i < time.length; i++) {
        if (time[i].includes("minutes")) {
          var minutes = parseInt(time[i - 1]);
        }
      }

      if (minutes < 5) {
        console.log("Submitting task");
        submitButton.click();
      }
    }
  }

  setInterval(SubmitTask, 30000);