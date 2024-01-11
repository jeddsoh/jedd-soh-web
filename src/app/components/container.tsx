export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container max-w-screen-lg p-6">
           {children}
        </div>
    )
}