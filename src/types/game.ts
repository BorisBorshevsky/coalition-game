export enum Players {
    P1, P2, P3
}

export interface gameCoalitions {
    value12: number
    value23: number
    value13: number
    value123: number
}

export interface split {
    coalition: keyof gameCoalitions,
    P1: number
    P2: number
    P3: number
}
