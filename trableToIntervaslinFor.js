// FALSE
// for (var i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }
//  TRUE
for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i);
	}, 100, i);
}