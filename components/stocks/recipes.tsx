'use client'

import { useActions, useUIState } from 'ai/rsc'

import type { AI } from '@/lib/chat/actions'

interface Recipes {
  headline: string
  description: string
}

export function Recipes({ recipes }: { recipes: Recipes[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 pb-4 text-sm sm:flex-row">
        {recipes.map(({ headline, description }) => (
          <button
            key={headline}
            className="shadow-lg pr-4 py-4 flex cursor-pointer flex-row gap-2 rounded-lg bg-primary-800 p-2 text-left hover:bg-primary-700 sm:w-52"
            onClick={async () => {
              const response = await submitUserMessage(
                `give me the full receipe of ${headline}`,
              )
              setMessages((currentMessages) => [...currentMessages, response])
            }}
          >
            <div className="flex flex-col">
              <div className="font-bold text-zinc-800">{headline}</div>
              <div className="text-zinc-800">{description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
