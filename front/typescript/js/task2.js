function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    var prefix = "";
    var firstStr = strs[0];
    for (var i = 0; i < firstStr.length; i++) {
        for (var j = 1; j < strs.length; j++) {
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
