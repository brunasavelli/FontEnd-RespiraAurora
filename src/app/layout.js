import "./globals.css";
import Header from "../components/Header/page.jsx";
import Footer from "./../components/Footer/page.jsx";

export const metadata = {
    title: "Meu Projeto Next.js",
    description: "Projeto para mostrar tudo que eu sei",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}