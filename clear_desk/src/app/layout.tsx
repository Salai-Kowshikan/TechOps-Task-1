// app/layout.tsx (or wherever your RootLayout is located)
import "./globals.css";
import QueryProvider from "@/components/QueryProvider"; // adjust path if needed

export const metadata = {
  title: "Admin Dashboard",
  description: "Complaint system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

