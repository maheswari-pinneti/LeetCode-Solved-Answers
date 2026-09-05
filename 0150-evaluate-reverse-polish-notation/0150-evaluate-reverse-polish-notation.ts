function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        // If token is a number
        if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
            stack.push(Number(token));
            continue;
        }

        // Operator → take the last two numbers
        const b = stack.pop()!;
        const a = stack.pop()!;

        let result: number;

        switch (token) {
            case "+":
                result = a + b;
                break;

            case "-":
                result = a - b;
                break;

            case "*":
                result = a * b;
                break;

            case "/":
                // JavaScript Math.trunc() truncates toward zero
                result = Math.trunc(a / b);
                break;

            default:
                throw new Error("Invalid operator");
        }

        // Put the result back into the stack
        stack.push(result);
    }

    return stack[0];
}