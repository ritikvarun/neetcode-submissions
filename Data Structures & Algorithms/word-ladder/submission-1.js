
class Solution {
    ladderLength(beginWord, endWord, wordList) {
        let words = new Set(wordList);

        if (!words.has(endWord)) return 0;

        let queue = [[beginWord, 1]];
        let visited = new Set();
        visited.add(beginWord);

        let index = 0;

        while (index < queue.length) {
            let [word, steps] = queue[index];
            index++;

            if (word === endWord) {
                return steps;
            }

            for (let i = 0; i < word.length; i++) {
                for (let charCode = 97; charCode <= 122; charCode++) {
                    let char = String.fromCharCode(charCode);

                    if (word[i] === char) continue;

                    let newWord =
                        word.slice(0, i) +
                        char +
                        word.slice(i + 1);

                    if (
                        words.has(newWord) &&
                        !visited.has(newWord)
                    ) {
                        visited.add(newWord);
                        queue.push([newWord, steps + 1]);
                    }
                }
            }
        }

        return 0;
    }
}
