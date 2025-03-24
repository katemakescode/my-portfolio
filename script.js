// Simple form handling
document.addEventListener('DOMContentLoaded', () => {
    // Content for different pages/sections
    const pageContent = {
        about: `
            <div class="content-section">
                <h2>About Me</h2>
                <div class="about-container">
                    <div class="profile-image">
                        <img src="your-image.jpg" alt="Profile Picture">
                    </div>
                    <div class="about-text">
                        <p>Hi, I'm [Your Name], a self-taught software developer passionate about technology and problem-solving.</p>
                        <p>After working in management at Flannels, I discovered a passion for technology and automation. I am now pursuing a career in web development to create innovative solutions.</p>
                        <div class="personal-info">
                            <h3>Quick Facts</h3>
                            <ul>
                                <li>🌍 Based in [Your Location]</li>
                                <li>💼 Open to Job Opportunities</li>
                                <li>📚 Currently learning [Technology]</li>
                                <li>🎯 2024 Goal: [Your Goal]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `,
        skills: `
            <div class="content-section">
                <h2>Skills & Expertise</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend Development</h3>
                        <div class="skill-bars">
                            <div class="skill-bar">
                                <span class="skill-name">HTML/CSS</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <span class="skill-name">JavaScript</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 85%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <span class="skill-name">React</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Backend Development</h3>
                        <div class="skill-bars">
                            <div class="skill-bar">
                                <span class="skill-name">Node.js</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <span class="skill-name">Python</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Tools & Technologies</h3>
                        <div class="tools-grid">
                            <span class="tool">Git</span>
                            <span class="tool">VS Code</span>
                            <span class="tool">npm</span>
                            <span class="tool">Webpack</span>
                            <span class="tool">Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        projects: `
            <div class="content-section">
                <h2>My Projects</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Project 1">
                        </div>
                        <div class="project-content">
                            <h3>Project Name 1</h3>
                            <p>Detailed description of your first project and what technologies you used.</p>
                            <div class="tech-stack">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">MongoDB</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn">Live Demo</a>
                                <a href="#" class="btn">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project2.jpg" alt="Project 2">
                        </div>
                        <div class="project-content">
                            <h3>Project Name 2</h3>
                            <p>Detailed description of your second project and its key features.</p>
                            <div class="tech-stack">
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">HTML</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn">Live Demo</a>
                                <a href="#" class="btn">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="content-section">
                <h2>Contact Me</h2>
                <div class="contact-container">
                    <div class="contact-info">
                        <h3>Let's Connect!</h3>
                        <p>Feel free to reach out for collaborations or just a friendly hello</p>
                        <div class="contact-details">
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>your.email@example.com</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <span>+44 123 456 7890</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Your Location</span>
                            </div>
                        </div>
                    </div>
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
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        `
    };

    // Handle navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentContainer = document.querySelector('.content-container');

    // Function to update content
    function updateContent(pageId) {
        contentContainer.style.opacity = '0';
        setTimeout(() => {
            contentContainer.innerHTML = pageContent[pageId];
            contentContainer.style.opacity = '1';
            
            // Update active state of navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === pageId) {
                    link.classList.add('active');
                }
            });
        }, 300);
    }

    // Add click handlers to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.target.getAttribute('href').slice(1);
            updateContent(pageId);
            history.pushState(null, '', `#${pageId}`);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const pageId = window.location.hash.slice(1) || 'about';
        updateContent(pageId);
    });

    // Handle form submission
    document.addEventListener('submit', (e) => {
        if (e.target.id === 'contact-form') {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            console.log('Form submitted:', formData);
            showNotification('Message sent successfully!', 'success');
            e.target.reset();
        }
    });

    // Load initial content based on URL hash or default to 'about'
    const initialPage = window.location.hash.slice(1) || 'about';
    updateContent(initialPage);
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

