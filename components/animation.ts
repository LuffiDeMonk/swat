import { Variants } from "framer-motion";

export const variants: Variants = {
    initial: { y: 10, opacity: 0 },
    whileInView: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1, ease: 'easeInOut' } }
}