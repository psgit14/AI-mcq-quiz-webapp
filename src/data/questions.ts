import { Question } from '../types/quiz';

// Questions database organized by topic
export const questionsByTopic: Record<string, Question[]> = {
  python: [
    {
      id: 'py1',
      text: 'What is the output of print(type(5 / 2)) in Python 3?',
      options: [
        { id: 'a', text: '<class \'int\'>' },
        { id: 'b', text: '<class \'float\'>' },
        { id: 'c', text: '<class \'number\'>' },
        { id: 'd', text: '<class \'double\'>' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'py2',
      text: 'Which of the following is not a Python built-in data type?',
      options: [
        { id: 'a', text: 'List' },
        { id: 'b', text: 'Dictionary' },
        { id: 'c', text: 'Array' },
        { id: 'd', text: 'Tuple' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'py3',
      text: 'What is the result of 3 * 4 ** 2 in Python?',
      options: [
        { id: 'a', text: '144' },
        { id: 'b', text: '48' },
        { id: 'c', text: '24' },
        { id: 'd', text: '576' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'py4',
      text: 'Which method is used to add an element at the end of a list?',
      options: [
        { id: 'a', text: 'list.add()' },
        { id: 'b', text: 'list.append()' },
        { id: 'c', text: 'list.insert()' },
        { id: 'd', text: 'list.push()' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'py5',
      text: 'What does the "self" keyword represent in a Python class?',
      options: [
        { id: 'a', text: 'It refers to the class itself' },
        { id: 'b', text: 'It refers to the current instance of the class' },
        { id: 'c', text: 'It is a variable that contains all class methods' },
        { id: 'd', text: 'It is a reserved keyword for future use' }
      ],
      correctAnswer: 'b'
    }
  ],
  javascript: [
    {
      id: 'js1',
      text: 'What will be the output of: console.log(typeof [])?',
      options: [
        { id: 'a', text: '"array"' },
        { id: 'b', text: '"object"' },
        { id: 'c', text: '"list"' },
        { id: 'd', text: '"undefined"' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'js2',
      text: 'Which method is used to add elements to the beginning of an array?',
      options: [
        { id: 'a', text: 'push()' },
        { id: 'b', text: 'unshift()' },
        { id: 'c', text: 'append()' },
        { id: 'd', text: 'addFirst()' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'js3',
      text: 'How do you declare a constant in JavaScript?',
      options: [
        { id: 'a', text: 'var x = 5;' },
        { id: 'b', text: 'let x = 5;' },
        { id: 'c', text: 'const x = 5;' },
        { id: 'd', text: 'constant x = 5;' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'js4',
      text: 'What is the result of 3 + "3" in JavaScript?',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '"33"' },
        { id: 'c', text: '33' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswer: 'b'
    }
  ],
  react: [
    {
      id: 'react1',
      text: 'Which hook is used for side effects in React?',
      options: [
        { id: 'a', text: 'useState' },
        { id: 'b', text: 'useEffect' },
        { id: 'c', text: 'useContext' },
        { id: 'd', text: 'useReducer' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'react2',
      text: 'What is the correct way to update state in React?',
      options: [
        { id: 'a', text: 'this.state.count = 5' },
        { id: 'b', text: 'this.setState({ count: 5 })' },
        { id: 'c', text: 'state.count = 5' },
        { id: 'd', text: 'setState(count: 5)' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'react3',
      text: 'Which of the following is a React lifecycle method?',
      options: [
        { id: 'a', text: 'componentDidRender' },
        { id: 'b', text: 'componentWillStart' },
        { id: 'c', text: 'componentDidMount' },
        { id: 'd', text: 'onComponentLoad' }
      ],
      correctAnswer: 'c'
    }
  ],
  ai: [
    {
      id: 'ai1',
      text: 'Which of the following is NOT a type of machine learning?',
      options: [
        { id: 'a', text: 'Supervised Learning' },
        { id: 'b', text: 'Reinforcement Learning' },
        { id: 'c', text: 'Distributed Learning' },
        { id: 'd', text: 'Unsupervised Learning' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'ai2',
      text: 'What does CNN stand for in the context of AI?',
      options: [
        { id: 'a', text: 'Computer Neural Network' },
        { id: 'b', text: 'Convolutional Neural Network' },
        { id: 'c', text: 'Computational Neural Network' },
        { id: 'd', text: 'Connected Neural Nodes' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'ai3',
      text: 'Which of these is NOT a common activation function in neural networks?',
      options: [
        { id: 'a', text: 'ReLU' },
        { id: 'b', text: 'Sigmoid' },
        { id: 'c', text: 'Tangent' },
        { id: 'd', text: 'Softmax' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'ai4',
      text: 'What is the main purpose of a loss function in neural networks?',
      options: [
        { id: 'a', text: 'To measure the accuracy of predictions' },
        { id: 'b', text: 'To update the weights of the network' },
        { id: 'c', text: 'To initialize the network parameters' },
        { id: 'd', text: 'To determine the learning rate' }
      ],
      correctAnswer: 'a'
    }
  ],
  datastructures: [
    {
      id: 'ds1',
      text: 'Which data structure follows the LIFO principle?',
      options: [
        { id: 'a', text: 'Queue' },
        { id: 'b', text: 'Stack' },
        { id: 'c', text: 'Linked List' },
        { id: 'd', text: 'Tree' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'ds2',
      text: 'What is the time complexity of searching an element in a sorted array using binary search?',
      options: [
        { id: 'a', text: 'O(1)' },
        { id: 'b', text: 'O(n)' },
        { id: 'c', text: 'O(log n)' },
        { id: 'd', text: 'O(n²)' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'ds3',
      text: 'Which of the following is NOT a linear data structure?',
      options: [
        { id: 'a', text: 'Array' },
        { id: 'b', text: 'Queue' },
        { id: 'c', text: 'Tree' },
        { id: 'd', text: 'Linked List' }
      ],
      correctAnswer: 'c'
    }
  ],
  algorithms: [
    {
      id: 'algo1',
      text: 'What is the worst-case time complexity of quicksort?',
      options: [
        { id: 'a', text: 'O(n)' },
        { id: 'b', text: 'O(n log n)' },
        { id: 'c', text: 'O(n²)' },
        { id: 'd', text: 'O(2^n)' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'algo2',
      text: 'Which algorithm is used to find the shortest path in a weighted graph?',
      options: [
        { id: 'a', text: 'Depth-First Search' },
        { id: 'b', text: 'Breadth-First Search' },
        { id: 'c', text: 'Dijkstra\'s Algorithm' },
        { id: 'd', text: 'Bubble Sort' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'algo3',
      text: 'Which sorting algorithm has the best average-case time complexity?',
      options: [
        { id: 'a', text: 'Bubble Sort' },
        { id: 'b', text: 'Insertion Sort' },
        { id: 'c', text: 'Merge Sort' },
        { id: 'd', text: 'Selection Sort' }
      ],
      correctAnswer: 'c'
    }
  ],
  database: [
    {
      id: 'db1',
      text: 'Which of the following is NOT a type of SQL join?',
      options: [
        { id: 'a', text: 'INNER JOIN' },
        { id: 'b', text: 'OUTER JOIN' },
        { id: 'c', text: 'CROSS JOIN' },
        { id: 'd', text: 'PARALLEL JOIN' }
      ],
      correctAnswer: 'd'
    },
    {
      id: 'db2',
      text: 'What does ACID stand for in the context of databases?',
      options: [
        { id: 'a', text: 'Atomicity, Consistency, Isolation, Durability' },
        { id: 'b', text: 'Availability, Consistency, Integration, Durability' },
        { id: 'c', text: 'Atomicity, Completeness, Integrity, Durability' },
        { id: 'd', text: 'Authentication, Consistency, Isolation, Distribution' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'db3',
      text: 'Which normal form eliminates transitive dependencies?',
      options: [
        { id: 'a', text: '1NF' },
        { id: 'b', text: '2NF' },
        { id: 'c', text: '3NF' },
        { id: 'd', text: '4NF' }
      ],
      correctAnswer: 'c'
    }
  ],
  networking: [
    {
      id: 'net1',
      text: 'Which layer of the OSI model is responsible for routing?',
      options: [
        { id: 'a', text: 'Data Link Layer' },
        { id: 'b', text: 'Network Layer' },
        { id: 'c', text: 'Transport Layer' },
        { id: 'd', text: 'Session Layer' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'net2',
      text: 'What protocol is used for secure website connections?',
      options: [
        { id: 'a', text: 'HTTP' },
        { id: 'b', text: 'FTP' },
        { id: 'c', text: 'HTTPS' },
        { id: 'd', text: 'SMTP' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'net3',
      text: 'Which of the following is NOT a valid IP address?',
      options: [
        { id: 'a', text: '192.168.1.1' },
        { id: 'b', text: '255.255.255.0' },
        { id: 'c', text: '300.168.1.1' },
        { id: 'd', text: '10.0.0.1' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'net4',
      text: 'What is the default port for HTTP?',
      options: [
        { id: 'a', text: '80' },
        { id: 'b', text: '443' },
        { id: 'c', text: '21' },
        { id: 'd', text: '25' }
      ],
      correctAnswer: 'a'
    }
  ]
};

// Function to get random questions for a topic
export const getRandomQuestions = (topicId: string, count: number = 5): Question[] => {
  const topicQuestions = questionsByTopic[topicId] || [];
  if (topicQuestions.length <= count) {
    return topicQuestions;
  }
  
  // Shuffle and return 'count' number of questions
  return [...topicQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};