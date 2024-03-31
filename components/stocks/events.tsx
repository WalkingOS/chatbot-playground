import { format, parseISO } from 'date-fns'

interface Event {
  date: string
  headline: string
  description: string
}

export function Events({ events }: { events: Event[] }) {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {events.map(({ date, headline, description }) => (
        <div
          key={date}
          className="flex shrink-0 shadow-lg bg-white flex-col gap-1 rounded-lg p-4"
        >
          <div className="text-sm">
            {format(parseISO(date), 'dd LLL, yyyy')}
          </div>
          <div className="text-base font-bold">{headline}</div>
          <p>{description.slice(0, 70)}...</p>
        </div>
      ))}
    </div>
  )
}
