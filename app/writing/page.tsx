import Link from "next/link";

export default function Writing() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-950 items-center justify-center text-white px-6">
      <h1 className="text-5xl font-bold mb-4 tracking-tight">
        Writing
      </h1>
      <p className="text-lg text-gray-400 mb-10 text-center max-w-md">
        I must've hit a writer's block. Please check back later for new posts—my thoughts are brewing.
      </p>
      
      <Link href="/" className="text-blue-400 hover:underline text-sm">
        ← Back to home
      </Link>
    </div>
  );
}
