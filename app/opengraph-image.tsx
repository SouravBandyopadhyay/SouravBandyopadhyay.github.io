import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 64,
          background: 'linear-gradient(135deg, #f8f6f1 0%, #f4ecd6 100%)',
          color: '#111111',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
          Sourav Bandyopadhyay
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Full-stack developer building thoughtful web products.
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.8 }}>
          React • Next.js • TypeScript • Node.js • Python
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
