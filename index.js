class BinarySearchTree{
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    dfs(values = []) {
        if(this.left) {
            values = this.left.dfs(values)
        }
        values.push(this.value)

        if(this.right) {
            values = this.right.dfs(values)
        }
        return values
    }

    bfs(tree, values = []) {
        const queue = new Queue() //Assuming a Queue is implemented
        const node =  tree.root
        queue.enqueue(node)
        while (queue.length) {
            const node = queue.dequeue() //remove from the queue
            values.push(node.value)

            if (node.left) {
                queue.enqueue(node.left) //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right) //add right child to the queue
            }
        }
        return values
    }
}




// function binarySearch(arr, value) {
//     let start = 0
//     let end = arr.length

//     if(start > end) {
//         return -1
//     }

//     let index = Math.floor((start + end) / 2)
//     const item = arr[index]

//     if(item == value) {
//         return index
//     }
//     else if(item < value) {
//         index++
//         return binarySearch(arr, value)
       
//     }
//     else if(item > value) {
//         index--
//         return binarySearch(arr, value)
//     }

// }

// const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18 ]
// const value = 8

// console.log(binarySearch(arr, value))



function findElement(arr, element) {
    let startIndex = 0
    let endIndex = arr.length - 1

    while(startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

        if(element === arr[middleIndex]) {
            return middleIndex
        }

        else if(element > arr[middleIndex]) {
            startIndex = middleIndex + 1
        } else {
            endIndex = middleIndex - 1
        }
    }
}

const arr = [1, 5, 9, 13, 99, 100] 

console.log(findElement(arr, 99))