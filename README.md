# Opi Se - Frontend

Opi Se is a web application designed to connect learners and mentors, built with a focus on delivering an engaging and interactive user experience. This repository contains the frontend codebase of the application, implemented using modern technologies like React.js, Redux Toolkit, and Material-UI.

For full documentation, please refer to the [Opi Se Documentation](./Opi%20Se%20Documentation.pdf).

## Table of Contents
- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Design Patterns](#design-patterns)
- [State Management](#state-management)
- [Routing](#routing)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Challenges During Development](#challenges-during-development)

## Introduction

The frontend of **Opi Se** is developed using React.js, leveraging a component-based architecture to create a dynamic and interactive user interface. The application is designed to be scalable and maintainable, utilizing several modern development tools, libraries, and design patterns.

## Technology Stack

The frontend of the Opi Se project utilizes the following technologies:

- **React.js**: For building the user interface using reusable components.
- **Redux Toolkit**: For efficient state management across the application.
- **React Router Dom**: For navigation and routing in a Single Page Application (SPA) environment.
- **Material-UI**: For a consistent and responsive user interface design.
- **CSS Modules**: For locally scoped and maintainable CSS styling.
- **React Big Calendar**: For calendar management and event scheduling.
- **Socket.io Client**: For real-time communication such as chat and notifications.
- **Simple Peer**: For voice and video calls using WebRTC-based peer-to-peer connections.
- **Firebase**: For handling push notifications with Firebase Cloud Messaging (FCM).
- **Vercel**: For seamless deployment and continuous integration with GitHub.

For a more detailed breakdown of the libraries used, please refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Project Structure

The project follows a modular directory structure to maintain clarity and scalability:

- **src/**: Root directory for source files.
  - **assets/**: Static assets like images and icons.
  - **callStore/**: State management related to voice/video call functionality.
  - **components/**: Reusable UI components following the barrel design pattern.
  - **FCM/**: Integration with Firebase Cloud Messaging.
  - **hooks/**: Custom hooks for various functionalities.
  - **pages/**: Main views and pages of the application.
  - **routes/**: Route management for the application.
  - **store/**: Global state management with Redux.

For a more detailed explanation of the project structure, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Design Patterns

The application leverages several design patterns to ensure modularity and maintainability:

- **Presentational and Container Pattern**: Separates UI components (presentational) from business logic (container), improving reusability and testability.
- **Facade Pattern**: Simplifies complex subsystems by providing a unified interface, used in components like Notes.

For examples and more details on the design patterns used, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## State Management

State management is handled using **Redux Toolkit**, with each major module having its own slice for managing state and reducers. For real-time communication, `createAsyncThunk` is used to handle asynchronous actions related to socket events.

Example slices include:
- **Authentication Slice**: Manages user login data and tokens.
- **Notes Slice**: Manages notes data and related socket events.
- **Tasks Slice**: Manages tasks and related socket events.

For more information on state management, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Routing

Routing is managed using **React Router Dom**. The routing structure is modular, with separate route files for different user roles and states, such as Guest, User, Mentor, and Admin.

For more details on routing setup, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).
 
## Styling

Styling is primarily done using **CSS Modules** to ensure locally scoped and maintainable styles. Global styles and theme settings are managed in `App.css`.

For more details on the styling approach, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## API Integration

API calls are handled through a custom hook, `useHttp`, which abstracts the fetch logic and error handling. This hook manages the loading state, token authentication, and error notifications.

For code examples and more information, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Performance Optimization

Several techniques are employed to optimize performance, including:
- **Code Splitting**: Using `React.lazy` to load components only when needed.
- **Callback Optimization**: Using `useCallback` to avoid unnecessary function re-creation.

For more details on performance optimizations, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Deployment

The frontend application is deployed on **Vercel**, which provides continuous integration with GitHub. The deployment process includes building the application and configuring necessary environment variables.

For more details on deployment, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

## Challenges During Development

During development, several challenges were faced, including:
- Integrating real-time functionalities with sockets.
- Managing reliable video and voice calls with Simple Peer and Socket.io.
- Structuring the codebase with a Page-Based Structure and employing design patterns for scalability.

For more details on the challenges faced and how they were addressed, refer to the full documentation [here](./Opi%20Se%20Documentation.pdf).

