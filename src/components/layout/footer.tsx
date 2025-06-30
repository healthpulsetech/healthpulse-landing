  export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} HealthPulse. All rights reserved.</p>
                    <nav className="space-x-4">
                        <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                    </nav>
                </div>
            </div>
        </footer>

    );
      }