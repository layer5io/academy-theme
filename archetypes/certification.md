---
type: "certification"
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
id: "id-from-cloud-content-wizard"
description: "This is a sample certification description. It provides an overview of what the certification covers and its objectives."
banner: "image.png"
weight: 1
draft: true
tags: [cloud, infrastructure]
level: "beginner"
categories: "platform"


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

# Additional attributes about the test
additional_attributes: 
  - title: "Retake Policy"
    description: "One Retake allowed after 30 days"
  - title: "Labs"
    description: "Hands-on labs included"


---
