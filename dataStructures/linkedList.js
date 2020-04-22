class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
        this.size = 0
    }

    prepend(value) {

        if (!this.head) {
            this.head = this.tail = new Node(value)
            this.size++
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
            this.size++
        }
    }

    append(value) {

        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            this.tail.prev = oldTail
            oldTail.next = this.tail
            this.size++
        }
    }

    printListValues() {
        let current = this.head

        while (current) {
            console.log(current.value)
            current = current.next
        }
    }

    get(index) {

        if (index > -1) {

            let current = this.head
            let i = 0

            while (current != null && i < index) {
                current = current.next
                i++
            }

            return current !== null ? current.value : undefined
        }

        return undefined
    }

    deleteHead() {
        if (!this.head) {
            return null
        }

        let removedHead = this.head

        if (this.head == this.tail) {
            this.head = this.tail = null
            this.size--
        } else {
            this.head = this.head.next
            this.head.prev = null
            this.size--
        }

        return `Deleted: ${removedHead.value}`
    }
    deleteTail() {
        if (!this.tail) {
            return null
        }

        let removedTail = this.tail

        if (this.tail == this.head) {
            this.head = this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        }

        return `Deleted: ${removedTail.value}`
    }

    clearList() {
        this.head = this.tail = null
        this.size = 0
    }


}

console.clear()
let playlist = new LinkedList
playlist.prepend('Michael Jackson - Thriller')
playlist.prepend('Boa - Duvet')
playlist.append('Fear and Loathing in Las Vegas - Just Awake')
playlist.clearList()
playlist.printListValues()
console.log(playlist)