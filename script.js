// Simple form handling
document.addEventListener('DOMContentLoaded', () => {
    // Content for different pages/sections
    const pageContent = {
        github: `
            <div class="content-section">
                <h2>My GitHub Projects</h2>
                <div class="github-projects">
                    <div class="project-card">
                        <h3>Project 1</h3>
                        <p>Description of your GitHub project</p>
                        <div class="tech-stack">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                        </div>
                        <a href="#" class="repo-link">View Repository</a>
                    </div>
                    <div class="project-card">
                        <h3>Project 2</h3>
                        <p>Description of another project</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Django</span>
                        </div>
                        <a href="#" class="repo-link">View Repository</a>
                    </div>
                </div>
            </div>
        `,
        linkedin: `
            <div class="content-section">
                <h2>Professional Experience</h2>
                <div class="experience-timeline">
                    <div class="experience-item">
                        <h3>Current Position</h3>
                        <p class="company">Company Name</p>
                        <p class="date">2023 - Present</p>
                        <ul>
                            <li>Achievement 1</li>
                            <li>Achievement 2</li>
                        </ul>
                    </div>
                    <div class="experience-item">
                        <h3>Previous Role</h3>
                        <p class="company">Previous Company</p>
                        <p class="date">2021 - 2023</p>
                        <ul>
                            <li>Achievement 1</li>
                            <li>Achievement 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        twitter: `
            <div class="content-section">
                <h2>Latest Updates</h2>
                <div class="twitter-feed">
                    <div class="tweet">
                        <p>Latest tweet about tech and development</p>
                        <span class="date">2 hours ago</span>
                    </div>
                    <div class="tweet">
                        <p>Another interesting update about your journey</p>
                        <span class="date">2 days ago</span>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="content-section">
                <h2>Contact Me</h2>
                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        `
    };

    // Create a content container if it doesn't exist
    let contentContainer = document.querySelector('.content-container');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';
        document.querySelector('main') || document.body.appendChild(contentContainer);
    }

    // Handle social button clicks
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            socialButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Determine which content to show
            let contentType = '';
            if (button.href.includes('github')) contentType = 'github';
            else if (button.href.includes('linkedin')) contentType = 'linkedin';
            else if (button.href.includes('twitter')) contentType = 'twitter';
            else if (button.href.includes('mailto')) contentType = 'contact';

            // Show the content with animation
            contentContainer.style.opacity = '0';
            setTimeout(() => {
                contentContainer.innerHTML = pageContent[contentType];
                contentContainer.style.opacity = '1';
            }, 300);
        });
    });

    // Handle contact form submission
    document.addEventListener('submit', (e) => {
        if (e.target.id === 'contact-form') {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            console.log('Form submitted:', formData);
            showNotification('Message sent successfully!', 'success');
            e.target.reset();
        }
    });
});

// Simple notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '5px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        zIndex: '1000'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}
