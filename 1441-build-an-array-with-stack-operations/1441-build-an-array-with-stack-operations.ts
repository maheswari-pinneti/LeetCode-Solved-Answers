function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    let targetIndex = 0;

    for (let num = 1; num <= n; num++) {
        // We always read the current number and Push it
        result.push("Push");

        // If it is not needed, remove it
        if (num !== target[targetIndex]) {
            result.push("Pop");
        } else {
            // This number is part of target
            targetIndex++;
        }

        // Target is completely built
        if (targetIndex === target.length) {
            break;
        }
    }

    return result;
}