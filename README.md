# The Wild Oasis Website

This is the official customer-facing website for The Wild Oasis hotel. Built with Next.js, it provides a fast, modern, and informative experience for potential guests, allowing them to explore cabins and view hotel offerings.

## Live Demo

You can view the live deployment of the website here:

  * **Vercel Deployment:** [The Wild Oasis Website](https://the-wild-oasis-website-by-amin.vercel.app/)

## Key Features

  * **Server-Side Rendering (SSR):** Built with Next.js for fast initial page loads and excellent SEO performance.
  * **Cabin Showcase:** A stunning gallery of all available cabins, with detailed descriptions, professional images, and pricing information.
  * **Dynamic Filtering:** Guests can easily filter cabins based on their capacity to find the perfect match for their stay.
  * **Modern UI:** A clean and responsive user interface styled with Tailwind CSS, ensuring a seamless experience on all devices.
  * **Smooth Animations:** Subtle page and element animations powered by Framer Motion for an enhanced user experience.

## Technologies Used

  * **Next.js:** A React framework for building production-grade, server-rendered applications.
  * **React:** For building the user interface with the Next.js App Router.
  * **Tailwind CSS:** A utility-first CSS framework for rapid and responsive UI development.
  * **Supabase:** Provides the backend service for fetching real-time data about cabins.
  * **Framer Motion:** For creating smooth and beautiful animations and transitions.
  * **date-fns:** A utility library for handling and formatting dates.

## Relationship to the Internal App

This website serves as the public-facing storefront for The Wild Oasis hotel and is a companion to the internal management application, **[The Wild Oasis](https://github.com/amin-kian/The-Wild-Oasis)**.

  * **Customer Website (This Project):** A Next.js site designed for guests to view cabins and hotel information with optimal performance.
  * **Internal App (The Wild Oasis):** A separate React application used by hotel employees to manage all internal operations, including bookings, guest check-ins, and cabin details.

The two projects are linked through a shared **Supabase** backend, ensuring that the cabin details and availability shown to customers are always up-to-date with the information managed by the hotel staff.

## Setup Instructions

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amin-kian/The-Wild-Oasis-Website.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd The-Wild-Oasis-Website
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env.local` file in the root directory. You will need to add your Supabase project URL and the public `anon` key, prefixed for Next.js.
    ```
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
    NEXT_PUBLIC_SUPABASE_KEY="YOUR_SUPABASE_ANON_KEY"
    ```
5.  **Start the development server:**
    ```bash
    npm run dev
    ```
6.  **Open in browser:**
    Access the application at `http://localhost:3000` in your web browser.

## Learnings

This project focused on leveraging the power of Next.js to build a high-performance, server-rendered website. Key concepts explored include:

  * **Next.js App Router:** Utilizing file-based routing and the latest features for structuring a modern web application.
  * **Server Components & Client Components:** Understanding the difference and using them effectively to optimize performance.
  * **Server-Side Data Fetching:** Fetching data directly on the server to reduce client-side load times and improve SEO.
  * **Utility-First Styling:** Building a complex and responsive UI efficiently with Tailwind CSS.
  * **Performance Optimization:** Taking advantage of Next.js features like SSR and code splitting out-of-the-box.

## Author

  * **Amin Kian**
      * [GitHub Profile](https://www.google.com/search?q=https://github.com/amin-kian)

## Acknowledgments

This website was developed as a companion to the internal hotel management application from the Udemy course by Jonas Schmedtmann. His comprehensive lessons were instrumental in the creation of both projects.
