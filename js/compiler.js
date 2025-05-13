document.addEventListener('DOMContentLoaded', () => {
    const codeEditor = document.getElementById('code-editor');
    const output = document.getElementById('code-output');
    const runButton = document.getElementById('run-code');
    const clearButton = document.getElementById('clear-output');
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
        }
    };

    // Load sample code
    sampleSelect.addEventListener('change', () => {
        const sample = sampleSelect.value;
        const language = languageSelect.value;
        if (sample && sampleCodes[sample]) {
            codeEditor.value = sampleCodes[sample][language];
        }
    });

    // Change language
    languageSelect.addEventListener('change', () => {
        const sample = sampleSelect.value;
        if (sample && sampleCodes[sample]) {
            codeEditor.value = sampleCodes[sample][languageSelect.value];
        }
    });

    // Run code
    runButton.addEventListener('click', () => {
        const code = codeEditor.value;
        const language = languageSelect.value;

        // In a real implementation, you would send this to a backend service
        // For now, we'll just simulate JavaScript execution
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

    // Clear output
    clearButton.addEventListener('click', () => {
        output.innerHTML = '';
    });
});