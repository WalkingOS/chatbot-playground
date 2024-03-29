import * as React from 'react'

import { PromptForm } from '@/components/prompt-form'
import { useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
}

export function ChatPanel({ input, setInput }: ChatPanelProps) {
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            exampleMessages.map(({ heading, subheading, message }, index) => (
              <div
                key={heading}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-primary-50 dark:bg-primary-950 dark:hover:bg-primary-900 ${
                  index > 1 && 'hidden md:block'
                }`}
                onClick={async () => {
                  setMessages((currentMessages) => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{message}</UserMessage>,
                    },
                  ])

                  const responseMessage = await submitUserMessage(message)

                  setMessages((currentMessages) => [
                    ...currentMessages,
                    responseMessage,
                  ])
                }}
              >
                <div className="text-sm font-semibold">{heading}</div>
                <div className="text-sm text-zinc-600">{subheading}</div>
              </div>
            ))}
        </div>

        <div className="py-2 shadow-sm md:py-4">
          <PromptForm input={input} setInput={setInput} />
        </div>
      </div>
    </div>
  )
}

const exampleMessages = [
  {
    heading: 'What are the',
    subheading: 'trending memecoins today?',
    message: `What are the trending memecoins today?`,
  },
  {
    heading: 'What is the price of',
    subheading: '$DOGE right now?',
    message: 'What is the price of $DOGE right now?',
  },
  {
    heading: 'I would like to buy',
    subheading: '42 $DOGE',
    message: `I would like to buy 42 $DOGE`,
  },
  {
    heading: 'What are some',
    subheading: `recent events about $DOGE?`,
    message: `What are some recent events about $DOGE?`,
  },
]
