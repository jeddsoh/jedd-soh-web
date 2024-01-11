export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container max-w-screen-lg px-6">
           {children}
        </div>
    )
}