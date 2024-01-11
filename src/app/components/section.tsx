export function Section({ children }: { children: React.ReactNode }) {
    return (
        <section id="hero" className="flex flex-col items-center w-full">
            {children}
        </section>
    )
}