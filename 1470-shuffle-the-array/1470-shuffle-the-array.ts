function shuffle(nums: number[], n: number): number[] {
    const ans: number[] = [];

    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);       // xi
        ans.push(nums[i + n]);   // yi
    }

    return ans;
}