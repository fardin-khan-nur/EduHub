document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Compiler Related Code
    const codeEditor = document.getElementById('code-editor');
    const output = document.getElementById('code-output');
    const runButton = document.getElementById('run-code');
    const clearButton = document.getElementById('clear-output');
    const copyButton = document.getElementById('copy-code');
    const downloadButton = document.getElementById('download-code');
    const languageSelect = document.getElementById('language-select');
    const sampleSelect = document.getElementById('sample-select');

    // Sample code templates
    const sampleCodes = {
        hello: {
            javascript: 'console.log("Hello, World!");',
            python: 'print("Hello, World!")',
            cpp: '#include <iostream>\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
            java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
        },
        fibonacci: {
            javascript: 'function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nfor(let i = 0; i < 10; i++) {\n    console.log(fibonacci(i));\n}',
            python: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(10):\n    print(fibonacci(i))',
            cpp: '#include <iostream>\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    for(int i = 0; i < 10; i++) {\n        std::cout << fibonacci(i) << std::endl;\n    }\n    return 0;\n}',
            java: 'public class Main {\n    static int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n\n    public static void main(String[] args) {\n        for(int i = 0; i < 10; i++) {\n            System.out.println(fibonacci(i));\n        }\n    }\n}'
        },
        sorting: {
            javascript: 'function bubbleSort(arr) {\n    for(let i = 0; i < arr.length; i++) {\n        for(let j = 0; j < arr.length - i - 1; j++) {\n            if(arr[j] > arr[j+1]) {\n                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n            }\n        }\n    }\n    return arr;\n}\n\nconst arr = [64, 34, 25, 12, 22, 11, 90];\nconsole.log("Original array:", arr);\nconsole.log("Sorted array:", bubbleSort([...arr]));',
            python: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\narr = [64, 34, 25, 12, 22, 11, 90]\nprint("Original array:", arr)\nprint("Sorted array:", bubble_sort(arr.copy()))',
            cpp: '#include <iostream>\n#include <vector>\n\nvoid bubbleSort(std::vector<int>& arr) {\n    for(int i = 0; i < arr.size(); i++) {\n        for(int j = 0; j < arr.size()-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                std::swap(arr[j], arr[j+1]);\n            }\n        }\n    }\n}\n\nint main() {\n    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};\n    \n    std::cout << "Original array: ";\n    for(int num : arr) std::cout << num << " ";\n    \n    bubbleSort(arr);\n    \n    std::cout << "\\nSorted array: ";\n    for(int num : arr) std::cout << num << " ";\n    \n    return 0;\n}',
            java: 'import java.util.Arrays;\n\npublic class Main {\n    static void bubbleSort(int[] arr) {\n        for(int i = 0; i < arr.length; i++) {\n            for(int j = 0; j < arr.length-i-1; j++) {\n                if(arr[j] > arr[j+1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j+1];\n                    arr[j+1] = temp;\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {64, 34, 25, 12, 22, 11, 90};\n        System.out.println("Original array: " + Arrays.toString(arr));\n        \n        int[] sortedArr = arr.clone();\n        bubbleSort(sortedArr);\n        System.out.println("Sorted array: " + Arrays.toString(sortedArr));\n    }\n}'
        }
    };

    // Load sample code
    if (sampleSelect) {
        sampleSelect.addEventListener('change', () => {
            const sample = sampleSelect.value;
            const language = languageSelect.value;
            if (sample && sampleCodes[sample]) {
                codeEditor.value = sampleCodes[sample][language];
            }
        });
    }

    // Change language
    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            const sample = sampleSelect.value;
            if (sample && sampleCodes[sample]) {
                codeEditor.value = sampleCodes[sample][languageSelect.value];
            }
        });
    }

    // Run code
    if (runButton && codeEditor && output) {
        runButton.addEventListener('click', () => {
            const code = codeEditor.value;
            const language = languageSelect.value;

            // In a real implementation, you would send this to a backend service
            if (language === 'javascript') {
                try {
                    // Create a new function to run the code in its own scope
                    const fn = new Function('console.log = function(msg) { output.innerHTML += msg + "\\n"; }; ' + code);
                    output.innerHTML = ''; // Clear previous output
                    fn();
                } catch (error) {
                    output.innerHTML = `Error: ${error.message}`;
                }
            } else {
                output.innerHTML = `Language "${language}" execution is not supported in this demo.\nIn a real implementation, this would be processed by a backend service.`;
            }
        });
    }

    // Clear output
    if (clearButton && output) {
        clearButton.addEventListener('click', () => {
            output.innerHTML = '';
        });
    }

    // Copy code
    if (copyButton && codeEditor) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeEditor.value)
                .then(() => {
                    alert('Code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy code:', err);
                });
        });
    }

    // Download code
    if (downloadButton && codeEditor && languageSelect) {
        downloadButton.addEventListener('click', () => {
            const code = codeEditor.value;
            const language = languageSelect.value;
            const extensions = {
                javascript: 'js',
                python: 'py',
                cpp: 'cpp',
                java: 'java'
            };
            
            const blob = new Blob([code], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `code.${extensions[language]}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        });
    }
});