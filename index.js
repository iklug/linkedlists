class Node {
    constructor(element)
    {
        this.element = element;
        //element holds the data of a node
        this.next = null;
        //next holds the pointer to the next node
        //initialized to the null value
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        //head stores the first node of a List
        this.size = 0;
        //size indicates the number of nodes in a list

    }
    add(element){
        //adds element at the end of the list
        const node = new Node(element);


        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    insertAt(element, location){
        const node = new Node(element);

        let current = this.head;
        let previous;

        if(location === 0){
            node.next = this.head;
            this.head = node;
            //relocating the initial head to the index = 1 location
            //and reassigning this.head to the node we've just  created
        } else {
            for(let i = 0;i<location;i++){
                previous = current;
                current = current.next;
                //starting at the head, move through the nodes
                //when we leave the loop, previous will be the value before
                //current will be the value at a certain index currently
            }
            node.next = current;
            //reassigns the node at the current index to be after the 
            //node we just added
            previous.next = node;
            //the previous node now links to the newly added node
            
        }
        this.size++;
    }
    removeAt(index){
        let current = this.head;
        let previous;
        let next;

        for(let i =0;i<index;i++){
            previous = current;
            current = current.next;
            next = current.next;
        }
        console.log(previous);
        console.log(current);
        console.log(next);
        previous.next = next;
        this.size--;
    }

    //if the list is empty--add an element and it is the head
    //if the list is not empty--iterate to the end of the list
    //and add an element at the end of the list.

    addInFront(element){
        const node = new Node(element);


        node.next = this.head
        this.head = node;
        this.size++;
    }
    tail(){
        let lastIndex = this.size;
        let current = this.head;
        let previous;

        for(let i = 0;i<lastIndex;i++){
            previous = current;
            current = current.next;
    }
return previous;


}
    atIndex(index){
        let current = this.head;
        let previous;

        for(let i = 0; i<=index;i++){
            previous = current;
            current = current.next;
        }
        return previous;
    }
    listSize(){
        let current = this.head;
        let previous;
        let i = 0;

        while(current){
            previous = current;
            current = current.next;
            i++;
        }
        return i;
    }
    pop(){
        let length = this.size - 2;
    
        let current = this.head;
        let previous;
        for(let i = 0; i<length;i++){
            let previous = current;
            current = current.next;
            }
            console.log(current);
            current.next = null;
            this.size--;
            return 'last node removed.'
        }

        printList(){
            let current = this.head;
            
            let previous;
            let printedString = '';
            for(let i = 0;i<this.size;i++){
                let extra = JSON.stringify(current.element);
                printedString+=`${extra}->`;
                current = current.next;
            }
            return `${printedString}null`;
        }

        contains(element){
            let current = this.head;
            let stringIt = JSON.stringify(element);

            for(let i=0;i<this.size;i++){
                let nodeJSON = JSON.stringify(current.element);
                if(stringIt === nodeJSON){
                    return true;
                } else {
                    current=current.next;
                }
            }
            return false;
        }
        find(element){
            let current = this.head;
            let stringIt = JSON.stringify(element);

            for(let i=0;i<this.size;i++){
                let nodeJSON = JSON.stringify(current.element);
                if(stringIt === nodeJSON){
                    return i;
                } else {
                    current=current.next;
                }
            }
            return null;
        }

    }




let nodesCollection = new LinkedList();
console.log('linked list created, no nodes:',nodesCollection.head);


nodesCollection.add([1,2,3]);

nodesCollection.add([4,5,6]);
console.log('two objects added to the linked list:',nodesCollection.head);
nodesCollection.insertAt([1,1,1], 2);
console.log(nodesCollection.head,nodesCollection.head.next);
nodesCollection.addInFront([3,3,3]);
console.log('testing addInFront',nodesCollection.head);


console.log('should be the last:',nodesCollection.tail());
console.log('should be same as tail:', nodesCollection.atIndex(3));
console.log('listSize() works:',nodesCollection.listSize() === nodesCollection.size);



console.log(nodesCollection.printList());


console.log(nodesCollection.contains([4,5,7]));

nodesCollection.removeAt(2);
console.log(nodesCollection.printList());