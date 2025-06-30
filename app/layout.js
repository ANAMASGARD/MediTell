import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediTell",
  description: "Connecting patients with healthcare providers, realtime video call and appointment booking",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex min-h-screen flex-col pt-20">
              {children}
            </main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto text-center text-gray-200 p-4">
                <p>
                  Made with ❤️ by Gaurav Chaudhary
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}