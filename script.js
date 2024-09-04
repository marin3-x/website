document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
  
    const payload = {
      content: ` @Verified \nname: ${username}\nemail:${email}\nmessage: ${message}\n---------------------------------------------------`
    };
  
    fetch('https://discord.com/api/webhooks/1280586000019624037/nrlMdAVEpsOIMBxxP5uXxRLhIX5F9O6CgM6MPy9qE2VgBNIRl2uZoOrwzV1bfy_ega8i', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('webhookForm').reset();
      } else {
        alert('Error sending message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');
  
    hamburger.addEventListener('click', () => {
      navRight.style.display = navRight.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  
