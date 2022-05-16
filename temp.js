/* eslint-disable max-len */
function findLongestSubStr(arr) {}

const lengthOfLongestSubstring = (s) => {
    const allSubstring = [];
    let subIndex = 0;
    let count = 0;
    while (count < s.length) {
        allSubstring.push(s.substring(count, subIndex + 1));
        subIndex += 1;
        if (subIndex === s.length) {
            count += 1;
            subIndex = count;
        }
    }

    const valid = [];

    allSubstring.forEach((a) => {
        let validStr = '';

        // looping throung every single substring charecter
        a.split('').forEach((s, i) => {
            if (!validStr.includes(s)) {
                validStr += s;
            }
        });
        if (a.includes(validStr)) valid.push(validStr);
    });

    let longestSubString = '';
    valid.forEach((i) => {
        if (longestSubString.length < i.length) {
            longestSubString = i;
        }
    });

    return longestSubString.length;
};
console.log(lengthOfLongestSubstring('pwwkew'));
