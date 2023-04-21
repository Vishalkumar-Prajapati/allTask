<?php
class MergeSort
{
    public function sort(array $arr): array
    {
        if (count($arr) <= 1) {
            return $arr;
        }

        $mid = (int) (count($arr) / 2);
        $left = array_slice($arr, 0, $mid);
        $right = array_slice($arr, $mid);

        $left = $this->sort($left);
        $right = $this->sort($right);

        return $this->merge($left, $right);
    }

    private function merge(array $left, array $right): array
    {
        $result = [];
        $i = 0;
        $j = 0;

        while ($i < count($left) && $j < count($right)) {
            if ($left[$i] < $right[$j]) {
                $result[] = $left[$i++];
            } else {
                $result[] = $right[$j++];
            }
        }

        while ($i < count($left)) {
            $result[] = $left[$i++];
        }

        while ($j < count($right)) {
            $result[] = $right[$j++];
        }

        return $result;
    }
}
$mergeSort = new MergeSort();
$arr=array();
for ($k=0;$k<2000;$k++){
    array_push($arr,rand(1,2000));
}
$start_time = microtime(true);
$sortedArray = $mergeSort->sort($arr);
$end_time = microtime(true);
$execution_time = ($end_time - $start_time);
echo " Execution time of Merge Sort script = ".$execution_time." sec";
// print_r($sortedArray);
?>