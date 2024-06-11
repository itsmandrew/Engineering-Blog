import Link from "next/link";

export const metadata = {
  title: "Andrew's Blog",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>Andrew's Blog</h1>
        </Link>
        <p>Welcome to my engineering blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <p>Developed by Andrew</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
