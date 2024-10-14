import { useState } from "react"
import Image from "next/image"
import { type } from "os"

export default function BookPhotography() {
    const [selectedPackage, setSelectedPackage] = useState("standard")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Handle form submission logic here
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#151515] text-white">
            {/* Background with Image and Gradient Overlay */}
            <div className="relative w-full max-w-2xl rounded-lg bg-[#151515] p-8 text-white">
                {/* Logo as Background */}
                <div className="absolute inset-0 flex items-baseline justify-center opacity-100">
                    <Image
                        src="/Grey.png"
                        alt="Logo Background"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Title and Description */}
                <div className="relative z-10 mt-96 text-center">
                    <h1 className="text-3xl font-bold">EVENT PHOTOGRAPHY</h1>
                    <h1 className="mb-4 text-2xl font-bold">REQUEST FORM</h1>
                    <p className="mx-auto max-w-xl text-left text-white/75">
                        Choose from our photography packages and extras to
                        create the perfect memories for your special event.
                        Whether it&apos;s a wedding, family gathering, or
                        milestone celebration, our services capture every moment
                        with creativity and precision.
                    </p>
                </div>

                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="relative z-10 mb-20 mt-6 space-y-6"
                >
                    {/* Contact Information */}
                    <label className="mb-2 block text-xl font-semibold text-white">
                        <h1>
                            <strong>1. CONTACT INFORMATION</strong>
                        </h1>
                    </label>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>

                    {/* Event Details */}
                    <label className="mb-2 block text-xl font-semibold text-white">
                        <h1>
                            <strong>2. EVENT DETAILS</strong>
                        </h1>
                    </label>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Type of Event
                        </label>
                        <select
                            className="block w-full appearance-none rounded-md border  border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        >
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="family">Family Gathering</option>
                            <option value="portrait">Portrait Session</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Event Date
                        </label>
                        <input
                            type="date"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Event Time
                        </label>
                        <input
                            type="time"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block font-medium text-white">
                            Event Location
                        </label>
                        <input
                            type="text"
                            className="block w-full rounded-md border border-gray-200 bg-[#5f5f5f] p-3 text-white/75"
                            required
                        />
                    </div>

                    {/* Package Selection */}
                    <div>
                        <label className="mb-6 block text-xl font-semibold text-white">
                            <h1>
                                <strong>3. SELECT YOUR PACKAGE</strong>
                            </h1>
                        </label>

                        {/* Use grid to create a three-column layout */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {/* Pro Package */}
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="pro"
                                        name="package"
                                        value="pro"
                                        checked={selectedPackage === "pro"}
                                        onChange={() =>
                                            setSelectedPackage("pro")
                                        }
                                        className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                    />
                                    <label
                                        htmlFor="pro"
                                        className="ml-3 text-white"
                                    >
                                        $250 Pro Package
                                    </label>
                                </div>
                                <ul className="ml-7 list-disc text-white/75">
                                    <li>2 hours of coverage</li>
                                    <li>100 edited photos</li>
                                    <li>online photo gallery</li>
                                </ul>
                            </div>

                            {/* Pro+ Package */}
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="pro+"
                                        name="package"
                                        value="pro+"
                                        checked={selectedPackage === "pro+"}
                                        onChange={() =>
                                            setSelectedPackage("pro+")
                                        }
                                        className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                    />
                                    <label
                                        htmlFor="pro+"
                                        className="ml-3 text-white"
                                    >
                                        $500 Pro+ Package
                                    </label>
                                </div>
                                <ul className="ml-7 list-disc text-white/75">
                                    <li>4 hours of coverage</li>
                                    <li>250 edited photos</li>
                                    <li>online photo gallery</li>
                                    <li>photo usb drive</li>
                                </ul>
                            </div>

                            {/* ProXL Package */}
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="proXL"
                                        name="package"
                                        value="proXL"
                                        checked={selectedPackage === "proXL"}
                                        onChange={() =>
                                            setSelectedPackage("proXL")
                                        }
                                        className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                    />
                                    <label
                                        htmlFor="proXL"
                                        className="ml-3 text-white"
                                    >
                                        $750 ProXL Package
                                    </label>
                                </div>
                                <ul className="ml-7 list-disc text-white/75">
                                    <li>8 hours of coverage</li>
                                    <li>500 edited photos</li>
                                    <li>online photo gallery</li>
                                    <li>photo usb drive</li>
                                    <li>custom photobook</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                        <label className="mb-4 block text-xl font-semibold text-white">
                            <h1>
                                <strong>4. ADDITIONAL SERVICES</strong>
                            </h1>
                        </label>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="Slideshow"
                                    name="Slideshow"
                                    className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                />
                                <label
                                    htmlFor="Slideshow"
                                    className="ml-3 text-white"
                                >
                                    Image Slideshow - $75
                                    <span className="block text-sm text-white/75">
                                        Image slideshow of event highlights for
                                        social media
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="Second Photographer"
                                    name="Second Photographer"
                                    className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                />
                                <label
                                    htmlFor="Second Photographer"
                                    className="ml-3 text-white"
                                >
                                    Second Photographer - $150
                                    <span className="block text-sm text-white/75">
                                        Additional photographer for the event
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="Video"
                                    name="Video"
                                    className="h-4 w-4 border-gray-200 bg-[#5f5f5f] text-white/75 focus:ring-white/75"
                                />
                                <label
                                    htmlFor="Video"
                                    className="ml-3 text-white"
                                >
                                    Videography - $250
                                    <span className="block text-sm text-white/75">
                                        Professionally recorded and edited recap
                                        video of the event
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer and Terms of Service */}
                    <div className="rounded-md border border-gray-200 bg-[#151515] p-4">
                        <label className="mb-2 block text-xl font-semibold text-white">
                            <h1>
                                <strong>USER AGREEMENT</strong>
                            </h1>
                        </label>
                        <div className="mt-4 flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                required
                                className="h-4 w-4 border-gray-200 bg-[#161616] text-white/75 focus:ring-[#161616]"
                            />
                            <label htmlFor="terms" className="ml-3 text-white">
                                I have read and agree to the &#160;
                                <a
                                    href="/terms-of-service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Terms of Service
                                </a>
                                &#160; and &#160;
                                <a
                                    href="/disclaimer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Disclaimer
                                </a>
                                .
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full rounded-md border border-white bg-white px-4 py-3 text-2xl font-medium text-black shadow-sm transition duration-300 hover:bg-[#161616] hover:text-white"
                        >
                            SUBMIT REQUEST
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
