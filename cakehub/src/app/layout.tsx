import "./globals.css";
import { Header} from '../components/header'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CakeHub - Oficina do Bolo',
  description: 'Oficina do Bolo',
  openGraph:{
    title: 'Site da Oficina do Bolo',
    description: 'Site da Oficina do Bolo',
    images: ['https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/Lit_Furnace_%28S%29_JE4.png/revision/latest?cb=20210111063312']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt/br">
      <body
        className={`antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
