# The Wild Oasis Website

This repository contains the source code for "The Wild Oasis," a hotel management web application.

## Live Demo

You can view the deployed application here: [https://the-wild-oasis-website-by-amin.vercel.app/](https://the-wild-oasis-website-by-amin.vercel.app/)

-----

## Description

The Wild Oasis is a comprehensive web application for managing a boutique hotel. It provides a user-friendly interface for hotel staff to manage cabins, bookings, and guest information. The application features a dashboard for a quick overview of daily operations and includes secure user authentication.

-----

## Features

  * **Authentication**: Secure user sign-up and login.
  * **Dashboard**: An overview of daily activities, including recent bookings, check-ins, and check-outs.
  * **Bookings Management**: Create, view, update, and delete bookings with real-time status updates.
  * **Cabins Management**: Manage cabin details, including images, pricing, and descriptions.
  * **Guest Management**: Keep track of guest information and their booking history.
  * **Dark Mode**: Toggle between light and dark themes for better user experience.
  * **Error Handling**: Graceful error handling with custom error boundaries to ensure a smooth user experience.

-----

## Technologies Used

  * **Frontend**: React, React Router, Styled Components
  * **State Management**: React Context API
  * **Data Fetching**: React Query
  * **Backend & Database**: Supabase (PostgreSQL, Authentication, Storage)
  * **Build Tool**: Vite
  * **Utilities**: `date-fns` for date manipulation and `react-icons` for icons.

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/amin-kian/The-Wild-Oasis-Website.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Set up your environment variables. Create a `.env.local` file in the root of your project and add the necessary Supabase credentials. You can find these in your Supabase project settings.
    ```
    VITE_SUPABASE_URL=YOUR_SUPABASE_URL
    VITE_SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

-----

## Acknowledgments

This project was built as part of a learning experience, inspired by modern web development courses and projects.
