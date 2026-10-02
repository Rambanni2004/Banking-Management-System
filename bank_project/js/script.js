let account = {
    name: "RAMBANNI",
    ifsc: "SBIN001423",
    number: 140910100059979,
    balance: 0,
    transactions: []
};

function updateDisplay() {
    document.getElementById("name").textContent = account.name;
    document.getElementById("acc-num").textContent = account.number;
    document.getElementById("ifsc").textContent = account.ifsc;
    document.getElementById("balance").textContent = account.balance;
}

function deposit() {
    let amount = parseInt(prompt("Enter Amount for Deposit:"));
    if (amount > 0) {
        account.balance += amount;
        account.transactions.push(`Deposited: ${amount}`);
        updateDisplay();
        alert(`Deposited Amount ${amount}\nTotal Balance ${account.balance}`);
    } else {
        alert("Deposit amount must be greater than $1");
    }
}

function withdraw() {
    let amount = parseInt(prompt("Enter Amount for Withdraw:"));
    if (amount <= account.balance && amount > 0) {
        account.balance -= amount;
        account.transactions.push(`Withdrawn: ${amount}`);
        updateDisplay();
        alert(`Withdrawal successful Amount of ${amount}. Remaining balance: ${account.balance}`);
    } else {
        alert("Insufficient funds or invalid amount");
    }
}

function enquiry() {
    alert(`Name of Account Holder: ${account.name}\nAccount Number: ${account.number}\nIFSC Code: ${account.ifsc}\nBank Balance: ${account.balance}`);
}

function showTransactions() {
    if (account.transactions.length > 0) {
        alert("Transaction History:\n" + account.transactions.join("\n"));
    } else {
        alert("No transactions yet.");
    }
}

updateDisplay();
