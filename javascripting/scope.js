const a = 1; const b = 2; const c = 3;

(function fristFunction (){
	const b = 5; const c = 6;

		(function secondFunction (){
			const b = 8;
			console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
			(function thirdFunction (){
				const a = 7; const c = 9;

				(function fouthFuncition (){
					const a = 1; const c = 8
			})()
		})()
	})()
})()

