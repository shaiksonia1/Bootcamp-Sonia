# ASSIGNMENT-2: Annotation System Project

## Overview
This system includes the following three main tasks:

1. **Authentication in Next.js using Auth.js**
2. **Generic Composable Component System**
3. **Annotation Support for Components**

This document explains the features, design, and implementation steps for each task, following a structured approach to problem definition, user interaction, planning, exit criteria, and deliverables.

---

## Task 1: Next.js Authentication with Auth.js

### Problem Definition
Authentication is a critical component of modern web applications, ensuring secure access to users. The goal is to implement authentication in a Next.js application using Auth.js (NextAuth.js), supporting credential-based login and OTP-based login, while managing sessions efficiently.

### Users & Usage
- **End users**: Authenticate using either username/password or OTP.
- **Admin/Developers**: Configure session expiration times and manage authentication flow.

### Plan
1. **Version 0:** Basic NextAuth.js setup with credential-based login.
2. **Version 1:** Implement OTP-based authentication.
3. **Version 2:** Configure session management and expiration.
4. **Version 3:** Finalize UI/UX and error handling.

### Exit Criteria
- Users can log in with credentials or OTP.
- Sessions are maintained and expire as configured.
- Logout functionality is implemented.

### Project Deliverables
- A fully functional authentication system in Next.js.
- Documentation for setup and usage.
- Code repository with examples.

---

## Task 2: Generic Composable Component System

### Problem Definition
Modern web applications require reusable UI components for consistency and efficiency. The objective is to create a generic component system where components are described in JSON format and can be composed into complex widgets.

### Users & Usage
- **Developers**: Define, update, and reuse components across projects.
- **Designers**: Configure display options for a better user experience.

### Plan
1. **Version 0:** Define a JSON schema for basic components.
2. **Version 1:** Implement metadata handling and display types.
3. **Version 2:** Enable composite widgets by combining multiple components.
4. **Version 3:** Optimize performance and finalize UI interactions.

### Exit Criteria
- Components are fully described in JSON format.
- Widgets can be created using multiple components.
- The system supports different display types and options.

### Project Deliverables
- JSON schema for components.
- API and UI for defining and rendering components.
- Documentation with usage guidelines.

### Example JSON for a Base Component
```json
{
  "id": "comp1",
  "createdAt": "2025-01-01T12:00:00Z",
  "updatedAt": "2025-01-02T14:30:00Z",
  "type": "text",
  "displayType": "card",
  "displayOptions": {
    "pagination": false,
    "colorScheme": "light"
  },
  "data": {
    "content": "This is a sample text component."
  }
}
```

---

## Task 3: Annotation Support System

### Problem Definition
Annotations are essential for collaboration in UI design and development. The goal is to allow users to add, edit, and delete annotations on components, supporting hierarchical structures for discussions.

### Users & Usage
- **Designers & Developers**: Attach comments to UI components for discussions.
- **Project Managers**: Track feedback and changes in the UI.

### Plan
1. **Version 0:** Implement a basic annotation system with text comments.
2. **Version 1:** Enable nested annotations for structured discussions.
3. **Version 2:** Integrate annotations with UI components.
4. **Version 3:** Implement search and filtering for annotations.

### Exit Criteria
- Users can add, edit, and delete annotations.
- Annotations are linked to specific components.
- Nested annotations enable discussion threads.

### Project Deliverables
- Annotation system with UI integration.
- JSON format for storing annotations.
- Documentation and user guide.

### Example JSON for an Annotation
```json
{
  "id": "anno1",
  "componentId": "comp1",
  "createdAt": "2025-01-02T14:30:00Z",
  "updatedAt": "2025-01-02T15:00:00Z",
  "author": "User123",
  "text": "This component needs a darker background.",
  "tags": ["UI Improvement"],
  "parentId": null
}
```

### Example JSON for a Nested Annotation (Reply to Another Annotation)
```json
{
  "id": "anno2",
  "componentId": "comp1",
  "createdAt": "2025-01-02T15:10:00Z",
  "updatedAt": "2025-01-02T15:15:00Z",
  "author": "User456",
  "text": "I agree! A dark mode option would be nice.",
  "tags": ["Feature Request"],
  "parentId": "anno1"
}
```

### UI Considerations
- **Hover-over tooltips** for quick annotation previews.
- **Sidebar panel** displaying annotation history.
- **Collapsible annotation threads** for nested comments.


