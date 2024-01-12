export function Section({ children, id }: { children: React.ReactNode; id: string }) {
    return (
        <section id={id} className="flex flex-col items-center w-full">
            {children}
        </section>
    )
}