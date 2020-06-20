async function getData() {
  const ClanTag = document.getElementById("clanTag").value;
  const newClanTag = ClanTag.replace("#", "");
  const url = `https://clash.clashperk.xyz/v1/clans/%23${newClanTag}/currentwar`;

  const data = await fetch(url, { method: "GET" }).then((res) => res.json());

  const opponentClanTag = data.opponent.tag.replace("#", "");
  var opponentClanTag2 = data.opponent.tag.replace(/#/g, "");
  opponentClanTag2 = data.opponent.tag.replace("0", "O");
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
  if (Sync === "---") {
    alert("Please select Sync type");
  }
  if (Character === "---") {
    alert("Please select the character to be compared with");
  }
  if (Sync === "زیاد") {
    if (newClanTag[Character - 1] === opponentClanTag2[Character]) {
      alert(
        "Please Select another character....Since both the characters are equal"
      );
    } else {
      newClanTag[Character - 1] > opponentClanTag2[Character]
        ? ((document.getElementById("result").innerHTML = "پیروزی "),
          (document.getElementById("result").style.color = "green"))
        : ((document.getElementById("result").innerHTML = "باخت"),
          (document.getElementById("result").style.color = "red"));
    }
  }
  if (Sync === "کم") {
    if (newClanTag[Character - 1] === opponentClanTag2[Character]) {
      alert(
        "Please Select another character....Since both the characters are equal"
      );
    } else {
      newClanTag[Character - 1] > opponentClanTag2[Character]
        ? ((document.getElementById("result").innerHTML = "باخت"),
          (document.getElementById("result").style.color = "red"))
        : ((document.getElementById("result").innerHTML = "پیروزی"),
          (document.getElementById("result").style.color = "green"));
    }
  }
}

document.getElementById("sub").addEventListener("click", getData);
