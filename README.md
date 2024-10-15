# FrontendMaster - The Last Algorithms Course You'll Need

A super fun, beginner-friendly data structures and algorithms course. 🎓<br /> Is it really the last algorithms course you'll need? If you want to pass tough interview questions, then yes! 🤔<br />Learn about _Big O_, _time complexity_, fundamental data structures like arrays, lists, trees, graphs, and maps. Even searching and sorting algorithms. 💡📚

**About this Repository**<br />This repository is associated with [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/) course from [FrontendMasters](https://frontendmasters.com/), taught by [ThePrimeagen](https://twitter.com/ThePrimeagen).<br />Here, you'll find all the exercises, example algorithms, and data structures covered in the course.

## How To Use this Project

### Table of Content

This project covers a wide range of algorithms and data structures, organized into the following topics:

| Category | Data Structures/ Algorithms | Documentation |
| --- | --- | --- |
| Basics | Introduction, Big O, Arrays & Examples | [Basics](./docs/basics/index.md) |
| Search | Binary Search, Linear Search &<br />Two Crystal Ball Problem | [Search](./docs/search/index.md) |
| Sort | Bubble Sort, Linked List, Queue & Stack | [Sort](./docs/sort/index.md) |
| Arrays | ArrayList & RingBuffer | [Arrays](./docs/arrays/index.md) |
| Recursion | Recursion in General & Path Finding | [Recursion](./docs/recursion/index.md) |
| Quick Sort | Divide and Conquer & Basic QuickSort | [Sort](./docs/sort/index.md) |
| Doubly Linked List | Implement a DoublyLinkedList | [Sort](./docs/sort/index.md) |
| Trees | Trees Overview & Tree Traversal (DFS) | [Trees](./docs/trees/index.md) |
| Tree Search | Breadth-First-Search & Binary Search Tree | [Trees](./docs/trees/index.md) |
| Heap | Heap Overview & Tries | [Heap](./docs/heap/index.md) |
| Graphs | Adjacency List, Adjacency Matrix &<br />Dijkstra's Shortest Path | [Graphs](./docs/graphs/index.md) |
| Maps & LRU | Maps Overview & LRU Caching | [Maps](./docs/maps-lru/index.md) |

### Testing the Algorithms & Data Structures

To run the algorithms and data structures tests, ensure Node.js is installed on the system. Refer to the [official documentation](https://nodejs.org/en) for installation instructions. If [asdf](https://asdf-vm.com/) is being used, Node.js can also be installed via the `.tool-versions` file. More information on this is available [here](https://asdf-vm.com/manage/configuration.html#tool-versions).

Once Node.js is installed, follow these steps to set up and test the application:

```bash
git clone https://github.com/ThomasCode92/fem-algorithms.git
cd fem-algorithms   # navigate into project folder
npm install         # install dependencies
npm run test        # run all unit tests
```

Ro run tests for a specific file, use the following command: `npx jest <FILE>`. For example, to test the _QuickSort_ implementation, run: `npx jest QuickSort`.

**Contributing**<br />Please note that some files in the [.src folder](./src/) have not been implemented yet. Contributions are welcome, and those interested in enhancing the project can fork the repository, implement the missing functionality, and submit a pull request. This will help improve the overall quality of the project.
