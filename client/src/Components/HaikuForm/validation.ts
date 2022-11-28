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
  return sum || 0;
};

export const countSyllables = (word: string) => {
	const vowelMatch = word.match(/[aeiouy]+/gi);
	const edgeCaseMatch = word.match(/(eo|io|ia)/gi);
	const edgeCaseNum = edgeCaseMatch ? edgeCaseMatch.length : 0;
	const lastLetters = word.toLowerCase().split('').reverse().join('');
	// special case for -le words (words like 'apple' are 2 where words like 'smile' are 1)
	if (lastLetters[0] === 'e' && (lastLetters[1] !== 'l' || !['a','e','i','o','u'].includes(lastLetters[2]))) {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 ); 
		return syllables > 0 ? syllables : 1;
	// special case for -ed words (words like 'busted' are 2 where words like 'furled' are 1)
	} else if ((lastLetters[0] === 'd' && lastLetters[1] === 'e') && (lastLetters[2] !== 't' && lastLetters[2] !== 'd')) {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 );
		return syllables > 0 ? syllables : 1;
	// special case for -tion words (the '-ion' in 'lion' is 2 where the '-ion' in 'motion' is 1)
	} else if (lastLetters[0] === 'n' && lastLetters[1] === 'o' && lastLetters[2] === 'i' && lastLetters[3] === 't') {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 ); 
		return syllables > 0 ? syllables : 1;
	// special case for -zes/-ses words (words like 'phrases' are 2 where words like 'games' are 1)
	} else if (lastLetters[0] === 's' && lastLetters[1] === 'e' && (lastLetters[2] !== 's' && lastLetters[2] !== 'z')) {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length - 1 : 0 );
		return syllables > 0 ? syllables : 1;
	// special case for '-ism' words (words like 'prism' have an extra syllable that words like 'prisma' do not)
	} else if (lastLetters[0] === 'm' && lastLetters[1] === 's' && lastLetters[2] === 'i') {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length + 1 : 0 );
		return syllables > 0 ? syllables : 1;
	} else {
		const syllables = edgeCaseNum + ( vowelMatch ? vowelMatch.length : 0 );
		return word.replace(/\s/g, '').length > 0 ? syllables : 0;
	}
};