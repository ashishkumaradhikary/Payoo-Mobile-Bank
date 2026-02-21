document.getElementById('btn-withdraw').addEventListener('click', function(){
    let agentNumber = document.getElementById('agent-number').value;
    let cashoutAmount = document.getElementById('cashout-amount').value;
    let balance = document.getElementById('balance');
    let availableBalance = Number(balance.innerText);
    let curentBalance = Number(availableBalance) - Number(cashoutAmount);
    if(curentBalance < 0){
        alert('Invalid Amount')
        return;
    }
    let pin = document.getElementById('cashout-pin').value;
    if(pin == '1234'){
        alert('Cashout Successfull')
        balance.innerText = curentBalance;
        document.getElementById('agent-number').value = '';
        cashoutAmount = document.getElementById('cashout-amount').value = '';
        pin = document.getElementById('cashout-pin').value = '';
    } else {
        alert('Wrong PIN')
        return;
    }
})

