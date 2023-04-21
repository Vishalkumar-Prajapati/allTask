<?php
class BubbleSort{
    public function sortArray($arr):array{
        for ($i=0;$i<sizeof($arr)-1;$i++){
            for ($j=0;$j<sizeof($arr)-$i-1;$j++){
                if($arr[$j]>$arr[$j+1]){
                    $temp=$arr[$j];
                    $arr[$j]=$arr[$j+1];
                    $arr[$j+1]=$temp;
                }
            }
        }
        return $arr;
       
        // print_r($arr) ;

    }
}
$obj = new BubbleSort();
$arr=array();
for ($k=0;$k<2000;$k++){
    array_push($arr,rand(1,2000));
}
$start_time = microtime(true);
$array=$obj->sortArray($arr);
$end_time = microtime(true);
$execution_time = ($end_time - $start_time);

echo " Execution time of Bubble sort script = ".$execution_time." sec";

?>