<?php
class Task{
    public function __construct($number,$target)
    {
            // sort($number);
            for ($j=0;$j<sizeof($number);$j++)
            {
                for ($k=$j+1;$k<sizeof($number);$k++){
                    if($number[$j]>$number[$k])
                    {
                        $temp=$number[$j];
                        $number[$j]=$number[$k];
                        $number[$k]=$temp;

                    }

                }
            }
            $result= array();
            for($i=0;$i<sizeof($number);$i++)
            {
                if($number[$i]==$target)
                {
                    array_push($result,$i);
                }

            }
            foreach ($result as  $value) {
                echo $value ." ";
            }
        
    }
}
$number=array(1,2,5,2,3,2);
$target=2;
$obj=new Task($number,$target);
?>