export default function App() {
  const handleRedirect = () => {
    window.location.href = "https://github.com/Zaid-B24/React-Vite-Tailwind-Boilerplate"
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xl w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="px-8 py-12 sm:p-16 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Supercharged Boilerplate for
            <span className="block text-yellow-500">Tailwind CSS, Vite & React</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Start by editing{" "}
            <code className="font-mono text-gray-800 bg-gray-100 rounded-md px-2 py-1">
              src/App.tsx
            </code>
          </p>
          <button onClick={handleRedirect} className="px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
