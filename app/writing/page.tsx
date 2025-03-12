import Link from "next/link";

export default function Writing() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-black to-gray-900 items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-2">Writing</h1>
      <p className="text-lg text-gray-400 mb-6">
        Please let me know what you think of my scribbles.
      </p>
      
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <Link href="/writing/" className="block">
          <div className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold">
              Most Important Lesson I&apos;ve Learned in Software Engineering
            </h2>
          </div>
        </Link>
        <Link href="/writing/" className="block">
          <div className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold">
              In defence of fantasy
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
