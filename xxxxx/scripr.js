


document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function() {
        seat.classList.toggle('selected');
    });
});

document.getElementById('confirm-btn').addEventListener('click', function() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length > 0) {
        alert(`You have selected ${selectedSeats.length} seat(s).`);
    } else {
        alert('Please select a seat before confirming.');
    }
});


function checkAnswer(answer) {
    var response = document.getElementById('response');
    if (answer === 'cairo') {
      response.innerHTML = '<p>Correct! Cairo is the capital of Egypt.</p>';
    } else {
      response.innerHTML = '<p>Incorrect. Try again!</p>';
    }
  }


  function submitReview() {
    var name = document.getElementById('review-name').value;
    var text = document.getElementById('review-text').value;

    if (name && text) {
      var reviewsList = document.getElementById('reviews-list');
      var reviewItem = document.createElement('div');
      reviewItem.classList.add('review-item');
      reviewItem.innerHTML = `<p class="name">${name}</p><p>${text}</p>`;
      reviewsList.appendChild(reviewItem);

      // Clear the form fields
      document.getElementById('review-name').value = '';
      document.getElementById('review-text').value = '';
    } else {
      alert('Please fill in both fields!');
    }
  }





  function requestNotificationPermission() {
    if (Notification.permission === 'granted') {
      sendArrivalNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          sendArrivalNotification();
        }
      });
    }
  }

  function sendArrivalNotification() {
    const notification = new Notification('Bus Arrival Alert', {
      body: 'Your bus is approaching your location! Get ready!',
      icon: 'path_to_bus_icon.png' // Replace with your icon path
    });
  }