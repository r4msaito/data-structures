<script type="text/javascript" src="linked-list/linked-list.js"></script>
<script type="text/javascript">
	var a = new dsLinkedList();
	a.insert(1);
	a.insert(2);
	a.insert(3);
	a.insert(3, 2);	
	a.insert(4, 2);
	a.insert(5, 1);
	console.log(a.getAll());
	a.delete(3);
	console.log(a.getAll());
</script>