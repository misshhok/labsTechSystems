function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = "";
    let firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstStr[i]) {
                return prefix;
            }
        }
        prefix += firstStr[i];
    }

    return prefix;
}

// Пример использования
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));