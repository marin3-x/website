document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
  
    const payload = {
      content: `@everyone\nname: ${username}\nemail:${email}\nmessage: ${message}\n---------------------------------------------------`
    };
  
    fetch('https://discord.com/api/webhooks/1279495280978558986/c8EAPwUA64Vb6f7coUh1L9twQGhaOnNIhovOzo98s_qh61fAlt1JAIUhLAXVe6j2tWJv', {
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
  
