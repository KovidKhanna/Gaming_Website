/* To add functionality to the mute button */
function toggleMute() {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0; i < audios.length; i++) {
    audios[i].muted = !audios[i].muted;
  }
}

/* To open the form */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

/* To close the form */
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/* To send form data to mysql database */
document.getElementById('sampleForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  /* Data log */
  console.log('Form data:', Object.fromEntries(formData));

  try {
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      body: formData
    });

    console.log('Response:', response);

  } catch (error) {
    console.error('Error submitting form:', error);
  }
});