import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffbe7] text-center">
            <h1 className="text-4xl font-bold text-[#d2691e] mb-4">
                Bem-vindo ao Site da Oficina!
            </h1>
            <h3 className="text-2xl text-[#ff4500] mb-2">
                O Bolo ainda está no Forno
            </h3>
            <p className="text-lg text-gray-700 mb-1">
                Esta é uma página hospedada da Oficina do Bolo no GitHub Pages.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Atualmente estamos em desenvolvimento.
            </p>
            <h1 className="text-2xl font-bold text-[#d2691e] mb-6">
                Tenham Paciência
            </h1>
        </div>
    );
}
