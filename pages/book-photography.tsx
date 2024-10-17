import { title } from "process"

export default function BookPhotography() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#151515]">
            {/* Container for Center Alignment */}
            <div className="h-full w-full">
                {/* Responsive Google Form Embed */}
                <div className="flex justify-center">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd08cULYWrBq9t0yXe5WxoeforaK5NLf1EH0A0Tq_eHi52RQg/viewform"
                        width="800px"
                        height="1000px"
                        title="Booking Form"
                        className="min-w-screen min-h-screen"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    )
}
