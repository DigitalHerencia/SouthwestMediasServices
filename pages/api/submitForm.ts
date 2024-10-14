import { NextApiRequest, NextApiResponse } from "next"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with your API Key from the .env file
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            phone,
            eventType,
            eventDate,
            eventTime,
            eventLocation,
            packageSelected,
            additionalServices,
            agreement,
        } = req.body

        try {
            // Compose the email content
            const emailContent = `
        <h3>New Photography Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Time:</strong> ${eventTime}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Selected Package:</strong> ${packageSelected}</p>
        <p><strong>Additional Services:</strong> ${
            additionalServices.join(", ") || "None"
        }</p>
        <p><strong>Agreement Accepted:</strong> ${agreement ? "Yes" : "No"}</p>
      `

            // Send the email using SendGrid
            const msg = {
                to: "southwestmediaservices@gmail.com", // Change this to the recipient email address
                from: "digitalherencia@outlook.com", // The sender's email address
                subject: "New Photography Booking Request",
                html: emailContent,
            }

            await sgMail.send(msg)

            // Respond with success
            return res
                .status(200)
                .json({
                    message: "Form submitted and email sent successfully.",
                })
        } catch (error) {
            console.error(
                "SendGrid error:",
                error.response?.body || error.message
            )
            return res
                .status(500)
                .json({ message: "Failed to send email", error: error.message })
        }
    } else {
        // Handle unsupported HTTP methods
        return res.status(405).json({ message: "Method not allowed" })
    }
}
