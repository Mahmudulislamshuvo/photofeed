# PhotoFeed

![Project Logo](./public/lws_logo.png)

A modern and beautiful web application for sharing and exploring photos. This project is built with Next.js and Tailwind CSS, featuring a clean and intuitive user interface.

## Live Demo

https://github.com/user-attachments/assets/0d7d5614-492e-4336-ae60-017c1f5e9384

## Features

- **Browse Photos:** View a beautiful gallery of photos.
- **View Photo Details:** Click on a photo to see more details.
- **Modal Photo View:** Utilizes Next.js Intercepting Routes to show photo details in a modal, keeping the context of the gallery.
- **Internationalization:** Supports both English and Bengali languages.
- **Responsive Design:** Works seamlessly on all devices.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting:** [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Mahmudulislamshuvo/photofeed
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `dev`: Runs the app in the development mode.
- `build`: Builds the app for production.
- `start`: Starts the production server.
- `lint`: Lints the code.

## Project Structure

```
.
├── app
│   ├── [lang]
│   │   ├── (․)photos
│   │   ├── dictionaries
│   │   └── photos
│   └── api
│       └── photos
├── components
├── lib
├── public
└── ...
```

- `app`: Contains the core application code, including pages and API routes.
- `app/[lang]`: Internationalized pages.
- `app/api`: API routes.
- `components`: Reusable React components.
- `lib`: Utility functions.
- `public`: Static assets.
