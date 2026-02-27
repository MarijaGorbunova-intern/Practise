type LayoutProps = { children: React.ReactNode }

export default function GamesLayout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {}
      <h2 className="text-2xl font-bold mb-4">Games Section</h2>
      {children} {}
    </div>
  )
}