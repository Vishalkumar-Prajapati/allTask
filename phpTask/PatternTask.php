<?php
class Pattern
{
    public function __construct($num){
        for ($i=1;$i<$num-1;$i++){
            $this->first($i,$num);
            echo "\n";
            

        }
        for ($i=$num-1;$i>0;$i--){
            $this->first($i,$num);
            echo "\n";
            

        }

    }
public function first($i,$num){
    for ($j=1;$j<=$i;$j++){
        echo "*";
    }
    for ($a=($num*2)-(2*$i);$a>0;$a--){
        echo " ";
    }
    for ($j=1;$j<=$i;$j++){
        echo "*";
    }
}
}
$num=readline("Enter the number");
$obj=new Pattern($num);


?>