import './globals.css'
import Cursor from './_components/Cursor';
import Background from './_components/Background';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Cursor />
        <Background />
        {children}
      </body>
    </html>
  );
}
