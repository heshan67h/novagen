import { ImageResponse } from 'next/og';
import React from 'react';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'NovaGen - Software Development Company';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Font loading (optional, but recommended for consistent look)
  // We'll use a standard system font stack for simplicity and speed in this example,
  // but you can load custom fonts if needed.

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // Dark background from your theme
          backgroundImage: 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'rgba(56, 189, 248, 0.15)', // Light blue glow
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '500px',
            height: '500px',
            background: 'rgba(59, 130, 246, 0.1)', // Darker blue glow
            filter: 'blur(120px)',
            borderRadius: '50%',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo / Brand Name */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              background: 'linear-gradient(to bottom right, #ffffff 30%, #38bdf8 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
              letterSpacing: '-0.05em',
            }}
          >
            NovaGen
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#94a3b8', // Slate-400
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Software Development Company
          </div>

          {/* Additional Info / Badge */}
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
              padding: '10px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: '#e2e8f0',
                fontWeight: 600,
              }}
            >
              AI Solutions • Web • Mobile
            </div>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
