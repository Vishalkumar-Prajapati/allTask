<?php
class Insertion
{
    public function sortArray($arr): array{
        for($i=1;$i<sizeof($arr);$i++){
            $key=$arr[$i];
            $j=$i-1;
            while($j>=0 && $arr[$j]>$key){
                $arr[$j+1]=$arr[$j];
                $j--;
            }
            $arr[$j+1]=$key;
            
        }
        return $arr;

    }

}
$arr=[];
for ($k=0;$k<2000;$k++){
    array_push($arr,rand(1,2000));
}
$obj=new Insertion();

// print_r($arr);
$start_time = microtime(true);
$array=$obj->sortArray($arr);
$end_time = microtime(true);
$execution_time = ($end_time - $start_time);

echo " Execution time of insertion sort script = ".$execution_time." sec";

// print_r($array);


?>