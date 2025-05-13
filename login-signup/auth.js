// Predefined user credentials
// const authorizedUsers = [
//     { username: 'fardin_khan_nur', password: '1234', fullName: 'Fardin Khan Nur' },
//     { username: 'tamim_sharif', password: '1234', fullName: 'Tamim Sharif' },
//     { username: 'tanvir', password: '1234', fullName: 'Tanvir' },
//     // Add more users as needed
// ];



// Predefined user credentials with additional profile information
const authorizedUsers = [
    { 
        username: 'fkn',
        password: '1234',
        fullName: 'Fardin Khan Nur',
        joinDate: getCurrentDate(),
        coursesCompleted: 20,
        certificatesEarned: 9,
        achievementPoints: 3469,
        avatarUrl: '../img/Logo-Anonymous.png',
        progress: [
            { course: 'HTML & CSS Fundamentals', completion: 85 },
            { course: 'C & C++', completion: 80 },
            { course: 'Python', completion: 70 },
            { course: 'JavaScript Basics', completion: 70 },
            { course: 'React Framework', completion: 35 }
        ]
    },
    { 
        username: 'tamim',
        password: '1234',
        fullName: 'Tamim Sharif',
        joinDate: getCurrentDate(),
        coursesCompleted: 12,
        certificatesEarned: 5,
        achievementPoints: 1850,
        avatarUrl: '../img/tamim.jpg',
        progress: [
            { course: 'HTML & CSS Fundamentals', completion: 90 },
            { course: 'C & C++', completion: 80 },
            { course: 'Python Basics', completion: 65 }
        ]
    },
    { 
        username: 'tanvir',
        password: '1234',
        fullName: 'Mehedi Hasan Tanvir',
        joinDate: getCurrentDate(),
        coursesCompleted: 8,
        certificatesEarned: 3,
        achievementPoints: 1250,
        avatarUrl: '../img/tan.jpg',
        progress: [
            { course: 'HTML & CSS Fundamentals', completion: 50 },
            { course: 'C & C++', completion: 60 },
            { course: 'Python Basics', completion: 25 }
        ]
    }
];

function getCurrentDate() {
    const now = new Date();
    return now.toISOString().slice(0, 10);
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const submitButton = loginForm.querySelector('button');
            submitButton.classList.add('loading');
            
            setTimeout(() => {
                const user = authorizedUsers.find(u => 
                    u.username === username && u.password === password
                );

                if (user) {
                    // Store user data in localStorage
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('loginTime', new Date().toISOString());
                    showMessage('Login successful! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = '../html/profile.html';
                    }, 1500);
                } else {
                    showMessage('Invalid username or password!', 'error');
                }
                
                submitButton.classList.remove('loading');
            }, 1000);
        });
    }
});






document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Add loading animation
            const submitButton = loginForm.querySelector('button');
            submitButton.classList.add('loading');
            
            // Simulate server delay
            setTimeout(() => {
                const user = authorizedUsers.find(u => 
                    u.username === username && u.password === password
                );

                if (user) {
                    showMessage('Login successful! Redirecting...', 'success');
                    setTimeout(() => {

                        window.location.href = '../html/profile.html';
                    }, 1500);
                } else {
                    showMessage('Invalid username or password!', 'error');
                }
                
                submitButton.classList.remove('loading');
            }, 1000);
        });
    }

    // Handle Signup
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // loading anim
            const submitButton = signupForm.querySelector('button');
            submitButton.classList.add('loading');

            setTimeout(() => {
                // Check if username already exists
                if (authorizedUsers.some(u => u.username === username)) {
                    showMessage('Username already exists!', 'error');
                } else {
                    // In a real application, you would save this to a database
                    console.log('New user signup:', { fullname, email, username });
                    showMessage('Account created successfully! Redirecting to login...', 'success');
                    setTimeout(() => {

                        window.location.href = 'login.html';
                    }, 1500);
                }
                
                submitButton.classList.remove('loading');
            }, 1000);
        });
    }
});

function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.message-popup');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `message-popup ${type} animate__animated animate__fadeInDown`;
    messageElement.textContent = message;

    // Add styles
    Object.assign(messageElement.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '15px 30px',
        borderRadius: '5px',
        backgroundColor: type === 'success' ? '#2ecc71' : '#e74c3c',
        color: 'white',
        zIndex: '1000',
        boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
    });

    document.body.appendChild(messageElement);

    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.classList.remove('animate__fadeInDown');
        messageElement.classList.add('animate__fadeOutUp');
        setTimeout(() => messageElement.remove(), 1000);
    }, 3000);
}

