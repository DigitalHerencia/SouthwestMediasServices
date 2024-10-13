module.exports = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dm5q33sjr/**", // Corrected to match your Cloudinary account's path
            },
        ],
    },
}
