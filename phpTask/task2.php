<?php
// class Bank_Account
// {
//     public $account_no;
//     public $account_bal;
//     public function __construct($account_no,$account_bal){
//         this->$account_no=$account_no;
//         this->$account_bal=$account_bal;
        
//     }
//     public function get_No(){
//         return $account_no;
//     }
//     public function get_Bal(){
//         return $account_bal;
//     }
    
//}
class Calculate //extends Bank_Account
{
    public function Deposit ($balance,$deposit) 
    {
        $total=$balance+$deposit;
        return $total;
    }
    public function Withdraw($balance,$withdraw)
    {
        $total;
        if ($balance>=$withdraw){
          $total=$balance-$withdraw;
          return $total;
        }
        else{
            echo "your balance is insufficient !";
            return $balance;
        }
    }
    public function CheckBalance($balance)
    {
        echo "your current balance is {$balance}";
    }
}
$obj=new Calculate();
$bal=(int)readline("Enter the balance : ");
$num=(int)readline("Enter the :
    1 for diposit,
    2 for withdraw
    ");
if ($num==1){
    $deposit=(int)readline("Enter the deposit ammount : ");
    $bal=$obj->Deposit($bal,$deposit);
    $obj->CheckBalance($bal);
}
else if ($num==2){
    $withdraw=(int)readline("Enter the withdraw ammount : ");
    $bal=$obj->Withdraw($bal,$withdraw);
    $obj->CheckBalance($bal);
    
}




?>