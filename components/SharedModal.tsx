import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    ArrowUturnLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { variants } from "../utils/animationVariants"
import downloadPhoto from "../utils/downloadPhoto"
import { range } from "../utils/range"
import type { ImageProps, SharedModalProps } from "../utils/types"

export default function SharedModal({
    index,
    images,
    changePhotoId,
    closeModal,
    navigation,
    currentPhoto,
    direction,
}: SharedModalProps) {
    const [loaded, setLoaded] = useState(false)

    const handlers = useSwipeable({
        onSwipedLeft: () => {},
        onSwipedRight: () => {
            if (index > 0) changePhotoId(index - 1)
        },
        trackMouse: true,
    })

    let currentImage = images ? images[index] : currentPhoto

    return (
        <MotionConfig
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
        >
            <div
                className="relative z-50 flex aspect-[1/1] w-full max-w-7xl items-center"
                {...handlers}
            >
                {/* Main image */}
                <div className="w-full overflow-hidden">
                    <div className="relative flex aspect-[1/1] items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute"
                            >
                                <Image
                                    src={`https://res.cloudinary.com/${
                                        process.env
                                            .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                                    }/image/upload/c_scale,${
                                        navigation ? "w_700" : "w_900"
                                    }/${currentImage?.public_id}.${
                                        currentImage?.format
                                    }`}
                                    width={navigation ? 700 : 900}
                                    height={navigation ? 800 : 1000}
                                    priority
                                    alt="Image"
                                    onLoad={() => setLoaded(true)}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
                    {/* Buttons */}
                    {loaded && (
                        <div className="relative aspect-[3/2] max-h-full w-full">
                            {navigation && (
                                <>
                                    {index > 0 && (
                                        <button
                                            className="button-transform absolute left-48 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                                            onClick={() =>
                                                changePhotoId(index - 1)
                                            }
                                        >
                                            x
                                            <ChevronLeftIcon className="h-6 w-6" />
                                        </button>
                                    )}
                                    {index + 1 < (images?.length ?? 0) && (
                                        <button
                                            className="button-transform absolute right-48 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                                            onClick={() =>
                                                changePhotoId(index + 1)
                                            }
                                        >
                                            x
                                            <ChevronRightIcon className="h-6 w-6" />
                                        </button>
                                    )}
                                </>
                            )}
                            <div className="absolute right-36 top-0 flex items-center gap-2 p-3 text-white">
                                {navigation ? (
                                    <a
                                        href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage?.public_id}.${currentImage?.format}`}
                                        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                                        target="_blank"
                                        title="Open fullsize version"
                                        rel="noreferrer"
                                    >
                                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                                    </a>
                                ) : (
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Next.js%20Conf!%0A%0Ahttps://nextjsconf-pics.vercel.app/p/${index}`}
                                        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                                        target="_blank"
                                        title="Open fullsize version"
                                        rel="noreferrer"
                                    ></a>
                                )}
                                <button
                                    onClick={() =>
                                        downloadPhoto(
                                            currentImage
                                                ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`
                                                : "",
                                            `${index}.jpg`
                                        )
                                    }
                                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                                    title="Download fullsize version"
                                >
                                    <ArrowDownTrayIcon className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="absolute left-48 top-0 flex items-center gap-2 p-3 text-white">
                                <button
                                    onClick={() => closeModal()}
                                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                                >
                                    {navigation ? (
                                        <XMarkIcon className="h-5 w-5" />
                                    ) : (
                                        <ArrowUturnLeftIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MotionConfig>
    )
}
