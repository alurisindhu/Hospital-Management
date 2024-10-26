document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullname = document.getElementById('fullname').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
  
    if (fullname && age && gender && contact && email && appointmentDate && appointmentTime && department && doctor) {
      // Display confirmation message
      document.getElementById('confirmationMessage').classList.remove('hidden');
    } else {
      alert('Please fill in all required fields.');
    }
  });
  