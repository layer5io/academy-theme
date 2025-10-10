---
title: 'test'
pass_percentage: 70 # Minimum percentage required to pass the test
time_limit: 15 # Duration of the test in minutes
max_attempts: 3 # Maximum number of attempts allowed for the test
difficulty: "beginner" # Difficulty level of the test
category: "Programming Languages" # Category of the test
tags: ["golang", "basics", "syntax", "fundamentals"] # Tags for the test, useful for search and categorization
type: "test" # Type of the content, in this case, a test ( required for the test to be recognized by the system )


# Table of content covered in the test
# Each domain can have a weightage (percentage) and subdomains (items)
# Weightage should sum up to 100 across all domains ( not strictly enforced, but recommended )
competencies:
  - title: "Domain 1"
    percentage: 10 # Weightage of this domain in the test
    items: 
       -  "Subdomain 1"
       -  "Subdomain 2"

  - title: "Domain 2"
    percentage: 30
    items:
      - "Subdomain 1"
      - "Subdomain 2"

  - title: "Domain 3"
    percentage: 60
    items:
      - "Subdomain 1"
      - "Subdomain 2"



# List of resource that are recommended to complete before taking the test
# Not strictly enforced, but recommended
prerequisite_knowledge:
  - title: "Learning Path: Cloud Computing Basics"
    link: "https://academy-domain.com/learning-paths/cloud-computing-basics"
  - title: "Basic Certification: Networking Basics"
    link: "https://academy-domain.com/certifications/networking-basics"
  - title: "Basic knowledge of Linux command line"
    link: "https://linuxcommand.org/"

# List of additional resources for further reading 
related_resources:
  - title: "Documentation"
    link: "https://docs.example.com/"
  - title: "Instructions"
    link: "https://instructions.example.com/"
  - title: "YouTube Channel"
    link: "https://www.youtube.com/c/example" 

# Additional attributes about the test will be displayed in the test details page
additional_attributes: 
  - title: "Retake Policy"
    description: "One Retake allowed after 30 days"
  - title: "Labs"
    description: "Hands-on labs included"


questions:
  # Multiple Choice Question (Single Answer)
  - id: "q1"
    text: "What keyword is used to define a function in Go?"
    type: "mcq"
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
