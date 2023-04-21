<?php
class Difference{
public function __construct(){
    $num=(readline("Enter the number"));
    $arr=str_split($num);
    $even=0;
    $odd=0;
    for ($i=0;$i<sizeof($arr);$i++){
        if($i%2==0)
        {
            $odd=$odd+(int)$arr[$i];
        }
        else{
            $even=$even+(int)$arr[$i];
        }
        
        
    }
    
    echo "odd - even =  ".$odd-$even;

}
}
$obj=new Difference();
?>