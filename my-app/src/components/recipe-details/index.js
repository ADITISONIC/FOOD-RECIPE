import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 to-orange-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/recipe-list"
          className="inline-block mb-6 text-orange-600 hover:text-orange-800 font-semibold transition"
        >
          ← Back to Recipe List
        </Link>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {getRecipeDetails?.name}
            </h2>

            <p className="text-xl text-orange-700 font-medium mb-2">
              {getRecipeDetails?.mealType[0]}
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Cuisine:{" "}
              <span className="font-semibold">{getRecipeDetails?.cuisine}</span>
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🧂 Ingredients
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                {getRecipeDetails?.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
