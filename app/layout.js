import '../styles.css';

export const metadata = {
  title: 'SoftGen - Software Development Company',
  description:
    'We build cutting-edge software solutions that drive innovation and accelerate business growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
