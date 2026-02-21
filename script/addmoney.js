document.getElementById('btn-cash-in').addEventListener('click', function(){
    let bankName = document.getElementById('bank-name').value;
    if(bankName == 'Select a Bank'){
        alert('Please! Select a Bank')
        return;
    }
    let accountNumber = document.getElementById('cash-in-number').value;
    let cashInAmountElement = document.getElementById('cash-in-amount').value;
    let balance = document.getElementById('balance');
    let balanceElement = Number(balance.innerText);
    let newBalance = Number(cashInAmountElement) + Number(balanceElement);

    let pin = document.getElementById('cash-in-pin').value;
    if(pin == '1234'){
        alert('Add Money Successfull')
        balance.innerText = newBalance;
        bankName = document.getElementById('bank-name').value = '';
        document.getElementById('cash-in-number').value = '';
        document.getElementById('cash-in-amount').value = '';
        pin = document.getElementById('cash-in-pin').value = '';

    }else{
        alert('Wrong PIN')
        return;
    }


})