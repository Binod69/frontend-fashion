import Navbars from './Components/Navbar/Navbars';
import { Providers } from './Providers';
import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from './ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fashion',
  description: 'Nepal best fashion store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbars />
          <Providers>
            <main>{children}</main>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
