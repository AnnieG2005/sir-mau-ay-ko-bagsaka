// Select the button and create the overlay
const button = document.querySelector('.column-left button');
const body = document.body;

button.addEventListener('click', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Create message container
    const messageContainer = document.createElement('div');
    messageContainer.style.backgroundColor = '#fff';
    messageContainer.style.padding = '20px';
    messageContainer.style.borderRadius = '10px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.maxWidth = '500px'; // Limit width for better appearance

    // Create message
    const message = document.createElement('p');
    message.textContent = "JOIN US NOW(this is not a joke)!";
    message.style.fontSize = '1.5rem';
    message.style.marginBottom = '20px'; // Add space below the message

    // Create first image
    const image1 = document.createElement('img');
    image1.src = 'https://pbs.twimg.com/media/D3lGoayU8AA829-.jpg'; // Replace with your first image URL
    image1.alt = 'First Image';
    image1.style.width = '233px'; // Adjust size as needed
    image1.style.marginBottom = '20px'; // Add space below the first image

    // Create second image
    const image2 = document.createElement('img');
    image2.src = 'https://i.imgflip.com/41lonp.jpg'; // Replace with your second image URL
    image2.alt = 'Second Image';
    image2.style.width = '220px'; // Adjust size as needed
    image2.style.marginBottom = '20px'; // Add space below the second image

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#000';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';

    // Append elements
    messageContainer.appendChild(message);
    messageContainer.appendChild(image1);
    messageContainer.appendChild(image2);
    messageContainer.appendChild(closeButton);
    overlay.appendChild(messageContainer);
    body.appendChild(overlay);

    // Close overlay on button click
    closeButton.addEventListener('click', () => {
        body.removeChild(overlay);
    });
});