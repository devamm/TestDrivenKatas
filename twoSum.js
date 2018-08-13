function twoSum(arr, target){
	let indArr = [];
	let map = {};
	if(!arr){
		return [];
	}
	for(let i = 0; i < arr.length; i++){
		let comp = target - arr[i];
		if(map[comp]){
			indArr.push(map[comp]);
			indArr.push(i);
			break;
		} else {
			map[arr[i]] = i;
		}
	}


	return indArr;
}


module.exports = twoSum;


