<?php
class BookSeat{
    public $array= array(
        ['A','B','C','D'],
        ['A','B','C','D'],
        ['A','B','C','D'],
        ['A','B','C','D'],
        ['A','B','C','D'],
        ['A','B','C','D'],
        ['A','B','C','D']
    );
    public $count=0;
    public function __construct()
    {
        
        $t=True;
        while($t!=False){
            $this->display();

            $seatNum=readline("Enter the Seat Number Like 'NumberAlphabet' ex.'1b' :");
            
            echo "\n";
            $seatArray=str_split($seatNum);
            if((int)$seatArray[0]==8){
                $this->display();
                echo "Total booked seat:".($this->count)."\n";
                break;
            }
            echo "Enter the 8 number for stop booking seat\n";
            if(count($seatArray)!=2){
                echo "Enter the valid Seat number Like 'NumberAlphabet'\n";

            }
            else{
                

            }
            echo "Remaining seat  :".(28-$this->count)."\n";
            
            
        }

    }
    
    public function seatSet($seatRow,$seatCol)
    {
        if($this->array[$seatRow][$seatCol]!=="x"){
            $this->array[$seatRow][$seatCol]="x";
            $this->count++;

        }
        else{
            echo "this seat is already booked\n";
        }

        
    }
public function display()
{
    for ($i=0;$i<7;$i++){
            echo $i+1 ." ".$this->array[$i][0] ." ".$this->array[$i][1]." ". $this->array[$i][2]." ". $this->array[$i][3] ."\n";
    }
}
}
$obj=new BookSeat();
?>