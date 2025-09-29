import "./globals.css";
import Header from "../components/Header/page.jsx";
import Footer from "./../components/Footer/page.jsx";

export const metadata = {
    title: "Respira Aurora",
    description: "Site de Meditação e Bem-Estar",
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