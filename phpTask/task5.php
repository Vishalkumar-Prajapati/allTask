<?php
class Product {
    private $name;
    private $price;
    private $quantity;

    public function __construct($name, $price, $quantity) {
        $this->name = $name;
        $this->price = $price;
        $this->quantity = $quantity;
    }

    public function getName() 
    {
        return $this->name;
    }

    public function getPrice() 
    {
        return $this->price;
    }

    public function getQuantity() 
    {
        return $this->quantity;
    }
}

class ShoppingCart {
    private $products;

    public function __construct() 
    {
        $this->products = array();
    }

    public function addProduct(Product $product) 
    {
        array_push($this->products, $product);
    }

    public function removeProduct($index) {
        unset($this->products[$index]);
    }

    public function getProducts() {
        return $this->products;
    }
}
$obj1=new Product("Bag",123,1);
$obj2=new Product("pen",12,3);
$object=new ShoppingCart();

$object->addProduct($obj1);
$object->addProduct($obj2);
$object->removeProduct(1);
$print=$object->getProducts();
print_r($print);


?>
