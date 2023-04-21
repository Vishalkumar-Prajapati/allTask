<?php
class Book {
    private $title;
    private $author;
    private $ISBN;
    private $genre;

    public function __construct($title, $author, $ISBN, $genre) {
        $this->title = $title;
        $this->author = $author;
        $this->ISBN = $ISBN;
        $this->genre = $genre;
    }

    public function getTitle() {
        return $this->title;
    }

    public function getAuthor() {
        return $this->author;
    }

    public function getISBN() {
        return $this->ISBN;
    }

    public function getGenre() {
        return $this->genre;
    }
}

class Library {
    private $books = array();

    public function addBook(Book $book) {
        array_push($this->books, $book);
    }

    public function searchBooks($searchTerm, $searchBy) {
        $results = array();
        foreach ($this->books as $book) {
            if ($searchBy == "title") {

                if (strpos(strtolower($book->getTitle()), strtolower($searchTerm)) !== false) {
                    array_push($results, $book);
                }
            }
            else if ($searchBy == "author") {
                if (strpos(strtolower($book->getAuthor()), strtolower($searchTerm)) !== false) {
                    array_push($results, $book);
                }
            }
            else if ($searchBy == "ISBN") {
                if (strpos(strtolower($book->getISBN()), strtolower($searchTerm)) !== false) {
                    array_push($results, $book);
                }
            }
            else if ($searchBy == "genre") {
                if (strpos(strtolower($book->getGenre()), strtolower($searchTerm)) !== false) {
                    array_push($results, $book);
                }
            }
        }
        return $results;
    }
}

$library = new Library();
$book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Fiction");
$book2 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "9780345391803", "Science Fiction");
$book3 = new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789", "Fiction");
$book4 = new Book("The Lean Startup", "Eric Ries", "9780307887894", "Business");

$library->addBook($book1);
$library->addBook($book2);
$library->addBook($book3);
$library->addBook($book4);

$results = $library->searchBooks("to", "title");
foreach ($results as $result) {
    echo $result->getTitle() . " by " . $result->getAuthor() . "<br>";
}

?>
