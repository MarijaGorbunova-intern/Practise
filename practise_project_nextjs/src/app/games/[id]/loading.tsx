"use client"

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-10 animate-pulse">
      <div className="w-200 h-64 bg-gray-700 rounded-xl mb-6 mx-auto md:mx-0" />
      <div className="h-10 w-1/2 bg-gray-700 rounded mb-4 mx-auto md:mx-0" />
      <div className="space-y-2 mb-8">
        <div className="h-4 w-3/4 bg-gray-700 rounded" />
        <div className="h-4 w-1/2 bg-gray-700 rounded" />
        <div className="h-4 w-1/3 bg-gray-700 rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-5/6 bg-gray-700 rounded" />
      </div>
    </div>
  )
}