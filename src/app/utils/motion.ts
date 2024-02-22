interface Motion {
    direction?: string;
    type?: string;
    delay?: number;
    duration?: number;
    staggerChildren?: any
    delayChildren?: any
}

export function slideIn(direction: string, type: string, delay: number, duration: number) {
    return {
        hidden: {
            x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
            y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
}

export function slideOut(direction: string, type: string, delay: number, duration: number) {
    return {
        hidden: {
            x: 0,
            y: 0,
        },
        show: {
            x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeIn",
            },
        },
    };
}

export function fadeIn(direction: string, type: string, delay: number, duration: number) {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
}

export function fadeOut(direction: string, type: string, delay: number, duration: number) {
    return {
        hidden: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        show: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeIn",
            },
        },
    };
}

export function zoomIn(delay?: number, duration?: number) {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                ease: "easeOut",
                delay,
                duration,
            },
        },
    };
}

export function zoomOut(delay?: number, duration?: number) {
    return {
        hidden: {
            scale: 1,
            opacity: 1,
        },
        show: {
            scale: 0,
            opacity: 0,
            transition: {
                type: "tween",
                ease: "easeIn",
                delay,
                duration,
            },
        },
    };
}

export function staggerContainer(staggerChildren?: any, delayChildren?: any) {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    };
}

export function textVariants(delay?: number) {
    return {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay,
            },
        },
    };
}

export function textContainer() {
    return {
        hidden: {
            opacity: 0,
        },
        show: (index = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: index * 0.1,
            },
        }),
    };
}
