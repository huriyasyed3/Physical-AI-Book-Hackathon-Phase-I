# Tasks: Physical AI Book Development

**Input**: Design documents from `/specs/1-physical-ai-book-spec/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `physical-ai-book/src/`, `physical-ai-book/tests/` at repository root
- Paths shown below assume Docusaurus project structure from `plan.md`

## Phase 1: Setup (Docusaurus Project Initialization)

**Purpose**: Install Docusaurus, initialize the project, and configure basic settings.

- [ ] T001 Ensure Node.js (LTS version) is installed on the development machine
- [ ] T002 Create new Docusaurus project: `npx create-docusaurus@latest physical-ai-book classic --typescript`
- [ ] T003 Navigate into the project directory: `cd physical-ai-book`
- [ ] T004 Start local development server: `npm start`
- [ ] T005 Configure `physical-ai-book/docusaurus.config.js` with site metadata (title, tagline, URL, baseUrl)
- [ ] T006 Define basic sidebar structure in `physical-ai-book/sidebar.js` to include one chapter and its three lessons
- [ ] T007 [P] Customize CSS variables for branding in `physical-ai-book/src/css/custom.css`

---

## Phase 2: Foundational (Chapter 1 Structure)

**Purpose**: Establish the core structure for Chapter 1 and its lessons, making it ready for content.

**⚠️ CRITICAL**: No content writing can begin until this phase is complete for Chapter 1

- [ ] T008 Create directory for Chapter 1: `mkdir -p physical-ai-book/docs/chapter1`
- [ ] T009 Create `physical-ai-book/docs/chapter1/lesson1.mdx` file with initial Docusaurus front matter (title, slug, sidebar_position)
- [ ] T010 Create `physical-ai-book/docs/chapter1/lesson2.mdx` file with initial Docusaurus front matter (title, slug, sidebar_position)
- [ ] T011 Create `physical-ai-book/docs/chapter1/lesson3.mdx` file with initial Docusaurus front matter (title, slug, sidebar_position)
- [ ] T012 Update `physical-ai-book/sidebar.js` to correctly link Chapter 1 and its three lessons

**Checkpoint**: Chapter 1 and its lessons' file structure is in place and navigable.

---

## Phase 3: User Story 1 - Explore Book Content (Priority: P1) 🎯 MVP

**Goal**: Readers can easily navigate the book, understand chapter/lesson topics, and grasp learning outcomes.

**Independent Test**: Review the built Docusaurus site to confirm clear navigation, correct chapter/lesson titles and descriptions, and logical flow.

### Implementation for User Story 1 (Chapter 1 Content)

- [ ] T013 [US1] Write an introductory description for Chapter 1 in `physical-ai-book/docs/chapter1/index.mdx` (or within `sidebar.js` if preferred for chapter intro)
- [ ] T014 [US1] Write content for `physical-ai-book/docs/chapter1/lesson1.mdx`, including title, description, theoretical explanation, and a hands-on example/project.
- [ ] T015 [US1] Write content for `physical-ai-book/docs/chapter1/lesson2.mdx`, including title, description, theoretical explanation, and a hands-on example/project.
- [ ] T016 [US1] Write content for `physical-ai-book/docs/chapter1/lesson3.mdx`, including title, description, theoretical explanation, and a hands-on example/project.
- [ ] T017 [P] [US1] Create `physical-ai-book/static/img/` directory for images used in lessons
- [ ] T018 [P] [US1] Create `physical-ai-book/static/code/` directory for code snippets used in lessons
- [ ] T019 [US1] Integrate relevant images into lessons from `physical-ai-book/static/img/`
- [ ] T020 [US1] Integrate relevant code snippets into lessons from `physical-ai-book/static/code/`

**Checkpoint**: Chapter 1, with all three lessons, has complete, structured content and assets.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final review, testing, deployment setup, and overall improvements.

- [ ] T021 Perform technical review of Chapter 1 content for accuracy and clarity
- [ ] T022 Perform editorial review of Chapter 1 content for grammar, style, and brand voice
- [ ] T023 Gather feedback from target audience (beta readers) on Chapter 1 comprehension and hands-on experience
- [ ] T024 Set up deployment process (e.g., GitHub Pages, Netlify) for the Docusaurus site
- [ ] T025 Configure CI/CD pipeline (e.g., GitHub Actions) to automate build and deployment
- [ ] T026 Run final Docusaurus build (`npm run build`) and verify zero warnings/errors
- [ ] T027 Deploy the book to a static site hosting service

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS Chapter 1 content creation
-   **User Story 1 (Phase 3)**: Depends on Foundational phase completion
-   **Polish (Phase 4)**: Depends on all desired content (Chapter 1) being complete

### Within User Story 1

-   Content writing for lessons (T014-T016) can be done in parallel for each lesson.
-   Asset directories (T017, T018) can be created in parallel.
-   Asset integration (T019, T020) depends on content writing and asset creation.

### Parallel Opportunities

-   Tasks T005, T006, T007 in Phase 1 can be done in parallel once the project is created.
-   Tasks T014, T015, T016 in Phase 3 can be done in parallel by different content creators.
-   Tasks T017, T018 in Phase 3 (creating asset directories) can be done in parallel.

---

## Implementation Strategy

### MVP First (Chapter 1)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks content)
3.  Complete Phase 3: User Story 1 (Chapter 1 content)
4.  **STOP and VALIDATE**: Test Chapter 1 content and navigation independently
5.  Deploy/demo if ready

### Incremental Delivery (for future chapters)

1.  Complete Setup + Foundational (for Chapter 1) -> Foundation ready
2.  Add Chapter 1 content -> Test independently -> Deploy/Demo (MVP!)
3.  Add Chapter 2 (future) -> Test independently -> Deploy/Demo
4.  Each chapter adds value without breaking previous content

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    -   Developer A: Content for Lesson 1
    -   Developer B: Content for Lesson 2
    -   Developer C: Content for Lesson 3
3.  Content integrates independently

---

## Notes

-   [P] tasks = different files, no dependencies
-   [US1] label maps task to User Story 1 for traceability
-   Each user story (here, Chapter 1's content) should be independently completable and testable
-   Commit after each task or logical group
-   Stop at any checkpoint to validate content independently
