// layout.js
import './globals.css'; // Make sure this path is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
