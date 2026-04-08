// Cloudflare Pages Function — saves email to KV
// KV namespace binding: SUBSCRIBERS

interface Env {
  SUBSCRIBERS: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store with timestamp as value, email as key (deduplicates automatically)
    await context.env.SUBSCRIBERS.put(email, JSON.stringify({
      email,
      subscribed_at: new Date().toISOString(),
      source: 'landing-page',
    }));

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// GET to list all subscribers (for admin use)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const list = await context.env.SUBSCRIBERS.list();
  const subscribers = await Promise.all(
    list.keys.map(async (key) => {
      const val = await context.env.SUBSCRIBERS.get(key.name);
      return val ? JSON.parse(val) : { email: key.name };
    })
  );

  return new Response(JSON.stringify({ count: subscribers.length, subscribers }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
