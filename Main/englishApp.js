async function getData() {
  const ClanTag = document.getElementById("clanTag").value;
  var newClanTag = ClanTag.replace("#", "");
  newClanTag = ClanTag.replace("0", "O");
  console.log("Player Clan Fetch Successful");
  const url = `https://clash.clashperk.xyz/v1/clans/%23${newClanTag}/currentwar`;

  const data = await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => (document.getElementById("result").innerHTML = err));

  const opponentClanTag = data.opponent.tag.replace("#", "");
  var opponentClanTag2 = data.opponent.tag.replace(/0/g, "O");
  console.log("Opponent Clan fetch successful");

  const url2 = `https://clash.clashperk.xyz/v1/clans/%23${opponentClanTag}`;
  const data2 = await fetch(url2, { method: "GET" }).then((res) => res.json());
  document.getElementById("opponentDescription").innerHTML = data2.description;
  document.getElementById("opponentMembers").innerHTML = data2.members;
  document.getElementById("opponentTag").innerHTML = opponentClanTag2;
  document.getElementById("opponentName").innerHTML = data.opponent.name;
  document.getElementById("link").innerHTML = "(CC Status)";

  document.getElementById(
    "link"
  ).href = `https://kuilin.net/cc_n/clan.php?tag=${opponentClanTag}`;

  const Character = document.getElementById("character").value;
  const Sync = document.getElementById("sync").value;
  if (Sync === "---" || Character === "---") {
    alert("Missing Sync / Character Type");
  }

  if (Sync === "High") {
    if (newClanTag[Character - 1] === opponentClanTag2[Character]) {
      alert(
        "Please Select another character....Since both the characters are equal"
      );
    } else {
      newClanTag[Character - 1] > opponentClanTag2[Character]
        ? ((document.getElementById("result").innerHTML = "WIN "),
          (document.getElementById("result").style.color = "green"))
        : ((document.getElementById("result").innerHTML = "LOSE"),
          (document.getElementById("result").style.color = "red"));
    }
  }
  if (Sync === "Low") {
    if (newClanTag[Character - 1] === opponentClanTag2[Character]) {
      alert(
        "Please Select another character....Since both the characters are equal"
      );
    } else {
      newClanTag[Character - 1] > opponentClanTag2[Character]
        ? ((document.getElementById("result").innerHTML = "LOSE"),
          (document.getElementById("result").style.color = "red"))
        : ((document.getElementById("result").innerHTML = "WIN"),
          (document.getElementById("result").style.color = "green"));
    }
  }
}

document.getElementById("sub").addEventListener("click", getData);
