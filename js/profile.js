document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginTime = localStorage.getItem('loginTime');

    if (!currentUser || !loginTime) {
        window.location.href = '../login-signup/signup.html';
        return;
    }

    // Update DateTime display
    function updateDateTime() {
        const now = new Date();
        const formatted = now.getUTCFullYear() + '-' + 
                         String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                         String(now.getUTCDate()).padStart(2, '0') + ' ' +
                         String(now.getUTCHours()).padStart(2, '0') + ':' +
                         String(now.getUTCMinutes()).padStart(2, '0') + ':' +
                         String(now.getUTCSeconds()).padStart(2, '0');
        
        const dtDiv = document.getElementById('currentDateTime');
        if (dtDiv) dtDiv.textContent = formatted;

        const userDiv = document.getElementById('userLogin');
        if (userDiv) userDiv.textContent = `@${currentUser.username}`;
    }

    // Update time immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Update profile information
    document.getElementById('profileAvatar').src = currentUser.avatarUrl || "";
    document.getElementById('profileName').textContent = currentUser.fullName || "Unknown User";
    document.getElementById('profileUsername').textContent = `@${currentUser.username || 'username'}`;
    document.getElementById('profileJoinDate').textContent = `Member since: ${currentUser.joinDate || 'N/A'}`;

    // Update stats
    document.getElementById('profileStats').innerHTML = `
        <div class="stat-card">
            <i class="fas fa-code"></i>
            <h3>Courses Completed</h3>
            <p>${currentUser.coursesCompleted || 0}</p>
        </div>
        <div class="stat-card">
            <i class="fas fa-certificate"></i>
            <h3>Certificates Earned</h3>
            <p>${currentUser.certificatesEarned || 0}</p>
        </div>
        <div class="stat-card">
            <i class="fas fa-star"></i>
            <h3>Achievement Points</h3>
            <p>${currentUser.achievementPoints || 0}</p>
        </div>
    `;

    // Update progress
    const progressArray = Array.isArray(currentUser.progress) ? currentUser.progress : [];
    const progressHTML = progressArray.map(course => `
        <div class="progress-item">
            <div class="progress-header">
                <h3>${course.course}</h3>
                <span>${course.completion}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${course.completion}%"></div>
            </div>
        </div>
    `).join('');
    document.getElementById('courseProgress').innerHTML = progressHTML;

    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const tabName = button.getAttribute('data-tab');
            showTabContent(tabName);
        });
    });

    // Set default tab visible
    showTabContent('progress');
});

function showTabContent(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');
    const activeTab = document.getElementById(`${tabName}-tab`);
    if (activeTab) activeTab.style.display = 'block';
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loginTime');
    window.location.href = '../login-signup/login.html';
}