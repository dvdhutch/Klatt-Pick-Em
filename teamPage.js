// Error handling states
const ErrorTypes = {
    TEAM_NOT_FOUND: 'TEAM_NOT_FOUND',
    INVALID_PARAMS: 'INVALID_PARAMS',
    DATA_LOADING: 'DATA_LOADING'
};

// Enhanced error handling
function handleInvalidTeam(errorType = ErrorTypes.TEAM_NOT_FOUND) {
    const messages = {
        [ErrorTypes.TEAM_NOT_FOUND]: 'Team not found',
        [ErrorTypes.INVALID_PARAMS]: 'Invalid team ID',
        [ErrorTypes.DATA_LOADING]: 'Error loading team data'
    };

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.role = 'alert';
    errorDiv.textContent = messages[errorType];
    
    const container = document.querySelector('.container');
    container.insertBefore(errorDiv, container.firstChild);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Enhanced team validation
function getTeamFromURL() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const teamId = urlParams.get('id');
        
        if (!teamId) {
            handleInvalidTeam(ErrorTypes.INVALID_PARAMS);
            return null;
        }

        const team = getAllTeams().find(team => team.id === teamId);
        if (!team) {
            handleInvalidTeam(ErrorTypes.TEAM_NOT_FOUND);
            return null;
        }

        return team;
    } catch (error) {
        console.error('Error parsing team data:', error);
        handleInvalidTeam(ErrorTypes.DATA_LOADING);
        return null;
    }
}

// Update page content with team data
function updatePageContent(team) {
    try {
        document.title = `${team.name} - Klatt Pick 'Em`;
        
        const teamHeader = document.getElementById('teamHeader');
        const teamName = document.getElementById('teamName');
        
        teamName.textContent = team.name;
        teamHeader.style.backgroundColor = team.color;
        teamName.style.color = getContrastColor(team.color);
        
        initializeScheduleSection(team);
        initializePredictionsSection(team);
    } catch (error) {
        console.error('Error updating page content:', error);
        handleInvalidTeam(ErrorTypes.DATA_LOADING);
    }
}

// Initialize schedule section
function initializeScheduleSection(team) {
    const scheduleContent = document.getElementById('scheduleContent');
    const teamSchedule = getTeamSchedule(team.id);
    
    if (!teamSchedule || !teamSchedule.schedule.length) {
        scheduleContent.innerHTML = `
            <div class="alert alert-info">
                ${team.name}'s 2025 schedule will be displayed here when available.
            </div>
        `;
        return;
    }

    scheduleContent.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                ${teamSchedule.schedule.map(game => `
                    <tr>
                        <td>Week ${game.week}</td>
                        <td>${game.date}</td>
                        <td>${game.opponent}</td>
                        <td>${game.location}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Initialize predictions section
function initializePredictionsSection(team) {
    const predictionsContent = document.getElementById('predictionsContent');
    predictionsContent.innerHTML = `
        <div class="alert alert-info">
            Predictions for ${team.name}'s 2025 season will be available when the season approaches.
        </div>
    `;
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const team = getTeamFromURL();
    if (team) updatePageContent(team);
});
