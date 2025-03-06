let players = [];

function addPlayer() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let country = document.getElementById("country").value;
    let score = parseInt(document.getElementById("score").value);

    if (firstName && lastName && country && !isNaN(score)) {
        players.push({ firstName, lastName, country, score });
        updateTable();
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("country").value = "";
        document.getElementById("score").value = "";
    }
}

function updateTable() {
    let table = document.getElementById("leaderboard");
    table.innerHTML = "";

    players.forEach((player, index) => {
        let row = `<tr>
            <td>${player.firstName}</td>
            <td>${player.lastName}</td>
            <td>${player.country}</td>
            <td>${player.score}</td>
            <td><button onclick="deletePlayer(${index})">Delete</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function deletePlayer(index) {
    players.splice(index, 1);
    updateTable();
}
