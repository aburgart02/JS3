function isValidBrackets(text) {
    let stack = [];
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of text) {
        if (char in brackets)
            stack.push(char);

        else if (Object.values(brackets).includes(char)) {
            if (stack.length === 0)
                return false;

            let last = stack.pop();
            if (brackets[last] !== char)
                return false;
        }
    }

    return stack.length === 0;
}

console.log(isValidBrackets("abc(def)ghi[jklm(nop[qrs]tuvw)xy]z"));
console.log(isValidBrackets("a(bcd[efgh}ijklm(nopq)rst]uv]wx)yz"));