interface ReceipesFull {
  headline: string
  description: string
  ingredientList: string[]
  utensilList: string[]
  preperationList: string[]
}

export function FullRecipes({
  headline,
  description,
  ingredientList,
  utensilList,
  preperationList,
}: ReceipesFull) {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 pb-4 text-sm sm:flex-row">
        <div className="shadow-lg pr-4 py-4 flex cursor-pointer flex-row gap-2 rounded-lg bg-primary-800 p-2 text-left hover:bg-primary-700 sm:w-52">
          <div className="flex flex-col">
            <div className="font-bold text-zinc-800">{headline}</div>
            <div className="text-zinc-800">{description}</div>

            <div className="h-10"></div>

            <ul className="text-zinc-800">
              {ingredientList.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <div className="h-10"></div>

            <ul className="text-zinc-800">
              {utensilList.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>

            <ul className="text-zinc-800">
              {preperationList.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>

            <div className="h-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
