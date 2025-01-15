// Remove collegeTeams and getContrastColor (now in teamData.js)
// Update createTeamElements to use collegeTeams from teamData.js

function createTeamElements() {
    Object.keys(collegeTeams).forEach(conference => {
        const conferenceDiv = document.getElementById(`${conference}Teams`);
        collegeTeams[conference].forEach(team => {
            const teamElement = document.createElement('button');
            teamElement.className = 'team-button';
            teamElement.textContent = team.name;
            teamElement.setAttribute('data-team-id', team.id);
            teamElement.setAttribute('data-team-color', team.color);
            teamElement.setAttribute('data-text-color', getContrastColor(team.color));
            
            // Add hover event listeners
            teamElement.addEventListener('mouseover', () => {
                teamElement.style.backgroundColor = team.color;
                teamElement.style.color = getContrastColor(team.color);
            });
            
            teamElement.addEventListener('mouseout', () => {
                teamElement.style.backgroundColor = '';
                teamElement.style.color = '';
            });
            
            teamElement.addEventListener('click', () => handleTeamClick(team));
            conferenceDiv.appendChild(teamElement);
        });
    });
}

// Handle team click events
function handleTeamClick(team) {
    window.location.href = `team.html?id=${team.id}`;
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', createTeamElements);
