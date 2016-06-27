/*Read Me */
	function isOdd(num) { return num % 2;}
		
		
	function hideOddRows(){
		var arrAllRows = [].slice.call(document.querySelectorAll('[id^=row-'));

		for (var i=0; i <= arrAllRows.length-1; i++) {

			var rowVal = arrAllRows[i].id;
			var rowId = rowVal.split("-");
			var rowNum = parseInt(rowId[1]);
			
			if (isOdd(rowNum)==true) {
				arrAllRows[i].style.display="none";
			}
		}
	}