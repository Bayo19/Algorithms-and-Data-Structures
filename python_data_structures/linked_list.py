# doubly linked list

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class Linked_List:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    
    def append(self, data):
        if self.head is None and self.tail is None:
            new_node = Node(data)
            new_node.prev = None
            new_node.next = None
            self.head = self.tail = new_node
            self.size = self.size +1
        else:
            oldtail = self.tail
            new_node = Node(data)
            self.tail = new_node
            self.tail.prev = oldtail
            oldtail.next = self.tail
            self.size = self.size +1


    def prepend(self, data):
        if self.tail is None and self.head is None:
            new_node = Node(data)
            new_node.prev = None
            new_node.next = None
            self.head = self.tail = new_node
            self.size = self.size +1
        else:
            oldHead = self.head
            new_node = Node(data)
            self.head = new_node
            self.head.next = oldHead
            self.head.prev = None
            self.size = self.size + 1

 
    def print_list(self):
        cur = self.head
        while cur:
            print(cur.data)
            cur = cur.next

playlist = Linked_List()
playlist.append('Windows96 - dashville')
playlist.append('Lenny Kravitz - Heaven Help')
playlist.prepend('Beyonce - Single Ladies')
print('\n')
playlist.print_list()

    