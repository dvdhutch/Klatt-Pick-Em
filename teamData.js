// Team database
const collegeTeams = {
    bigTen: [
        { name: "Michigan", id: "MICH", color: "#00274C" },
        { name: "Ohio State", id: "OSU", color: "#BB0000" },
        { name: "Penn State", id: "PSU", color: "#041E42" },
        { name: "UCLA", id: "UCLA", color: "#2D68C4" },
        { name: "USC", id: "USC", color: "#990000" },
        { name: "Washington", id: "WASH", color: "#4B2E83" },
        { name: "Oregon", id: "ORE", color: "#154733" },
        { name: "Iowa", id: "IOWA", color: "#000000" },
        { name: "Wisconsin", id: "WISC", color: "#C5050C" },
        { name: "Minnesota", id: "MINN", color: "#7A0019" },
        { name: "Illinois", id: "ILL", color: "#E84A27" },
        { name: "Maryland", id: "MD", color: "#E03a3e" },
        { name: "Michigan State", id: "MSU", color: "#18453B" },
        { name: "Nebraska", id: "NEB", color: "#E41C38" },
        { name: "Northwestern", id: "NW", color: "#4E2A84" },
        { name: "Purdue", id: "PUR", color: "#CEB888" },
        { name: "Rutgers", id: "RUT", color: "#CC0033" },
        { name: "Indiana", id: "IND", color: "#990000" }
    ],
    sec: [
        { name: "Alabama", id: "BAMA", color: "#9E1B32" },
        { name: "Georgia", id: "UGA", color: "#BA0C2F" },
        { name: "LSU", id: "LSU", color: "#461D7C" },
        { name: "Texas", id: "TEX", color: "#BF5700" },
        { name: "Oklahoma", id: "OU", color: "#841617" },
        { name: "Florida", id: "FLA", color: "#0021A5" },
        { name: "Tennessee", id: "TENN", color: "#FF8200" },
        { name: "Auburn", id: "AUB", color: "#0C2340" },
        { name: "Texas A&M", id: "TAMU", color: "#500000" },
        { name: "Kentucky", id: "UK", color: "#0033A0" },
        { name: "Mississippi State", id: "MSST", color: "#660000" },
        { name: "Ole Miss", id: "MISS", color: "#CE1126" },
        { name: "South Carolina", id: "SC", color: "#73000A" },
        { name: "Arkansas", id: "ARK", color: "#9D2235" },
        { name: "Missouri", id: "MIZ", color: "#F1B82D" },
        { name: "Vanderbilt", id: "VAN", color: "#866D4B" }
    ],
    big12: [
        { name: "Arizona", id: "ARIZ", color: "#CC0033" },
        { name: "Arizona State", id: "ASU", color: "#8C1D40" },
        { name: "Baylor", id: "BAY", color: "#003015" },
        { name: "BYU", id: "BYU", color: "#002E5D" },
        { name: "UCF", id: "UCF", color: "#BA9B37" },
        { name: "Cincinnati", id: "CIN", color: "#E00122" },
        { name: "Colorado", id: "COL", color: "#CFB87C" },
        { name: "Houston", id: "HOU", color: "#C8102E" },
        { name: "Iowa State", id: "ISU", color: "#C8102E" },
        { name: "Kansas", id: "KU", color: "#0051BA" },
        { name: "Kansas State", id: "KSU", color: "#512888" },
        { name: "Oklahoma State", id: "OKST", color: "#FF7300" },
        { name: "TCU", id: "TCU", color: "#4D1979" },
        { name: "Texas Tech", id: "TTU", color: "#CC0000" },
        { name: "Utah", id: "UTAH", color: "#CC0000" },
        { name: "West Virginia", id: "WVU", color: "#002855" }
    ],
    acc: [
        { name: "Boston College", id: "BC", color: "#98002E" },
        { name: "Clemson", id: "CLEM", color: "#F56600" },
        { name: "Duke", id: "DUKE", color: "#003087" },
        { name: "Florida State", id: "FSU", color: "#782F40" },
        { name: "Georgia Tech", id: "GT", color: "#B3A369" },
        { name: "Louisville", id: "LOU", color: "#AD0000" },
        { name: "Miami", id: "MIA", color: "#F47321" },
        { name: "NC State", id: "NCST", color: "#CC0000" },
        { name: "North Carolina", id: "UNC", color: "#7BAFD4" },
        { name: "Pittsburgh", id: "PITT", color: "#003594" },
        { name: "Syracuse", id: "SYR", color: "#F76900" },
        { name: "Virginia", id: "UVA", color: "#232D4B" },
        { name: "Virginia Tech", id: "VT", color: "#630031" },
        { name: "Wake Forest", id: "WAKE", color: "#9E7E38" },
        { name: "SMU", id: "SMU", color: "#0033A0" },
        { name: "Cal", id: "CAL", color: "#003262" },
        { name: "Stanford", id: "STAN", color: "#8C1515" }
    ]
};

// Utility function for text contrast
function getContrastColor(hexcolor) {
    const r = parseInt(hexcolor.slice(1,3), 16);
    const g = parseInt(hexcolor.slice(3,5), 16);
    const b = parseInt(hexcolor.slice(5,7), 16);
    
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Helper function to get all teams in a flat array
function getAllTeams() {
    const allTeams = [];
    Object.keys(collegeTeams).forEach(conference => {
        allTeams.push(...collegeTeams[conference]);
    });
    return allTeams;
}
