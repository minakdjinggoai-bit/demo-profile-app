import './globals.css';
export const metadata = { title: 'Profile Demo', description: 'DevResolve intentionally buggy demo app' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
