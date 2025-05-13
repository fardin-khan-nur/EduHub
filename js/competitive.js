document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const problemsListView = document.getElementById('problemsListView');
    const singleProblemView = document.getElementById('singleProblemView');
    const problemsContainer = document.getElementById('problemsContainer');
    const backToProblems = document.getElementById('backToProblems');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');

    // Your existing problems array remains the same
    // Problems data
    const problems = [
        // Beginner Level (10 problems)
        {
            id: 1,
            title: "Two Sum",
            difficulty: "beginner",
            category: "arrays",
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            sampleInput: "[2,7,11,15]\ntarget = 9",
            sampleOutput: "[0,1]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 2,
            title: "Reverse String",
            difficulty: "beginner",
            category: "strings",
            description: "Write a function that reverses a string. The input string is given as an array of characters.",
            sampleInput: "['h','e','l','l','o']",
            sampleOutput: "['o','l','l','e','h']",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 3,
            title: "Even or Odd",
            difficulty: "beginner",
            category: "math",
            description: "Determine whether a given integer is even or odd.",
            sampleInput: "4",
            sampleOutput: "Even",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 4,
            title: "Sum of Array",
            difficulty: "beginner",
            category: "arrays",
            description: "Calculate the sum of all elements in an array.",
            sampleInput: "[1, 2, 3, 4, 5]",
            sampleOutput: "15",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 5,
            title: "Count Vowels",
            difficulty: "beginner",
            category: "strings",
            description: "Count the number of vowels in a given string.",
            sampleInput: "hello world",
            sampleOutput: "3",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 6,
            title: "Find Maximum",
            difficulty: "beginner",
            category: "arrays",
            description: "Find the maximum element in an array.",
            sampleInput: "[3, 7, 2, 9, 1]",
            sampleOutput: "9",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 7,
            title: "Factorial",
            difficulty: "beginner",
            category: "math",
            description: "Calculate the factorial of a non-negative integer n.",
            sampleInput: "5",
            sampleOutput: "120",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 8,
            title: "Palindrome Check",
            difficulty: "beginner",
            category: "strings",
            description: "Determine if a string is a palindrome (reads the same forwards and backwards).",
            sampleInput: "racecar",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 9,
            title: "FizzBuzz",
            difficulty: "beginner",
            category: "implementation",
            description: "Print numbers from 1 to n, but for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'.",
            sampleInput: "15",
            sampleOutput: "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 10,
            title: "Binary to Decimal",
            difficulty: "beginner",
            category: "math",
            description: "Convert a binary number to decimal.",
            sampleInput: "1010",
            sampleOutput: "10",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },

        // Easy Level (15 problems)
        {
            id: 11,
            title: "Valid Parentheses",
            difficulty: "easy",
            category: "stacks",
            description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            sampleInput: "()[]{}",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },

        {
            id: 12,
            title: "Roman to Integer",
            difficulty: "easy",
            category: "strings",
            description: "Convert Roman numerals to integers. Input is guaranteed to be within the range from 1 to 3999.",
            sampleInput: "LVIII",
            sampleOutput: "58",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 13,
            title: "First Missing Positive",
            difficulty: "hard",
            category: "arrays",
            description: "Find the smallest missing positive integer in an unsorted array.",
            sampleInput: "[3,4,-1,1]",
            sampleOutput: "2",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 14,
            title: "Binary Search",
            difficulty: "easy",
            category: "searching",
            description: "Implement binary search to find a target value in a sorted array.",
            sampleInput: "nums = [-1,0,3,5,9,12], target = 9",
            sampleOutput: "4",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 15,
            title: "Merge Sort",
            difficulty: "medium",
            category: "sorting",
            description: "Implement the merge sort algorithm.",
            sampleInput: "[64, 34, 25, 12, 22, 11, 90]",
            sampleOutput: "[11, 12, 22, 25, 34, 64, 90]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 16,
            title: "Longest Common Prefix",
            difficulty: "easy",
            category: "strings",
            description: "Find the longest common prefix string amongst an array of strings.",
            sampleInput: "['flower','flow','flight']",
            sampleOutput: "'fl'",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 17,
            title: "Maximum Subarray",
            difficulty: "medium",
            category: "arrays",
            description: "Find the contiguous subarray with the largest sum.",
            sampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
            sampleOutput: "6",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 18,
            title: "Climbing Stairs",
            difficulty: "easy",
            category: "dynamic programming",
            description: "Count ways to climb n stairs taking 1 or 2 steps at a time.",
            sampleInput: "5",
            sampleOutput: "8",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 19,
            title: "Valid BST",
            difficulty: "medium",
            category: "binary trees",
            description: "Determine if a binary tree is a valid binary search tree (BST).",
            sampleInput: "[2,1,3]",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 20,
            title: "Merge Intervals",
            difficulty: "medium",
            category: "arrays",
            description: "Merge all overlapping intervals.",
            sampleInput: "[[1,3],[2,6],[8,10],[15,18]]",
            sampleOutput: "[[1,6],[8,10],[15,18]]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 21,
            title: "N-Queens",
            difficulty: "hard",
            category: "backtracking",
            description: "Place N queens on an NxN chessboard so no two queens attack each other.",
            sampleInput: "4",
            sampleOutput: "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 22,
            title: "LRU Cache",
            difficulty: "medium",
            category: "design",
            description: "Implement a Least Recently Used (LRU) cache.",
            sampleInput: "['LRUCache','put','put','get','put','get','get']\n[[2],[1,1],[2,2],[1],[3,3],[2],[3]]",
            sampleOutput: "[null,null,null,1,null,-1,3]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 23,
            title: "Word Break",
            difficulty: "medium",
            category: "dynamic programming",
            description: "Determine if a string can be segmented into words from a dictionary.",
            sampleInput: "s = 'leetcode', wordDict = ['leet','code']",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 24,
            title: "Course Schedule",
            difficulty: "medium",
            category: "graphs",
            description: "Determine if it's possible to finish all courses given prerequisites.",
            sampleInput: "numCourses = 2, prerequisites = [[1,0]]",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 25,
            title: "Regular Expression Matching",
            difficulty: "hard",
            category: "dynamic programming",
            description: "Implement regular expression matching with support for '.' and '*'.",
            sampleInput: "s = 'aa', p = 'a*'",
            sampleOutput: "true",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 26,
            title: "Trapping Rain Water",
            difficulty: "hard",
            category: "arrays",
            description: "Calculate how much water can be trapped between buildings.",
            sampleInput: "[0,1,0,2,1,0,1,3,2,1,2,1]",
            sampleOutput: "6",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 27,
            title: "Min Stack",
            difficulty: "easy",
            category: "design",
            description: "Design a stack that supports push, pop, top, and retrieving the minimum element.",
            sampleInput: "['MinStack','push','push','push','getMin','pop','top','getMin']\n[[],[-2],[0],[-3],[],[],[],[]]",
            sampleOutput: "[null,null,null,null,-3,null,0,-2]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 28,
            title: "Binary Tree Level Order",
            difficulty: "medium",
            category: "binary trees",
            description: "Return the level order traversal of a binary tree's nodes' values.",
            sampleInput: "[3,9,20,null,null,15,7]",
            sampleOutput: "[[3],[9,20],[15,7]]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 29,
            title: "Jump Game",
            difficulty: "medium",
            category: "arrays",
            description: "Determine if you can reach the last index of an array.",
            sampleInput: "[2,3,1,1,4]",
            sampleOutput: "true",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 30,
            title: "Sudoku Solver",
            difficulty: "hard",
            category: "backtracking",
            description: "Write a program to solve a Sudoku puzzle.",
            sampleInput: "9x9 grid with some filled numbers",
            sampleOutput: "Complete solved Sudoku grid",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 31,
            title: "Rotate Image",
            difficulty: "medium",
            category: "arrays",
            description: "Rotate an n x n 2D matrix 90 degrees clockwise.",
            sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
            sampleOutput: "[[7,4,1],[8,5,2],[9,6,3]]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 32,
            title: "Implement Trie",
            difficulty: "medium",
            category: "design",
            description: "Implement a trie (prefix tree) with insert, search, and startsWith methods.",
            sampleInput: "['Trie','insert','search','startsWith']\n[[],['apple'],['apple'],['app']]",
            sampleOutput: "[null,null,true,true]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 33,
            title: "Longest Palindromic Substring",
            difficulty: "medium",
            category: "strings",
            description: "Find the longest palindromic substring in a string.",
            sampleInput: "babad",
            sampleOutput: "bab",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 34,
            title: "Find Median from Data Stream",
            difficulty: "hard",
            category: "heap",
            description: "Design a data structure that supports adding numbers and finding the median.",
            sampleInput: "['MedianFinder','addNum','addNum','findMedian']\n[[],[1],[2],[]]",
            sampleOutput: "[null,null,null,1.5]",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 35,
            title: "Longest Consecutive Sequence",
            difficulty: "medium",
            category: "arrays",
            description: "Find the length of the longest consecutive sequence in an unsorted array.",
            sampleInput: "[100,4,200,1,3,2]",
            sampleOutput: "4",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 36,
            title: "Word Ladder",
            difficulty: "hard",
            category: "graphs",
            description: "Transform one word to another by changing one letter at a time.",
            sampleInput: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
            sampleOutput: "5",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 37,
            title: "Copy List with Random Pointer",
            difficulty: "medium",
            category: "linked lists",
            description: "Create a deep copy of a linked list with random pointers.",
            sampleInput: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
            sampleOutput: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 38,
            title: "Maximum Product Subarray",
            difficulty: "medium",
            category: "dynamic programming",
            description: "Find the subarray with the largest product.",
            sampleInput: "[2,3,-2,4]",
            sampleOutput: "6",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 39,
            title: "Best Time to Buy and Sell Stock",
            difficulty: "easy",
            category: "arrays",
            description: "Find the maximum profit from buying and selling a stock once.",
            sampleInput: "[7,1,5,3,6,4]",
            sampleOutput: "5",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 40,
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "hard",
            category: "binary trees",
            description: "Design an algorithm to serialize and deserialize a binary tree.",
            sampleInput: "[1,2,3,null,null,4,5]",
            sampleOutput: "[1,2,3,null,null,4,5]",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 41,
            title: "Find First and Last Position",
            difficulty: "medium",
            category: "binary search",
            description: "Find first and last position of element in sorted array.",
            sampleInput: "nums = [5,7,7,8,8,10], target = 8",
            sampleOutput: "[3,4]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 42,
            title: "Palindrome Pairs",
            difficulty: "hard",
            category: "strings",
            description: "Find all pairs of words that form palindromes when concatenated.",
            sampleInput: "['abcd','dcba','lls','s','sssll']",
            sampleOutput: "[[0,1],[1,0],[3,2],[2,4]]",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 43,
            title: "Sliding Window Maximum",
            difficulty: "hard",
            category: "arrays",
            description: "Find maximum element in each sliding window of size k.",
            sampleInput: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
            sampleOutput: "[3,3,5,5,6,7]",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 44,
            title: "Group Anagrams",
            difficulty: "medium",
            category: "strings",
            description: "Group strings that are anagrams of each other.",
            sampleInput: "['eat','tea','tan','ate','nat','bat']",
            sampleOutput: "[['eat','tea','ate'],['tan','nat'],['bat']]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 45,
            title: "Text Justification",
            difficulty: "hard",
            category: "strings",
            description: "Justify text by adding spaces to make each line have exact maxWidth.",
            sampleInput: "words = ['This','is','an','example'], maxWidth = 16",
            sampleOutput: "['This    is    an','example  ']",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 46,
            title: "K Closest Points",
            difficulty: "medium",
            category: "heap",
            description: "Find k points closest to the origin.",
            sampleInput: "points = [[1,3],[-2,2]], k = 1",
            sampleOutput: "[[-2,2]]",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },

        {
            id: 47,
            title: "Distinct Subsequences",
            difficulty: "hard",
            category: "dynamic programming",
            description: "Count distinct subsequences of one string in another.",
            sampleInput: "s = 'rabbbit', t = 'rabbit'",
            sampleOutput: "3",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 48,
            title: "Minimum Window Substring",
            difficulty: "hard",
            category: "strings",
            description: "Find the minimum window in string S which contains all characters from string T.",
            sampleInput: "s = 'ADOBECODEBANC', t = 'ABC'",
            sampleOutput: "'BANC'",
            timeLimit: "2 seconds",
            memoryLimit: "256MB"
        },
        {
            id: 49,
            title: "Longest Valid Parentheses",
            difficulty: "hard",
            category: "dynamic programming",
            description: "Find the length of the longest valid parentheses substring.",
            sampleInput: ")()())",
            sampleOutput: "4",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
        {
            id: 50,
            title: "Median of Two Sorted Arrays",
            difficulty: "hard",
            category: "binary search",
            description: "Find the median of two sorted arrays of different sizes.",
            sampleInput: "nums1 = [1,3], nums2 = [2]",
            sampleOutput: "2.0",
            timeLimit: "1 second",
            memoryLimit: "256MB"
        },
    ];

    // Function to create problem card
    function createProblemCard(problem) {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.innerHTML = `
            <span class="difficulty-badge ${problem.difficulty}">${problem.difficulty}</span>
            <h3>${problem.title}</h3>
            <p>${problem.category}</p>
        `;
        card.addEventListener('click', () => showProblem(problem));
        return card;
    }

    // Function to display problems list
    function displayProblems(filteredProblems = problems) {
        problemsContainer.innerHTML = '';
        filteredProblems.forEach(problem => {
            problemsContainer.appendChild(createProblemCard(problem));
        });
    }

    // Function to show single problem view
    function showProblem(problem) {
        // Hide problems list view
        problemsListView.style.display = 'none';
        
        // Update problem details
        document.getElementById('activeProblemTitle').textContent = problem.title;
        document.getElementById('activeProblemDifficulty').textContent = problem.difficulty;
        document.getElementById('activeProblemDifficulty').className = `difficulty-badge ${problem.difficulty}`;
        document.getElementById('activeProblemCategory').textContent = problem.category;
        document.getElementById('timeLimit').textContent = problem.timeLimit;
        document.getElementById('memoryLimit').textContent = problem.memoryLimit;
        document.getElementById('activeProblemDescription').textContent = problem.description;
        document.getElementById('activeProblemInput').textContent = problem.sampleInput;
        document.getElementById('activeProblemOutput').textContent = problem.sampleOutput;

        // Clear previous code
        document.getElementById('codeEditor').value = '';
        
        // Show single problem view
        singleProblemView.style.display = 'block';
    }

    // Function to show problems list
    function showProblemsList() {
        singleProblemView.style.display = 'none';
        problemsListView.style.display = 'block';
    }

    // Filter problems
    function filterProblems() {
        const difficulty = difficultyFilter.value;
        const category = categoryFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filtered = problems.filter(problem => {
            const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
            const matchesCategory = category === 'all' || problem.category === category;
            const matchesSearch = problem.title.toLowerCase().includes(searchTerm);
            return matchesDifficulty && matchesCategory && matchesSearch;
        });

        displayProblems(filtered);
    }

    // Event Listeners
    difficultyFilter.addEventListener('change', filterProblems);
    categoryFilter.addEventListener('change', filterProblems);
    searchInput.addEventListener('input', filterProblems);
    
    // Back button handler
    backToProblems.addEventListener('click', showProblemsList);

    // Code submission handler
    document.getElementById('submitCode').addEventListener('click', () => {
        const code = document.getElementById('codeEditor').value;
        const language = document.getElementById('languageSelect').value;
        const currentTime = document.getElementById('currentTime').textContent;
        
        if (!code.trim()) {
            alert('Please write your solution before submitting!');
            return;
        }

        console.log(`Submission at: ${currentTime}`);
        console.log(`Language: ${language}`);
        console.log(`Code: ${code}`);
        
        alert('Code submitted! In a real implementation, this would be sent to a server for evaluation.');
    });

    // Test code handler
    document.getElementById('testCode').addEventListener('click', () => {
        const code = document.getElementById('codeEditor').value;
        const language = document.getElementById('languageSelect').value;
        
        if (!code.trim()) {
            alert('Please write your solution before testing!');
            return;
        }

        console.log(`Testing code in ${language}...`);
        alert('Testing code! In a real implementation, this would run your code against sample test cases.');
    });

    // Initialize display
    showProblemsList();
    displayProblems();
});