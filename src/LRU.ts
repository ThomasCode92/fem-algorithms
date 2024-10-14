export default class LRU<K, V> {
    private length: number;

    constructor() {}

    update(key: K, value: V): void {
        // does it exist?
        // if it doesn't, we need to insert
        //   - check capacity and evict if over
        // if it does, we need to update to the front of the list
        // and update the value
    }

    get(key: K): V | undefined {
        // check the cache for existence
        // update the value we found and move it to the front
        // return out the value found or undefined if not exist
    }
}
