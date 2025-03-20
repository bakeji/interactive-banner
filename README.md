# Banner

This is a React application that allows users to manage and customize a banner. The banner content is persisted in `localStorage`, so it remains intact even after a page reload. The app consists of two main components: `Banner` (for displaying the banner) and `BannerForm` (for editing the banner content).

## Features

- **Customizable Banner**: Users can update the banner's title, content, background color, text color, and image.
- **Persistent State**: The banner content is saved to `localStorage` and restored on page reload.
- **Responsive Design**: The app is designed to work seamlessly on different screen sizes.

## Components

### 1. `Banner`
Displays the banner with the following customizable properties:
- **Title**: The main heading of the banner.
- **Content**: A short description or message.
- **Picture**: An image displayed in a circular frame.
- **Background Color**: The background color of the banner.
- **Text Color**: The color of the text in the banner.

### 2. `BannerForm`
Provides a form for users to edit the banner content. It includes:
- Input fields for the title and content.
- A file input for uploading an image.
- Color pickers for selecting the background and text colors.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/banner-management-app.git
   cd banner-management-app

2. **Install dependencies**:
    ```bash
    pnpm install

3. **Run the app**:
    ```bash
    pnpm start

4. **Run tests**:
    ```bash
    npm test

## Code Structure

### **`App.js`**
- The root component that manages the application state.
- Uses a custom `useLocalStorage` hook to persist banner content in `localStorage`.
- Passes the `bannerContent` state and updater function (`setBannerContent`) to child components.

### **`components/Banner.js`**
- Displays the banner with dynamic styling based on the `bannerContent` prop.
- Renders:
  - A circular profile image
  - Customizable title and text content
  - Background and text colors controlled by state

### **`components/BannerForm.js`**
- Provides an interactive form to update the banner content.
- Features:
  - Text inputs for title and content
  - File upload for images (converts to Base64 URL)
  - Color pickers for background and text colors
  - Real-time state updates via `setBannerContent`

### **Tests**
- Located in the `test` directory
- Test files:
  - **`Banner.test.js`**: Verifies the banner renders correctly
  - **`BannerForm.test.js`**: Ensures the form component mounts properly
- Tests check:
  - Component rendering
  - Presence of key elements
  - Basic DOM assertions

## Testing
- The app includes unit tests for the Banner and BannerForm components using @testing-library/react and vitest.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- localStorage: Used to persist the banner content.
- Vitest: A testing framework for running unit tests.
- Tailwind CSS: Used for styling the components.

