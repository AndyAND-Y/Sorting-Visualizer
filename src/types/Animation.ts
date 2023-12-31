export type Animation = {
    array: number[],
} & (
        {
            type: 'swap',
            i: number,
            j: number,
        } |
        {
            type: "default"
        } |
        {
            type: "overwrite",
            value: number,
            i: number
        } |
        {
            type: "comp",
            i: number,
            j: number,
        }
    )