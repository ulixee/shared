export declare function debounce(func: () => any, wait: number): () => void;
export declare function length(source: AsyncIterable<unknown>): Promise<number>;
export declare function all<T>(source: AsyncIterable<T>): Promise<T[]>;
export declare function first<T>(source: AsyncIterable<T>): Promise<T>;
export declare function last<T>(source: AsyncIterable<T>): Promise<T>;
