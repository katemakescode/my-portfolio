document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data with timestamp
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Send data to our backend endpoint
            const response = await fetch('/api/contact/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to save message');
            }

            showNotification('Message saved successfully!', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error saving message:', error);
            showNotification('Failed to save message. Please try again.', 'error');
            
        } finally {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
});

// ... rest of the notification code remains the same ...
