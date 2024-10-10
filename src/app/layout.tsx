// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A fully responsive blogging website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fade-in bg-custom min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black flex items-center justify-between p-4 text-red-700 fixed top-0 w-full z-10">
          <div className="flex items-center">
            <img 
              src="https://media.istockphoto.com/id/2152533431/vector/white-plus-symbol-on-red-background.jpg?s=612x612&w=0&k=20&c=Ylp5Xq7PIrL1DTY08bIZ_lcxkD0vO2iqOwg96qWlF_w=" 
              className="rounded-3xl h-10 w-auto mr-4" 
              alt="" 
            />
            <h1 className="text-xl font-bold">Taqi&apos;S Blogging Website</h1>
          </div>
          <img 
            src="https://media.istockphoto.com/id/2152533431/vector/white-plus-symbol-on-red-background.jpg?s=612x612&w=0&k=20&c=Ylp5Xq7PIrL1DTY08bIZ_lcxkD0vO2iqOwg96qWlF_w=" 
            className="rounded-3xl h-10 w-auto" 
            alt="Right Image" 
          />
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-black p-4 text-red-600">
          <p className="text-center ">&copy; 2024 My Blog. All rights reserved.
          {/* <a href="" className='font-bold uppercase  text-black text-center p-3 rounded-3xl transition mt-4  '>about me</a> */}
          </p>
        </footer>
      </body>
    </html>
  );
}
