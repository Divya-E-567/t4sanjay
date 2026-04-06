
function send() {
    // 1. Get the values from your HTML (using IDs)
    const nameField = document.getElementById('contactName');
    const phoneField = document.getElementById('contactPhone');
    const messageField = document.getElementById('contactMessage');
    const statusMsg = document.getElementById('status-msg');

    // 2. Validation
    if (nameField.value === "" || phoneField.value.length < 10) {
        alert("Please enter a valid Name and 10-digit Phone Number.");
        return;
    }

    // 3. Create and Open the WhatsApp URL
    const number = "919995452067";
    const text = "🍔 *New Enquiry from Website* 🍔%0a%0a" +
                 "*Name:* " + encodeURIComponent(nameField.value) + "%0a" +
                 "*Phone:* " + encodeURIComponent(phoneField.value) + "%0a" +
                 "*Message:* " + encodeURIComponent(messageField.value);

    window.open("https://wa.me/" + number + "?text=" + text, '_blank');

    // --- ADD THE CLEAR LOGIC HERE ---
    
    // 4. Show the Success Message
    statusMsg.style.display = "block";
    statusMsg.innerHTML = "✅ Message sent! Opening WhatsApp...";

    // 5. Clear the actual input boxes
    nameField.value = "";
    phoneField.value = "";
    messageField.value = "";

    // 6. Optional: Hide the success message after 1 seconds
    setTimeout(function() {
        statusMsg.style.display = "none";
    }, 1000);
}
