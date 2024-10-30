import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "frontend-journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen bg-gray-100">
          <aside className="bg-white w-64 p-6 border-r border-gray-200">
            <div className="flex items-center space-x-2 mb-6 border-b border-gray-200 py-6">
              <span>Dashboard</span>
            </div>
            <div className="flex-1 mt-6"></div>
          </aside>

          <section className="flex-1 p-8 bg-white mt-4 ml-4 mb-4 rounded-lg shadow-md border border-gray-200">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
