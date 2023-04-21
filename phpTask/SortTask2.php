<?php
class SelectionSort{
    public function sortArray($arr){
        for ($i=0;$i<sizeof($arr)-1;$i++){
            $index=$i;
            for ($j=$i+1;$j<sizeof($arr);$j++){
                if($arr[$index]>$arr[$j]){
                    $index=$j;
                    
                }
            }
            $temp=$arr[$index];
            $arr[$index]=$arr[$i];
            $arr[$i]=$temp;
        }
        return $arr;
        // print_r($arr) ;

    }
}
$obj = new SelectionSort();
$arr=array();
for ($k=0;$k<2000;$k++){
    array_push($arr,rand(1,2000));
}
$start_time = microtime(true);
$array=$obj->sortArray($arr);
$end_time = microtime(true);
$execution_time = ($end_time - $start_time);
echo " Execution time of Selection sort script = ".$execution_time." sec";

?>