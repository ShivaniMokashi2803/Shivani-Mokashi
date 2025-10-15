document.getElementById("registerForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!fullname || !email || !phone || !password) {
    alert("Please fill all fields!");
    return;
  }

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, phone, password })
    });

    const result = await response.json();
    document.getElementById("message").textContent = "✅ " + result.message;
    event.target.reset();
  } catch (error) {
    document.getElementById("message").textContent = "❌ Error submitting form";
  }
});
