import Image from "next/image"

export default function TermsOfService() {
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

                {/* Title and Content */}
                <div className="relative z-10 mt-96 text-center">
                    <h1 className="mb-4 text-3xl font-bold">
                        Terms of Service
                    </h1>
                    <div className="mx-auto mb-20 max-w-lg space-y-4 text-left text-white/75">
                        <p>
                            Welcome to Southwest Media Services. By using our
                            website and services, you agree to be bound by the
                            following terms and conditions. Please read them
                            carefully.
                        </p>

                        <h2 className="font-semibold text-white">
                            1. General Conditions
                        </h2>
                        <p>
                            We reserve the right to refuse service to anyone for
                            any reason at any time. You understand that your
                            content (excluding credit card information) may be
                            transferred unencrypted and involve transmissions
                            over various networks.
                        </p>

                        <h2 className="font-semibold text-white">
                            2. Services and Pricing
                        </h2>
                        <p>
                            Our pricing for photography services is subject to
                            change without notice. We reserve the right to
                            modify or discontinue any service (or any part or
                            content thereof) without notice.
                        </p>

                        <h2 className="font-semibold text-white">
                            3. Cancellations
                        </h2>
                        <p>
                            Cancellations must be made at least 48 hours before
                            the scheduled session to be eligible for a refund.
                            Cancellations made less than 48 hours in advance
                            will incur a cancellation fee.
                        </p>

                        <h2 className="font-semibold text-white">
                            4. Intellectual Property
                        </h2>
                        <p>
                            All content provided on the Southwest Media Services
                            website, including images, designs, and text, are
                            owned by or licensed to Southwest Media Services and
                            are protected by copyright laws.
                        </p>

                        <h2 className="font-semibold text-white">
                            5. Contact Information
                        </h2>
                        <p>
                            If you have any questions regarding our Terms of
                            Service, feel free to contact us at
                            southwestmediaservices@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
