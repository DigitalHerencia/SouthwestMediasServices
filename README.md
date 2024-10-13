# 📸 Next.js Image Gallery with Cloudinary

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-blue.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Enabled-yellow.svg?style=flat&logo=cloudinary)](https://cloudinary.com/)
[![License](https://img.shields.io/github/license/yourusername/your-repo.svg)](./LICENSE)

A modern, responsive image gallery built with **Next.js**, **Cloudinary**, and **TypeScript**, featuring modal lightbox functionality, optimized image loading with blur placeholders, and seamless state management for user navigation.

## 🖼️ Features

- **Optimized Images**: Integrated with [Cloudinary](https://cloudinary.com) for automatic image optimization.
- **Blur Placeholders**: Enhance UX with blurred image placeholders during image loading.
- **Responsive Gallery**: Fully responsive grid layout for displaying images.
- **Modal Lightbox**: View images in a modal popup for full-screen mode.
- **State Preservation**: Scroll back to the last viewed photo with persistent state.

## 🚀 Demo

Check out a live demo of the project:  
**[Live Demo](https://southwestmediaservices.vercel.app/p)**

---

## ⚙️ Installation

1. **Clone the repository:**
  
   ```
   git clone https://github.com/DigitalHerencia/southwestmediaservices
   cd southwestmediaservices
   ```

2. **Install dependencies:**

    ```
    npm install
    ```
        or
    ```
    yarn install
    ```

3. **Set up environment variables:**

    Create a .env.local file in the root directory and add your Cloudinary credentials:

    ```
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-name
    CLOUDINARY_API_KEY=your-api-key
    CLOUDINARY_API_SECRET=your-api-secret
    CLOUDINARY_FOLDER=your-folder-name
     ```

4. **Run the development server:**

    ```
    npm run dev
    ```

Open `http://localhost:3000` to view the application in your browser.

## 🛠️ Usage

To add images, simply upload them to your Cloudinary account in the folder defined by `CLOUDINARY_FOLDER`.

The application will fetch these images automatically from Cloudinary using their API.
Images will display in a responsive grid and can be viewed in full-screen via the modal.
 
## 📦 Deployment

To deploy the project to Vercel, follow these steps:

1. Push your repository to GitHub.

2. Sign in to Vercel, and import your repository.

3. Vercel will automatically set up your project and deploy it.

## 📚 Technologies

- Next.js - React framework with hybrid static & server rendering
- TypeScript - Type-safe JavaScript
- Cloudinary - Cloud-based image and video management
- Tailwind CSS - Utility-first CSS framework

## 💻 Local Development

To start the app in development mode, run the following:

```
npm run dev
```

This will start the development server on http://localhost:3000.

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙌 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## 👏 Acknowledgments

- Thanks to Vercel for hosting the demo.
- Thanks to Cloudinary for image optimization services.

## 📧 Contact

For any inquiries, feel free to reach out at DigitalHerencia@Outlook.com.