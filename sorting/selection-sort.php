<script type="text/javascript">
	function selectionSort(arr) {
		var passes = 0;
		for(var i = 0; i < arr.length; i++) {
			var smallest = arr[i];
			var requireSwap = false;

			for(var j = i; j < arr.length; j++ ){
				if(arr[j] < smallest) {
					smallest = arr[j];
					smallestIdx = j;
					requireSwap = true;
				}
			}

			if(requireSwap) {
				var temp = arr[i];
				arr[i] = arr[smallestIdx];
				arr[smallestIdx] = temp;
			} else {
				break;
			}

			passes++;
			console.log('after pass: ' + passes);
			console.log(arr);
		}

		return passes;
	}

	console.log(selectionSort([1,09,8,7,6, 5,4,3,2,1]));
</script>