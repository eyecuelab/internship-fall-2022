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
	const edgeCaseMatch = word.match(/(eo|io|ia)/gi);
	const edgeCaseNum = edgeCaseMatch ? edgeCaseMatch.length : 0;
	// note: some -tle/-dle and double-consonan words lose a syllable when in the past tense
	if (/(([^(.){2}].*ed$)([^lgvnytd]e[ds]$))|([aeiou][^aeiou])e$|([^l])e$|[st]ion$|cious$|cial$/gi.test(word)) {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 );
		return syllables > 0 ? syllables : 1;
	} else if (/sm|[aeiou]ous|[aeiouy]ing$/i.test(word)) {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length + 1 : 0 );
		return syllables > 0 ? syllables : 1;
	} else {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length : 0 );
		return word.replace(/\s/g, '').length > 0 ? syllables : 0;
	}
};