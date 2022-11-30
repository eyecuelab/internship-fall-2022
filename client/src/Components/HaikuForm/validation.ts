export const findStems = (word: string) => {
	const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=d27dfcf1-d549-4939-8c1e-1a5ede776e67`;
	const response = fetch(url, { method: 'GET' })
	.then(response => response.json())
	.then(data => {
		return data[0];
	});
	return response
}

export const compareWords = (stems: string[], words: string[]) => {
	if (words) {
		for (let i=0; i<stems.length; i++) {
			for (let j=0; j<stems[i].length; j++) {
				if (words.includes(stems[i][j])) {
					return false;
				}
			}
		}
	}
	return true;
}

export const haikuCheck = (poem: string, line: number) : boolean => {
	if (poem.length > 0) {
		const lineArr = splitLine(poem);
		if (line === 1 || line === 3) {
			if (lineCheck(lineArr) != 5) {
				return false;
			}
		} else if (line === 2) {
			if (lineCheck(lineArr) != 7) {
				return false;
			}
		}
	}
	return true;
};

export const splitLine = (line: string) => {
  return line.includes(' ') ? line.split(' ') : [line];
};

export const lineCheck = (line: string[]) => {
  const countArr = line.map((word) => countSyllables(word.replace(/\s/g, '')));
  let sum = countArr.reduce((sum, number) => {
    return sum + number;
  }, 0);
	console.log(sum);
  return sum || 0;
};

export const countSyllables = (word: string) => {
	const vowelMatch = word.match(/[aeiouy]+/gi);
	const edgeCaseMatch = word.match(/(eo|io|ia)+/gi);
	const edgeCaseNum = edgeCaseMatch ? edgeCaseMatch.length : 0;
	const exceptionWords = [
		{'abalone': 3},
		{'adobe': 3},
		{'acreage': 3},
		{'anemone': 4},
		{'cafe': 2},
		{'crooked': 2},
		{'guacamole': 4},
		{'hyperbole': 4},
		{'jukebox': 2},
		{'karate': 3},
		{'machete': 3},
		{'maybe': 2},
		{'people': 2},
		{'recipe': 2},
		{'sesame': 3},
		{'shoreline': 2},
		{'simile': 3},
		{'tamale': 3},
		{'yosemite': 4},
	];
	const plusSyllables = [
		/sm$/i,
		/[aeiou]ous$/i,
		/[aeiouy]ing$/i,
		/[^l]lien$/i,
		/[^aeiou]ie$/i,
		/uity$/i,
		/thm$/i,
		/gean$/i,
		/ii$/i,
	];
	const minusSyllables = [
		/[^tf][^td]e[d]$/i,
		/[aeiou][^aeiou]e$/i,
		/[^n][^(l)|(ph)]e$/i,
		/[st]ion$/i,
		/cious$/i,
		/cial$/i,
		/elle$/i,
		/nce$/i,
	];
	for (let i=0; i<exceptionWords.length; i++) {
		if (Object.keys(exceptionWords[i])[0] === word.toLowerCase()) {
			console.log();
			return Object.values(exceptionWords[i])[0];
		}
	}
	for (let i=0; i<minusSyllables.length; i++) {
		if (minusSyllables[i].test(word)) {
			console.log(minusSyllables[i]);
			const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 );
			return syllables > 0 ? syllables : 1;
		}
	} 
	for (let i=0; i<plusSyllables.length; i++) {
		if (plusSyllables[i].test(word)) {
			console.log(plusSyllables[i]);
			const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length + 1 : 0 );
			return syllables > 0 ? syllables : 1;
		}
	} 
	const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length : 0 );
	return word.replace(/\s/g, '').length > 0 ? syllables : 0;
};