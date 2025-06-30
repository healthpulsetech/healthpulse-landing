
import Link from "next/link";
const Header = () => {
    return (
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">HealthPulse</h1>
            </div>
            <nav className="flex space-x-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
            </div>
        </div>
        </header>
    );
}
export default Header;