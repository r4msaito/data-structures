<script type="text/javascript" src="trees/tree.js"></script> 
<script type="text/javascript">
	var tree = new dsBSTree();
	tree.insert(3);
	tree.insert(6);
	tree.insert(2);
	tree.insert(1);
	tree.insert(8);
	tree.insert(5);
	tree.insert(9);
	tree.insert(7);
	tree.insert(100);
	tree.insert(200);
	console.log(JSON.stringify(tree.root));
	console.log(tree.levelOrderTraversal());
</script>