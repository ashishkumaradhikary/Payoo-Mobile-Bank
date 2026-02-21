function showOnly(id) {
    let addMoney = document.getElementById("add-money");
    let cashOut = document.getElementById("cash-out");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");

    let selected = document.getElementById(id);
    selected.classList.remove("hidden");
}