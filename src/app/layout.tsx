import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Pacific Design Landscape',
  description: 'Professional landscaping services in your area.',
  keywords: ['landscaping', 'landscape', 'garden design', 'yard services'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
