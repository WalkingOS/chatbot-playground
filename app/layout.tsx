import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'

export const metadata = {
  title: {
    default: 'playground',
    template: `%s`,
  },
  description: 'generative ui + ai playground',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased')}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
        </div>
      </body>
    </html>
  )
}
