<?php
class  Bank
{
    public $accountName=array();
    public $accountAcNum=array();
    public $nameArray=array();
    public $acArray=array(0);
    public $name;
    public $acNumber;
    public function __construct(){
        $t=True;
        $i=0;
        while($t!=False){
            echo "Welcome sir!!!\n";
            echo "------Main Menu------\n";
            echo "Enter 1 for Open new account\n";
            echo "Enter 2 for switch account\n";
            echo "Enter 3 for search account\n";
            echo "Enter 4 for view Details of all account \n";
            echo "Enter 5 for Transfer amount to the othe account \n";
            echo "Enter 6 for quit\n";
            $menu=(int)readline();
            switch ($menu) {
                case 1:
                    echo "-----Account Open Menu------\n";
                    $this->name=readline("enter your name:  ");
                    $this->nameArray[]=$this->name;
                    echo "\n";
                    $T=True;
                    while($T!=False){
                        $type=readline("enter account type 1: for current 2: for saving ");
                        switch ($type) {
                            case 1:
                                $acType="current";
                                $T=False;
                                break;
                            case 2:
                                $acType="saving";
                                $T=False;
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
                    $this->acArray[]=$this->acNumber;
                    echo "Congratulation! your account opened successfully\n";
                    $objAccountDetail=new AccountData($this->name,$this->acNumber,$mobileNum,$acType);
                    
                    // $objAccountOpen=new AccountOpen();
                    $this->accountName[$this->name]=$objAccountDetail;
                    $this->accountAcNum[$this->acNumber]=$objAccountDetail;
                    // print_r($this->accountName);
                    break;
                case 2:
                    $n=readline("Enter Ac number:");
                    // $this->accountAcNum[$n]->transactions();
                    // $this->accountAcNum[$n]->transactions();
                    // echo array_search($n,$this->acArray)."\n";
                    if (array_search($n,$this->acArray)!=null){
                        $this->accountAcNum[$n]->transactions();
                    }
                    else{
                        echo "Not Avilable....\n";
                    }
                    break;
                case 3:
                    $nameSearch=readline("Enter Ac number:");
                    if (array_search($nameSearch,$this->acArray)!=null){
                        echo "Yes! Avilable.....\n";
                        $this->accountAcNum[$nameSearch]->transactions();
                    }
                    else{
                        echo "Not Avilable....\n";
                    }
                    break;
                case 4:
                    foreach($this->accountName as $key=>$value) {
                        $value->viewInfo();
                      }
                    break;
                case 5:
                    $ac1=readline("Enter the first Account number :");
                    echo "\n";
                    $ac2=readline("Enter the second Account number :");
                    echo "\n";
                    $money=readline("Enter the money:");
                    echo "\n";
                    if ((array_search($ac1,$this->acArray)!=null)){
                        echo " first Account ! Avilable.....\n";
                        if(array_search($ac2,$this->acArray)!=null){
                            echo " second Account ! Avilable.....\n";
                            $result=$this->accountAcNum[$ac1]->withdrawMoney($money);
                        if ($result===True){
                            $this->accountAcNum[$ac2]->addMoney($money);
                        }
                        }else{
                            echo " Second Account Not Avilable....\n";
                        }
    
                        
                    }
                    else{
                        echo " First Account Not Avilable....\n";
                    }

                    break;
                case 6:
                    $t=False;
                    break;
                default:
                    echo " Please ! Enter the value bitween 1 to 3\n";
                    break;
            }
        }
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
    public $transactions=[];
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
        $t=true;
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
                  echo "type  ".$transaction['type'] . "  amount  ". $transaction['amount'] . "  balance  " . $transaction['balance'] . "\n";
                }
        }
        public function withdrawMoney($money){
            if ($money<=$this->balance){
                $this->balance-=$money;
                // echo "your balance is: ".$this->balance."\n";
                $this->transactions[] = array('type' => 'Transfered', 'amount' => $money, 'balance' => $this->balance);
                return True;
            }
            else{
                echo "insufficient balance !!!\n";
                return False;
            }
        }
        public function addMoney($money){
            $this->balance+=$money;
            // echo "your balance is: ".$this->balance."\n";
            $this->transactions[] = array('type' => 'Received', 'amount' => $money, 'balance' => $this->balance);
    
        }
}
$objBank=new Bank();
?>