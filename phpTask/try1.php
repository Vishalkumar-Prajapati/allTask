<?php

// Define a class for Bank Account
class BankAccount {

  private $account_number;
  private $account_name;
  private $account_type;
  private $balance;
  private $transactions = array();

  // Constructor to initialize account details
  public function __construct($account_number, $account_name, $account_type, $initial_balance) {
    $this->account_number = $account_number;
    $this->account_name = $account_name;
    $this->account_type = $account_type;
    $this->balance = $initial_balance;
    $this->transactions[] = array('type' => 'Opening Balance', 'amount' => $initial_balance, 'balance' => $initial_balance);
  }

  // Function to add money to the account
  public function addMoney($amount) {
    $this->balance += $amount;
    $this->transactions[] = array('type' => 'Credit', 'amount' => $amount, 'balance' => $this->balance);
  }

  // Function to withdraw money from the account
  public function withdrawMoney($amount) {
    if($this->balance >= $amount) {
      $this->balance -= $amount;
      $this->transactions[] = array('type' => 'Debit', 'amount' => $amount, 'balance' => $this->balance);
    }
    else {
      echo "Insufficient balance";
    }
  }

  // Function to display account statement
  public function accountStatement() {
    echo "<h2>Account Statement for Account Number: " . $this->account_number . "</h2>";
    echo "<table border='1'>";
    echo "<tr><th>Type</th><th>Amount</th><th>Balance</th></tr>";
    foreach($this->transactions as $transaction) {
      echo "<tr><td>" . $transaction['type'] . "</td><td>" . $transaction['amount'] . "</td><td>" . $transaction['balance'] . "</td></tr>";
    }
    echo "</table>";
  }

  // Function to display account information
  public function accountInfo() {
    echo "<h2>Account Information for Account Number: " . $this->account_number . "</h2>";
    echo "<p>Account Name: " . $this->account_name . "</p>";
    echo "<p>Account Type: " . $this->account_type . "</p>";
    echo "<p>Account Balance: " . $this->balance . "</p>";
  }

  // Function to switch to a different account
  public function switchAccount($account_number) {
    // logic to switch to a different account
  }

}

// Sample usage
$account1 = new BankAccount('1001', 'John Smith', 'Savings', 1000);

// Add some money
$account1->addMoney(500);

// Withdraw some money
$account1->withdrawMoney(200);

// Display account statement
$account1->accountStatement();

// Display account information
$account1->accountInfo();

?>
