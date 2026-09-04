function findMaxConsecutiveOnes(nums: number[]): number {
    let current = 0;
    let maxCount = 0;

    for (const num of nums) {
        if (num === 1) {
            current++;
            maxCount = Math.max(maxCount, current);
        } else {
            current = 0;
        }
    }

    return maxCount;
}