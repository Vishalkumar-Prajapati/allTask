<?php
class MergeSort
{
    public function conquer($array,$si,$mid,$ei){
        $merged=array();
        $idx1=$si;
        $idx2=$mid+1;
        $x=0;
        while($idx1<=$mid && $idx2<=$ei){
            if($array[$idx1]<=$array[$idx2]){
                $merged[$x++]=$array[$idx1++];
            }
            else {
                $merged[$x++]=$array[$idx2++];
            }
        }
        while($idx1<=$mid){
            $merged[$x++]=$array[$idx1++];

        }
        while ($idx2<=$ei) {
            $merged[$x++]=$array[$idx2++];
        }
        for ($i=0,$j=$si;$i<sizeof($merged);$i++,$j++){
            $array[$j]=$merged[$i];
        }
        return $merged;
        


    }
    public function divide($array,$si,$ei){
        if($si>=$ei){
            return;
        }
        $mid=(int)($si+$ei)/2;
        $this->divide($array,$si,$mid);
        $this->divide($array,$mid+1,$ei);
        $merged=$this->conquer($array,$si,$mid,$ei);
        return $merged;

    }



}
$obj = new MergeSort();
$arr=array();
for ($k=0;$k<10;$k++){
    array_push($arr,rand(1,1000));
}
$length=count($arr);
$arr=$obj->divide($arr,0,$length-1);
print_r($arr);
?>