export const findStems = (word: string) => {
	const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=d27dfcf1-d549-4939-8c1e-1a5ede776e67`;
	const response = fetch(url, { method: 'GET' })
	.then(response => response.json())
	.then(data => {
		console.log('DATA ', data[0]);
		return data[0];
	});
	return response
}

export const compareWords = (stems: string[], words: string[]) => {
	if (words) {
		for (let i=0; i<stems.length; i++) {
			for (let j=0; j<stems[i].length; j++) {
				if (words.includes(stems[i][j])) {
					console.log(words, ' ', stems[i][j], 'false');
					return false;
				}
			}
		}
	}
	return true;
}