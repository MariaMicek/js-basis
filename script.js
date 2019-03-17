var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var months = [];
var dateStart = new Date(2015, 0, 1);
var dateEnd = new Date(2015, 1, 1);

function monthsInterval(dateStart, dateEnd) {
	var start = dateStart.getMonth();		
	var end = dateEnd.getMonth();			
	var yearStart = dateStart.getFullYear();
	var yearEnd = dateEnd.getFullYear();	

	
	if (yearStart == yearEnd){

			if (start == end){

					months.push(monthNames[start]);

			} else if (start < end){

					for (var i = start; start <= i && i <= end; i++){
						months.push(monthNames[i]);
					}

			} else if (start > end){

				for (var i = end; end <= i && i <= start; i++){
					months.push(monthNames[i]);
				}
			}


}	else if (yearStart + 1 == yearEnd){

			if (start == end){

				months = monthNames;

			} else if (start < end){

				months = monthNames;

			} else if (start > end){

					for (var i = 0; i >= 0  && i <= end; i++){
						months.push(monthNames[i]);
					}
					for (var i = start; i >= start && i <= 11; i++) {
						months.push(monthNames[i]);
					}
			}


} else if (yearStart + 1 < yearEnd){

			months = monthNames;


} else if (yearStart - 1 == yearEnd){

			if (start == end){

				months = monthNames;

			} else if (start < end){

					for (var i = 0; i >= 0 && i <= start; i++) {
						months.push(monthNames[i]);
					}
					for (var i = end; i >= end  && i <= 11; i++){
						months.push(monthNames[i]);
					}

			} else if (start > end){

						months = monthNames;

			}


} else if (yearStart - 1 > yearEnd){

			months = monthNames;

	}

	return months

}


console.log(monthsInterval(dateStart, dateEnd));
