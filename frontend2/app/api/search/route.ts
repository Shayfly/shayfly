import { NextRequest, NextResponse } from 'next/server';

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

  // Travelpayouts API expects token as a query parameter
  const url = `${apiUrl}?origin=${origin}&destination=${destination}&depart_date=${departDate}&return_date=${returnDate}&passengers=${passengers}&token=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
