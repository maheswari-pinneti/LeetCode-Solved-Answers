function exclusiveTime(n: number, logs: string[]): number[] {
    const result: number[] = new Array(n).fill(0);
    const stack: number[] = [];

    let prevTime = 0;

    for (const log of logs) {
        const [idString, type, timeString] = log.split(":");

        const id = Number(idString);
        const time = Number(timeString);

        if (type === "start") {
            // Current function gets CPU time until just before this start
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime;
            }

            stack.push(id);

            // New function starts at this timestamp
            prevTime = time;
        } else {
            // End timestamp is inclusive
            result[stack[stack.length - 1]] += time - prevTime + 1;

            stack.pop();

            // Next function starts/resumes after this timestamp
            prevTime = time + 1;
        }
    }

    return result;
}