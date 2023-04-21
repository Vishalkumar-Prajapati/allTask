<?php
class DeshTarget{
public function __construct($string,$target){
    $strrev=strrev(str_replace('-','',$string));
    // echo "$strrev\n";
    $count=0;
    $str="";
    for ($i=0;$i<strlen($strrev);$i++){

        
        if($count % ($target)==0 && $count!=0){
            $str.="-";
        }
        $str.=$strrev[$i];
        $count++;


    }
    $result=strrev(strtoupper($str));
    echo $result;

}
}
$string=readline("Enter the string :  ");
echo "\n";
$target=readline("Enter the target :  ");
echo "\n";
$obj=new DeshTarget($string,$target);


?>