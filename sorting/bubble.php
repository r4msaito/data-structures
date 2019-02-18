<script type="text/javascript">

    function bubbleSort(arr, order) {
        var order = order || 'ASC';
        var passes = 0;
        var swaps = 0;

        for (var i = 0; i < arr.length - 1; i++) {
        	for (var j = 0; j < arr.length - (i + 1); j++) {
        		if(arr[j] < arr[j + 1]) {
        			var temp = arr[j];
        			arr[j] = arr[j + 1];
        			arr[j + 1] = temp;
                    swaps++;
        		}
        	}

        	passes++;
        }

        return swaps;
    }

    console.log(bubbleSort([1,2,3,4,5]));

</script>