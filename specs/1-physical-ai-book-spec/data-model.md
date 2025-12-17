# Data Model: Physical AI Book

**Feature Branch**: `1-physical-ai-book-spec`
**Date**: 2025-12-06
**Spec**: [specs/1-physical-ai-book-spec/spec.md](specs/1-physical-ai-book-spec/spec.md)

## Summary

This document defines the key entities and their relationships for the "Physical AI Book" project, based on the feature specification. These entities represent the core content structure of the book.

## Key Entities

### Book
-   **Description**: The complete collection of chapters and lessons on Physical AI, acting as the root content entity. It represents the entire documented knowledge base.
-   **Attributes (Conceptual)**:
    -   `title`: (String) The main title of the book.
    -   `description`: (String) A brief overview of the book's content and purpose.
    -   `chapters`: (List of Chapter) A collection of major thematic sections.

### Chapter
-   **Description**: A major thematic section of the book, containing multiple lessons. Chapters organize content into logical parts.
-   **Attributes (Conceptual)**:
    -   `title`: (String) The title of the chapter.
    -   `description`: (String) A summary of the chapter's overarching theme and learning objectives.
    -   `lessons`: (List of Lesson) A collection of focused instructional units within this chapter.
    -   `order`: (Integer) The sequential position of the chapter within the book.

### Lesson
-   **Description**: A focused unit of instruction within a chapter, covering a specific Physical AI concept or project. Lessons are the fundamental building blocks of learning content.
-   **Attributes (Conceptual)**:
    -   `title`: (String) The title of the lesson.
    -   `description`: (String) A summary of the specific topic covered and skills gained from the lesson.
    -   `content`: (Markdown/MDX String) The actual instructional material, including theoretical explanations, code examples, and hands-on activities.
    -   `assets`: (List of Asset References) Links or references to images, code snippets, diagrams, etc., used within the lesson.
    -   `order`: (Integer) The sequential position of the lesson within its chapter.

## Relationships

-   A **Book** contains many **Chapters**.
-   A **Chapter** contains many **Lessons**.
-   A **Lesson** may reference multiple **Assets** (images, code snippets, etc.).

## Data Flow (Conceptual)

Content authoring (Markdown/MDX files) -> Docusaurus build process -> Static site output.

## Future Considerations (Optional)

-   Potential for metadata attributes for SEO, author information, publication date.
-   Integration with a CMS for content management beyond direct file editing.
