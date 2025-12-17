# Data Model: Docusaurus Chapter Tasks

## Entities

### Chapter
- **Name**: String - The title of the chapter
- **Description**: String - Brief overview of the chapter content
- **Lessons**: Array of Lesson entities - The lessons contained within this chapter
- **Order**: Integer - The position of this chapter in the book sequence

### Lesson
- **Title**: String - The title of the lesson
- **Content**: String - The main content of the lesson in Markdown format
- **ChapterId**: String - Reference to the parent chapter
- **Order**: Integer - The position of this lesson within the chapter
- **Prerequisites**: Array of String - Other lessons that should be completed before this one

### Task
- **Id**: String - Unique identifier for the task
- **Title**: String - Brief description of the task
- **Description**: String - Detailed explanation of what needs to be done
- **Category**: String - Either "Docusaurus Setup" or "Chapter Development"
- **Status**: String - Either "pending", "in_progress", or "completed"
- **Dependencies**: Array of Task Ids - Other tasks that must be completed before this one

## Relationships
- A Chapter contains multiple Lessons (one-to-many)
- A Task may be associated with a specific Chapter or Lesson (many-to-one, optional)