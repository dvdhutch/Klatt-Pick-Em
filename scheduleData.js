// Schedule database structure
const scheduleData = {
    // Example structure for one team's schedule
    MICH: {
        conference: "bigTen",
        schedule: [
            {
                week: 1,
                date: "2025-08-30",
                opponent: "TBD",
                location: "home",
                predictedWinner: null,
                confidence: null,
                klattPick: null
            }
        ]
    }
};

// Function to get a team's schedule
function getTeamSchedule(teamId) {
    return scheduleData[teamId] || null;
}

// Function to update schedule data (for future use)
function updateSchedule(teamId, scheduleInfo) {
    if (!scheduleData[teamId]) {
        scheduleData[teamId] = {
            conference: null,
            schedule: []
        };
    }
    scheduleData[teamId].schedule = scheduleInfo;
}

// Function to update prediction data (for future use)
function updatePrediction(teamId, week, prediction) {
    if (scheduleData[teamId] && scheduleData[teamId].schedule[week - 1]) {
        Object.assign(scheduleData[teamId].schedule[week - 1], prediction);
    }
}
