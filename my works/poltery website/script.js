const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});








function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Create FormData object to send form data
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Use Fetch API to send data to the server
  fetch("process_form.php", {
      method: "POST",
      body: formData
  })
  .then(response => response.json()) // Assuming the server returns JSON
  .then(data => {
      // Handle the response from the server
      console.log(data);
      // You can redirect or show a success message here
  })
  .catch(error => {
      console.error("Error:", error);
      // Handle errors, e.g., display an error message to the user
  });
}





