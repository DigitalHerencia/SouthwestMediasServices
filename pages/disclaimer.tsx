import Image from "next/image"

export default function Disclaimer() {
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
                    <h1 className="mb-4 text-3xl font-bold">Disclaimer</h1>
                    <div className="mx-auto mb-20 max-w-lg space-y-4 text-left text-white/75">
                        <p>
                            The information provided by Southwest Media Services
                            (“we,” “us,” or “our”) on this website is for
                            general informational purposes only. All information
                            on the website is provided in good faith, however,
                            we make no representation or warranty of any kind,
                            express or implied, regarding the accuracy,
                            adequacy, validity, reliability, availability, or
                            completeness of any information on the website.
                        </p>

                        <h2 className="font-semibold text-white">
                            1. External Links Disclaimer
                        </h2>
                        <p>
                            Our website may contain (or you may be sent through
                            the website) links to other websites or content
                            belonging to or originating from third parties. Such
                            external links are not investigated, monitored, or
                            checked for accuracy or completeness by us.
                        </p>

                        <h2 className="font-semibold text-white">
                            2. Professional Disclaimer
                        </h2>
                        <p>
                            The site cannot and does not contain photography
                            advice. The photography information is provided for
                            general informational and educational purposes only
                            and is not a substitute for professional advice.
                        </p>

                        <h2 className="font-semibold text-white">
                            3. Limitation of Liability
                        </h2>
                        <p>
                            Under no circumstances shall Southwest Media
                            Services be liable for any direct, indirect,
                            incidental, consequential, or special damages
                            arising out of the use of or inability to use the
                            services, even if we have been advised of the
                            possibility of such damages.
                        </p>

                        <h2 className="font-semibold text-white">
                            4. Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Disclaimer, you
                            can contact us at southwestmediaservices@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
