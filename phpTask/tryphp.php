<?php

class Account {
    private $name;
    private $type;
    private $balance;
    private $transactions = [];

    public function __construct($name, $type, $initialBalance) {
        $this->name = $name;
        $this->type = $type;
        $this->balance = $initialBalance;
        $this->addTransaction($initialBalance, 'Initial balance');
    }

    public function addMoney($amount) {
        $this->balance += $amount;
        $this->addTransaction($amount, 'Deposit');
    }

    public function withdrawMoney($amount) {
        if ($amount > $this->balance) {
            echo "Insufficient balance.\n";
            return;
        }
        $this->balance -= $amount;
        $this->addTransaction(-$amount, 'Withdrawal');
    }

    public function accountStatement() {
        echo "Account statement for {$this->name}:\n";
        foreach ($this->transactions as $transaction) {
            $amount = $transaction['amount'];
            $type = $transaction['type'];
            $date = $transaction['date'];
            echo " - $type: $amount, Date: $date\n";
        }
    }

    public function viewAccountInfo() {
        echo "Account information for {$this->name}:\n";
        echo " - Account type: {$this->type}\n";
        echo " - Balance: {$this->balance}\n";
    }

    private function addTransaction($amount, $type) {
        $this->transactions[] = [
            'amount' => $amount,
            'type' => $type,
            'date' => date('Y-m-d H:i:s')
        ];
    }
}

class Bank {
    private $accounts = [];
    private $currentAccount = null;

    public function openAccount($name, $type, $initialBalance) {
        $account = new Account($name, $type, $initialBalance);
        $this->accounts[] = $account;
        $this->currentAccount = $account;
        echo "Account opened successfully. Account number is " . count($this->accounts) . "\n";
    }

    public function addMoney($amount) {
        $this->currentAccount->addMoney($amount);
    }

    public function withdrawMoney($amount) {
        $this->currentAccount->withdrawMoney($amount);
    }

    public function accountStatement() {
        $this->currentAccount->accountStatement();
    }

    public function viewAccountInfo() {
        $this->currentAccount->viewAccountInfo();
    }

    public function switchAccount($accountNumber) {
        if ($accountNumber < 1 || $accountNumber > count($this->accounts)) {
            echo "Invalid account number.\n";
            return;
        }
        $this->currentAccount = $this->accounts[$accountNumber - 1];
        echo "Account switched successfully.\n";
    }

    public function searchAccount($query) {
        $matches = [];
        foreach ($this->accounts as $i => $account) {
            if (strpos($account->name, $query) !== false || $i + 1 == $query) {
                $matches[] = $i + 1;
            }
        }
        if (count($matches) == 0) {
            echo "No matches found.\n";
            return;
        }
        echo "Matches found: " . implode(', ', $matches) . "\n";
    }
}

// Example usage
$bank = new Bank();

$bank->openAccount('Alice','current'
