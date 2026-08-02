class Solution {
    evalRPN(tokens) {
        let stack = [];

        for (let token of tokens) {

            if (token === "+") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a + b);

            } else if (token === "-") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a - b);

            } else if (token === "*") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a * b);

            } else if (token === "/") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(Math.trunc(a / b));

            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}