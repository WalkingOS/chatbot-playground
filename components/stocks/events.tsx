import { format, parseISO } from 'date-fns'

interface Event {
  date: string
  headline: string
  description: string
}

export function Events({ props: events }: { props: Event[] }) {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {events.map((event) => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg p-4"
        >
          <div className="text-sm">
            {format(parseISO(event.date), 'dd LLL, yyyy')}
          </div>
          <div className="text-base font-bold">{event.headline}</div>
          <p>{event.description.slice(0, 70)}...</p>
        </div>
      ))}
    </div>
  )
}
