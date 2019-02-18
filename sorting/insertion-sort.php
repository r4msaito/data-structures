<script type="text/javascript">
	function insertionSort(arr) {
		var sorted = [];
		sorted.push(arr[0]);

		for (var i = 0; i < arr.length - 1; i++) {
			var pickFromIdx = i + 1;
			var sortedLength = sorted.length;
			var slotFound = false;

			for(var j = 0; j < sortedLength; j++) {

				if(arr[pickFromIdx] <= sorted[j]) {
					slotFound = true;

					for (var x = sortedLength - 1; x >= j; x--) {
						sorted[x + 1] = sorted[x];

					}	

					sorted[j] = arr[pickFromIdx];
					break;
				}

				if(!slotFound)
					sorted[sortedLength] = arr[pickFromIdx];
			}
		}

		return sorted;
	}

	console.log(insertionSort([5,4,39,2,1,100]));
</script>