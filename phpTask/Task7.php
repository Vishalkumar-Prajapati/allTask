<?php

class Task{
public function __construct($number,$target)
{
    for($i=0;$i<sizeof($number);$i++)
    {
        // echo $i;
        for ($j=$i+1;$j<sizeof($number);$j++)
        {
            // echo $j;
            if($number[$i]+$number[$j]==$target){
                echo "[$i,$j]";
                return;

            }


        }

    }

}
    
}
$number=array(3,5,5,3);
$target=8;
$obj=new Task($number,$target);

?>