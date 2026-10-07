// Cloudflare Pages Function
// Route: POST /api
// Environment variable required: GAS_API_URL

export async function onRequestPost(context) {
  const gasUrl = context.env.GAS_API_URL;

  if (!gasUrl) {
    return new Response(JSON.stringify({
      success: false,
      error: 'GAS_API_URL belum dikonfigurasi di Cloudflare Pages.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await context.request.text();

    const upstream = await fetch(gasUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    });

    const responseBody = await upstream.text();

    return new Response(responseBody, {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error && error.message ? error.message : String(error)
    }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestGet() {
  return new Response(JSON.stringify({
    success: true,
    service: 'Hanoman Attendance API Proxy'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
