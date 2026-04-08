import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <div className="mb-8">
                <span className="text-8xl md:text-9xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    404
                </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-400 max-w-md mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
                ← Back to Home
            </Link>
        </div>
    );
}

