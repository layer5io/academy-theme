---
type: "lab" 
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
description: ""
weight: 1

# --- Lab Card Settings ---
# Fields for the "Start Your Lab" card. All are optional.
starter_catalog_link: ""  # The URL for the main "Clone and Start Lab" button.
starter_embed_link:
  src: ""                   # e.g., "./embeded/starter-design.js"
  id: ""                    # The element ID from the JS file.

# Fields for the "Lab Solution / Reference Answer" card. All are optional.
answer_catalog_link: ""   # The URL for the "View Answer" button.
answer_embed_link:
  src: ""                   # e.g., "./embeded/answer-design.js"
  id: ""                    # The element ID from the JS file.


---

{{< lab-intro >}}
# Use this shortcode to add any content you need to display before the lab card. 
# Otherwise, if you have specified starter_catalog_link or starter_embed_link, the lab card will be the first content to be shown on the page.
{{< /lab-intro >}}

## Lab Steps

1.  **First Step:**
    Describe the first action the user needs to take.

2.  **Second Step:**
    ...
