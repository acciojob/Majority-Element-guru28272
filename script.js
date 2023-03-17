//your code here
let arr = [2, 1, 2];

let maxEle = 0;
let ele = 0;
let count = 0;

function majorityEle(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if(arr[i] == arr[j]){
				count++;
				if(count > maxEle){
					maxEle = count;
					ele = arr[i];
				}
			}
		}
	}
	return ele;
}