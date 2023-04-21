<?php
class QuickSort {
    private $array;

    public function sort(array $array) {
        $this->array = $array;
        $this->quickSort(0, count($this->array) - 1);
        return $this->array;
    }

    private function quickSort($left, $right) {
        if ($left < $right) {
            $pivotIndex = $this->partition($left, $right);
            $this->quickSort($left, $pivotIndex - 1);
            $this->quickSort($pivotIndex + 1, $right);
        }
    }

    private function partition($left, $right) {
        $pivotValue = $this->array[$right];
        $pivotIndex = $left;
        for ($i = $left; $i < $right; $i++) {
            if ($this->array[$i] < $pivotValue) {
                $temp = $this->array[$i];
                $this->array[$i] = $this->array[$pivotIndex];
                $this->array[$pivotIndex] = $temp;
                $pivotIndex++;
            }
        }
        $temp = $this->array[$right];
        $this->array[$right] = $this->array[$pivotIndex];
        $this->array[$pivotIndex] = $temp;
        return $pivotIndex;
    }
}
$arr=array();
for ($k=0;$k<2000;$k++){
    array_push($arr,rand(1,2000));
}
$quickSort = new QuickSort();
$start_time = microtime(true);
$sortedArray = $quickSort->sort($arr);
$end_time = microtime(true);
$execution_time = ($end_time - $start_time);
echo " Execution time of Quick sort script = ".$execution_time." sec";
// print_r($sortedArray);

?>