const BinarySearchTree = require('./BinaryTree')

//3 Find a book
/*
001-099 
100-199
200-299
...
given Dewey number and book Title
binary search using Dewey number on all Dewey numbers
binary search using authors name within Dewey subsect
linear search of all books written by author in Dewey subsect
*/

//4
// 14,19,15,27,25,79,90,91,89,35
// 5,6,7,8,9,10,11







function main (){
  const BST = new BinarySearchTree();
  BST.insert(25);
  BST.insert(15);
  BST.insert(50);
  BST.insert(10);
  BST.insert(24);
  BST.insert(35);
  BST.insert(70);
  BST.insert(4);
  BST.insert(12);
  BST.insert(18);
  BST.insert(31);
  BST.insert(44);
  BST.insert(66);
  BST.insert(90);
  BST.insert(22);
  console.log(BST.preOrder())
}
main();