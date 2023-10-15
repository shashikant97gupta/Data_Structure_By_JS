class Stack {
    constructor(){
        this.items = [];
    }

    push(elements){
        this.items.push(elements)
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }

    toArray(){
        return this.items;
    }

    toString(){
        return (this.items).toString()
    }

}


const stackObj = new Stack();
stackObj.push(2)
stackObj.push(1)
stackObj.push(5)
stackObj.push(6)
stackObj.push(7)

console.log(stackObj.peek())
console.log(stackObj.isEmpty())


