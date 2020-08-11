async function getData() {
  const ClanTag = document.getElementById("clanTag").value;
  var newClanTag = ClanTag.replace("#", "");
  newClanTag = ClanTag.replace(/0/g, "O");
  console.log("Player Clan Fetch Successful");
  const url = `https://clash.clashperk.com/v1/clans/%23${newClanTag}/currentwar`;

  const data = await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => (document.getElementById("result").innerHTML = err));

  const opponentClanTag = data.opponent.tag.replace("#", "").replace(/0/g, "O");

  console.log("Opponent Clan fetch successful");

  const url2 = `https://clash.clashperk.com/v1/clans/%23${opponentClanTag}`;
  const data2 = await fetch(url2, { method: "GET" }).then((res) => res.json());
  document.getElementById("opponentDescription").innerHTML = data2.description;
  document.getElementById("opponentMembers").innerHTML = data2.members;
  document.getElementById("opponentTag").innerHTML = opponentClanTag;
  document.getElementById("opponentName").innerHTML = data.opponent.name;
  document.getElementById("link").innerHTML = "(CC Status)";

  document.getElementById(
    "link"
  ).href = `https://kuilin.net/cc_n/clan.php?tag=${opponentClanTag}`;

  // const Character = document.getElementById("character").value;
  const Sync = document.getElementById("sync").value;
  if (Sync === "---") {
    alert("Missing Sync");
  }

  console.log(opponentClanTag);

  if (Sync === "High") {
    if (
      (newClanTag[0] > opponentClanTag[0] &&
        newClanTag[1] > opponentClanTag[1]) ||
      (newClanTag[1] > opponentClanTag[1] &&
        newClanTag[2] > opponentClanTag[2]) ||
      (newClanTag[0] > opponentClanTag[0] && newClanTag[2] > opponentClanTag[2])
    ) {
      document.getElementById("result").innerHTML = "WIN ";
      document.getElementById("result").style.color = "green";
    } else if (
      (newClanTag[0] == opponentClanTag[0] &&
        newClanTag[1] == opponentClanTag[1]) ||
      (newClanTag[1] == opponentClanTag[1] &&
        newClanTag[2] == opponentClanTag[2]) ||
      (newClanTag[0] == opponentClanTag[0] &&
        newClanTag[2] == opponentClanTag[2])
    ) {
      if (newClanTag[3] > opponentClanTag[3]) {
        document.getElementById("result").innerHTML = "WIN";
        document.getElementById("result").style.color = "green";
      } else if (newClanTag[3] < opponentClanTag[3]) {
        document.getElementById("result").innerHTML = "LOSE";
        document.getElementById("result").style.color = "red";
      } else if (newClanTag[3] == opponentClanTag[3]) {
        if (newClanTag[4] > opponentClanTag[4]) {
          document.getElementById("result").innerHTML = "WIN";
          document.getElementById("result").style.color = "green";
        } else if (newClanTag[4] < opponentClanTag[4]) {
          document.getElementById("result").innerHTML = "LOSE";
          document.getElementById("result").style.color = "red";
        } else if (newClanTag[4] == opponentClanTag[4]) {
          if (newClanTag[5] > opponentClanTag[5]) {
            document.getElementById("result").innerHTML = "WIN";
            document.getElementById("result").style.color = "green";
          } else if (newClanTag[5] < opponentClanTag[5]) {
            document.getElementById("result").innerHTML = "LOSE";
            document.getElementById("result").style.color = "red";
          } else {
            document.getElementById("result").innerHTML =
              "Check Another Character";
            document.getElementById("result").style.color = "blue";
          }
        }
      }
    } else {
      document.getElementById("result").innerHTML = "LOSE";
      document.getElementById("result").style.color = "red";
    }
  }

  if (Sync === "Low") {
    if (
      (newClanTag[0] > opponentClanTag[0] &&
        newClanTag[1] > opponentClanTag[1]) ||
      (newClanTag[1] > opponentClanTag[1] &&
        newClanTag[2] > opponentClanTag[2]) ||
      (newClanTag[0] > opponentClanTag[0] && newClanTag[2] > opponentClanTag[2])
    ) {
      document.getElementById("result").innerHTML = "LOSE ";
      document.getElementById("result").style.color = "red";
    } else if (
      (newClanTag[0] == opponentClanTag[0] &&
        newClanTag[1] == opponentClanTag[1]) ||
      (newClanTag[1] == opponentClanTag[1] &&
        newClanTag[2] == opponentClanTag[2]) ||
      (newClanTag[0] == opponentClanTag[0] &&
        newClanTag[2] == opponentClanTag[2])
    ) {
      if (newClanTag[3] > opponentClanTag[3]) {
        document.getElementById("result").innerHTML = "LOSE";
        document.getElementById("result").style.color = "red";
      } else if (newClanTag[3] < opponentClanTag[3]) {
        document.getElementById("result").innerHTML = "WIN";
        document.getElementById("result").style.color = "green";
      } else if (newClanTag[3] == opponentClanTag[3]) {
        if (newClanTag[4] > opponentClanTag[4]) {
          document.getElementById("result").innerHTML = "LOSE";
          document.getElementById("result").style.color = "red";
        } else if (newClanTag[4] < opponentClanTag[4]) {
          document.getElementById("result").innerHTML = "WIN";
          document.getElementById("result").style.color = "green";
        } else if (newClanTag[4] == opponentClanTag[4]) {
          if (newClanTag[5] > opponentClanTag[5]) {
            document.getElementById("result").innerHTML = "LOSE";
            document.getElementById("result").style.color = "red";
          } else if (newClanTag[5] < opponentClanTag[5]) {
            document.getElementById("result").innerHTML = "WIN";
            document.getElementById("result").style.color = "green";
          } else {
            document.getElementById("result").innerHTML =
              "Check Another Character";
            document.getElementById("result").style.color = "blue";
          }
        }
      }
    } else {
      document.getElementById("result").innerHTML = "WIN";
      document.getElementById("result").style.color = "green";
    }
  }
}

document.getElementById("sub").addEventListener("click", getData);

document.getElementById("click").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("sub").click();
    console.log("Enter Key was pressed");
  }
});
