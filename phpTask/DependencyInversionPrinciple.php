<?php
//high level module should not depend on low level module
interface BankCard
{
    public function payment();
    
}
class CreditCard implements BankCard
{
    public function payment(){
        echo "you can pay via Credit card\n";
    }

}
class DebitCard implements BankCard
{
    public function payment(){
        echo "you can pay via Debit card\n";
    }

}

class Shopping 
{
    private BankCard $bankCard;

    public function __construct(BankCard $bankCard)
    {
        $this->bankCard=$bankCard;
    }
    public function DoTransection()
    {
        $this->bankCard->payment();
    }


}
$bankCard = new CreditCard();
$shopping=new Shopping($bankCard);
$shopping->DoTransection(); 
?>