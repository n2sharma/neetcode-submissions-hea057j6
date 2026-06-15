class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;

        this.cache = new Map();
        
        this.head = new Node(0,0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // remove the node.
    remove(node){
        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // insert always at the head;
    insert(node){
        const firstRealNodeAfterHead = this.head.next;
        node.next = firstRealNodeAfterHead;
        node.prev = this.head;

        firstRealNodeAfterHead.prev = node;
        this.head.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){
            return -1;
        }

        const node = this.cache.get(key);

        this.remove(node); // remove the node from its current location
        this.insert(node); // and put it at the first (after head)

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Case 1: if cache already has key
        if (this.cache.has(key)){
            const node = this.cache.get(key);

            node.value = value;

            this.remove(node);
            this.insert(node);

            return;
        }
        // new key (new node)
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        // if capacity exceeds, then delete the LRU from map and doublylinkedlist
        if( this.cache.size > this.capacity){
            const lruNode = this.tail.prev;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }
    }
}

class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null
    }
}