# Student CRM

## Description

Student CRM is a simple React application for managing
and displaying student information.

The project was created as part of Full Stack Development
homework.

## Features

- Display a list of students.
- Display individual student cards.
- Pass data between components using props.
- Show student learning status (Active / Paused).
- Conditional rendering for minor students.
- Display a message when the student list is empty.
- Calculate the total number of students automatically.
- Display the total number of students above the student list.

## Student Data

The application contains 5 students:

- 4 active students.
- 1 student on pause.
- 1 student under 18 years old.

## Technologies

- React
- JavaScript
- JSX
- CSS
- Vite

## Project Structure

src/
- components/
    - Header.jsx
    - Footer.jsx
    - StatusBadge.jsx
    - StudentCard.jsx
    - StudentList.jsx
- data/
    - students.js
- App.jsx
- App.css
- main.jsx

## How to Run

1. Clone the repository.
2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

4. Open the local URL displayed in the terminal.

## Important Notes

- All student data is static and stored locally.
- No backend is used.
- No forms or state management are implemented.
