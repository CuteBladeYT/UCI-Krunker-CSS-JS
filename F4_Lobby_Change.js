document.addEventListener("keyup", (event) => {
  if (localStorage["uci_changeLobbyKey"]) {} else {
    localStorage["uci_changeLobbyKey"] = "F4";
  };
  if (localStorage["uci_changeLobbyKey"] == "") {
    localStorage["uci_changeLobbyKey"] = "F4";
  };

  let clk = localStorage["uci_changeLobbyKey"];
  let pk = event.key;
  if (pk == clk) {
    window.location.href = "https://krunker.io/";
  };
})
