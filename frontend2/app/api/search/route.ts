import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');
  const departDate = searchParams.get('departDate');
  const returnDate = searchParams.get('returnDate');
  const passengers = searchParams.get('passengers');

  const apiUrl = process.env.SEARCH_API_URL;
  const apiKey = process.env.SEARCH_API_KEY;
  if (!apiUrl || !apiKey) {
    return NextResponse.json({ error: 'API configuration missing' }, { status: 500 });
  }

  const url = `${apiUrl}?origin=${origin}&destination=${destination}&departDate=${departDate}&returnDate=${returnDate}&passengers=${passengers}`

  try {
    const apiResponse = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store',
    })
    if (!apiResponse.ok) {
      return NextResponse.json(
        { error: 'Upstream error' },
        { status: apiResponse.status }
      )
    }
    const data = await apiResponse.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
