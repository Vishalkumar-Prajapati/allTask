<?php
class  Bank
{
    public $account=array();
    public function __construct(){
        $t=True;
        $i=0;
        while($t!=False){
            echo "Welcome sir!!!\n";
            echo "------Main Menu------\n";
            echo "Enter 1 for Open new account\n";
            echo "Enter 2 for switch account\n";
            echo "Enter 3 for search account\n";
            $menu=(int)readline();
            switch ($menu) {
                case 1:
                    $objAccountOpen=new AccountOpen();
                    $this->account[]=array($objAccountOpen);
                    break;
                case 2:
                    $n=(int)readline("Enter 0,1");
                    $this->switchAccount($this->account[$n]);
                    break;
                case 3:
                    
                    break;
                
                default:
                    
                    echo " Please ! Enter the value bitween 1 to 3\n";
                    break;
            }
        }
        
    }
    public function switchAccount($accountNumber) {
        if ($accountNumber < 1 || $accountNumber > count($this->accounts)) {
            echo "Invalid account number.\n";
            return;
        }
        $this->currentAccount = $this->accounts[$accountNumber - 1];
        echo "Account switched successfully.\n";
    }


}
class AccountOpen
{
    public $acNumber;
    public $name;
    public function __construct(){
        echo "-----Account Open Menu------\n";
        $this->name=readline("enter your name:  ");
        echo "\n";
        $t=True;
        while($t!=False){
            $type=readline("enter account type 1: for current 2: for saving ");
            switch ($type) {
                case 1:
                    $acType="current";
                    $t=False;
                    break;
                case 2:
                    $acType="saving";
                    $t=False;
                    break;
                
                default:
                    echo "Enter the valid number  1 or 2:\n";
                    break;
            }

        }
        
        echo "\n";
        $mobileNum=readline("Enter your mobile number:  ");
        echo "\n";
        $this->acNumber=$this->random_num();
        echo "Congratulation! your account opened successfully\n";
        $objAccountDetail=new AccountData($this->name,$this->acNumber,$mobileNum,$acType);
    }
    public function random_num ()
    {
        $len=10;
        $ch = "0123456789";
        $l = strlen ($ch) - 1;
        $str = "";
        for ($i=0; $i < $len; $i++)
        {
            $x = rand (0, $l);
            $str .= $ch[$x];
        }
        return $str;
    }
}
class AccountData{
    public $name;
    public $acNumber;
    public $mobileNum;
    public $acType;
    public $balance;
    public $transaction=array();
    public function __construct($name,$acNumber,$mobileNum,$acType)
    {
        $this->name=$name;
        $this->acNumber=$acNumber;
        $this->mobileNum=$mobileNum;
        $this->acType=$acType;
        $this->balance=0;
        $this->transactions[] = array('type' => 'Opening Balance', 'amount' => 0, 'balance' => 0);
        $this->transactions();
    }
    public function transactions(){
        $t=True;
        while($t!=False){
            echo "-------Transaction Menu--------\n";
            echo "Enter 1 for Deposit\n";
            echo "Enter 2 for Withdraw\n";
            echo "Enter 3 for View Statement\n";
            echo "Enter 4 for view Account info\n";
            echo "Enter 5 for Main menu\n";
            $num=(int)readline();
            switch ($num) {
                case 1:
                    echo "Enter the amount to Credit: ";
                    $credit=(int)readline();
                    echo "\n";
                    $this->deposit($credit);

                    break;
                case 2:
                    echo "Enter the amount to Debit: ";
                    $debit=(int)readline();
                    echo "\n";
                    $this->withdraw($debit);
                    break;
                case 3:
                    $this->viewStatement();
                    break;
                case 4:
                    $this->viewInfo();
                    break;
                case 5:
                    $t=False;
                    break;
                
                default:
                    echo "Enter the valid number\n";
                    break;
            }
    
        }
        // vishal
    }
        public function deposit($amount){
            $this->balance+=$amount;
            echo "your balance is: ".$this->balance."\n";
            $this->transactions[] = array('type' => 'Credit', 'amount' => $amount, 'balance' => $this->balance);
    
        }
        public function withdraw($amount){
            if ($amount<=$this->balance){
                $this->balance-=$amount;
                echo "your balance is: ".$this->balance."\n";
                $this->transactions[] = array('type' => 'Debit', 'amount' => $amount, 'balance' => $this->balance);
            }
            else{
                echo "insufficient balance !!!\n";
            }
        }
        public function viewInfo(){
            echo "Your account details:\n";
            echo "Name:  ".$this->name."\n";
            echo "Account number:  ".$this->acNumber."\n";
            echo "Mobile number:  ".$this->mobileNum."\n";
            echo "Account Type:  ".$this->acType."\n";
            echo "Balance:  ".$this->balance."\n";
        }
        public function viewStatement(){
                echo "Account Statement for Account Number: " . $this->acNumber . "\n";
                foreach($this->transactions as $transaction) {
                  echo "type  ".$transaction['type'] . "  amount". $transaction['amount'] . "  balance" . $transaction['balance'] . "\n";
                }
        }
        
        

}




$objBank=new Bank();
?>