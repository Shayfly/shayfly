codex/fix-missing-or-invalid-code-in-page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>ברוכים הבאים ל־ShayFly!</h1>
      <p>האתר עובד! 🎉</p>
'use client'
import { useState } from 'react'

export default function Home() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function search() {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        origin,
        destination,
        departDate,
        returnDate,
        passengers: String(passengers)
      })
      const res = await fetch(`/api/search?${params}`)
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setResults(data)
    } catch (e) {
      console.error(e)
      setError('Failed to fetch results')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">ShayFly</h1>
      <div className="grid gap-4 w-full max-w-md">
        <input className="border p-2" placeholder="Origin" value={origin} onChange={e=>setOrigin(e.target.value)} />
        <input className="border p-2" placeholder="Destination" value={destination} onChange={e=>setDestination(e.target.value)} />
        <input className="border p-2" type="date" value={departDate} onChange={e=>setDepartDate(e.target.value)} />
        <input className="border p-2" type="date" value={returnDate} onChange={e=>setReturnDate(e.target.value)} />
        <input className="border p-2" type="number" min="1" value={passengers} onChange={e=>setPassengers(Number(e.target.value))} />
        <button className="bg-blue-600 text-white p-2" onClick={search} disabled={loading}>{loading? 'Searching...' : 'Search'}</button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {results && (
        <pre className="text-left mt-6 w-full max-w-2xl overflow-auto bg-gray-100 p-4">
          {JSON.stringify(results, null, 2)}
        </pre>
      )}
      main
    </main>
  );
}
