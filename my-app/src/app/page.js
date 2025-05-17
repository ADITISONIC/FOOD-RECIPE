import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-amber-200 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-orange-700 mb-6 drop-shadow-lg">
          🍲 Welcome to Recipe Book
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Discover delicious meals and flavorful inspiration!
        </p>
        <Link
          href="/recipe-list"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-700 transition"
        >
          🔍 Explore Recipes
        </Link>
      </div>
    </div>
  );
}
