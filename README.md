
# Healthcare Services Management Web App

A simple React-based web application to manage and display a list of healthcare services. Users can add new services, edit existing ones, and delete services. The form includes validation to ensure that all required fields are filled in correctly.

## Features

- Display a list of healthcare services (name, description, and price).
- Add new healthcare services through a form.
- Edit existing services directly from the list.
- Delete services from the list.
- Inline form validation (all fields are required).

## Technology Stack

- **React**: Front-end library.
- **Tailwind CSS**: For styling and layout.
- **JavaScript (ES6+)**: Core programming language for the app.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can see a demo of the app deployed here: [Healthcare Services App Demo](#) _(Replace with your live URL)_.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/healthcare-services-app.git
   cd healthcare-services-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000` in your browser.

## Usage

### Adding a Service

1. Use the **Add New Service** form to input a service name, description, and price.
2. Click **Add Service** to save the new service.
3. The new service will appear in the list of services.

### Editing a Service

1. In the list of services, click the **Edit** button next to the service you want to edit.
2. The form will populate with the service's current details.
3. Edit the details and click **Update Service** to save the changes.

### Deleting a Service

1. Click the **Delete** button next to the service you want to delete.
2. The service will be removed from the list.

## Folder Structure

```bash
healthcare-services-app
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.png          # Optional logo for the header
│   ├── components
│   │   ├── Header.js         # Header component
│   │   ├── ServiceForm.js    # Form to add/edit services
│   │   └── ServiceList.js    # List to display, edit, and delete services
│   ├── App.js                # Main app entry point
│   └── index.js              # React app entry point
├── tailwind.config.js        # Tailwind CSS configuration
├── README.md                 # This README file
└── package.json              # Project dependencies and scripts
```

## Tailwind CSS

This project uses **Tailwind CSS** for layout and styling. If you'd like to extend the default styles, modify `tailwind.config.js`.

### Example Styling Classes

- **Grid Layout**: The service list uses `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` to handle responsive grid display, allowing 1, 2, or 4 columns based on the screen size.
- **Button Styling**: Buttons are styled using Tailwind's `bg-white text-black` classes with hover transitions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
