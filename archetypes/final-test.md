---
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
pass_percentage: 70 # Minimum percentage required to pass the test
time_limit: 15 # Duration of the test in minutes
level: "beginner" # Difficulty level of the test
category: "Programming Languages" # Category of the test
tags: ["golang", "basics", "syntax", "fundamentals"] # Tags for the test, useful for search and categorization
type: "test" # Type of the content, in this case, a test ( required for the test to be recognized by the system )
final: true # Indicates that this test is the final exam and must be completed to complete the course , module or section

questions:
  # Multiple Choice Question (Single Answer)
  # NOTE: The 'marks' field must be a positive number (greater than 0). Negative or zero values will cause a build error.
  - id: "q1"
    text: "What keyword is used to define a function in Go?"
    type: "multiple_answers"
    marks: 2
    explanation: "The 'func' keyword is used to declare functions in Go, similar to how 'function' is used in JavaScript."
    options:
      - id: "a"
        text: "function"
        is_correct: false
      - id: "b"
        text: "def"
        is_correct: false
      - id: "c"
        text: "func"
        is_correct: true
      - id: "d"
        text: "fn"
        is_correct: false

  # Short Answer Question
  - id: "q2"
    text: "Go is a statically typed language. (true/false)"
    type: "short_answer"
    marks: 2
    correct_answer: "true"
    case_sensitive: false
    explanation: "Go is indeed a statically typed language, meaning variable types are determined at compile time."

  # Short Answer Question (Numeric)
  - id: "q3"
    text: "What is the zero value of an uninitialized int in Go?"
    type: "short_answer"
    marks: 2
    correct_answer: "0"
    explanation: "In Go, the zero value for numeric types like int is 0."

  # Multiple Choice Question (Multiple Answers)
  - id: "q4"
    text: "What are the purposes of the 'defer' keyword in Go? (Select all that apply)"
    type: "mcq"
    multiple_answers: true
    marks: 2
    explanation: "The defer keyword is commonly used to delay function execution until the surrounding function returns, often used for cleanup tasks like closing files."
    options:
      - id: "a"
        text: "To delay the execution of a function until the surrounding function returns"
        is_correct: true
      - id: "b"
        text: "To define a constant value"
        is_correct: false
      - id: "c"
        text: "To close resources like files or network connections"
        is_correct: true
      - id: "d"
        text: "To handle errors in a function"
        is_correct: false
---
