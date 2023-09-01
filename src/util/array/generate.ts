
type Range = {
    low: number,
    high: number,
}

export default function generateArray(size: number, range: Range = { low: 10, high: 100 }) {

    const arr = [];
    for (let i = 0; i < size; ++i) {
        arr.push(Math.floor(range.low + Math.random() * (range.high - range.low)));
    }
    return [...arr];
}