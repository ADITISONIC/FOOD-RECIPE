import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  return (
    <div className="py-10 px-4 min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-extrabold text-orange-700">
            🍽️ Recipes
          </h2>
          <Link
            href="/"
            className="text-orange-600 font-medium hover:underline hover:text-orange-800 transition"
          >
            ← Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                <Card className="hover:shadow-xl hover:scale-[1.03] transition-all rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="w-full h-56">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-3 flex items-center justify-between text-gray-700">
                        <p className="text-sm">⭐ Rating: {recipe.rating}</p>
                        <p className="text-sm font-medium">{recipe.cuisine}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 text-lg">
              No recipes found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
