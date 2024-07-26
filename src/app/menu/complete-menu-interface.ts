export interface CompleteMenu {
    id: number;
    name: string;
    pageid: number | null;
    level: number;
    prevVoice: {
        id: number;
        name: string;
    } | null;
    subVoices: {
        id: number;
        name: string;
    }[] | null;
}