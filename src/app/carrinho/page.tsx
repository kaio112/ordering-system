"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function Carrinho() {
    const searchParams = useSearchParams();

    const sabor = searchParams.get("sabor");
    const tipo = searchParams.get("tipo");
    const acompanhamentos = Array.from(
        searchParams.entries()
    ).filter(([key]) => key.startsWith("acompanhamentos"))
        .map(([, value]) => value);

    return (
        <div className="p-4 rounded">
            <Card>
                <h1 className="text-2xl font-bold mb-4">Resumo do Pedido</h1>
                <p><strong>Sabor:</strong> {sabor}</p>
                <p><strong>Tipo:</strong> {tipo}</p>
                <p><strong>Acompanhamentos:</strong> {acompanhamentos.join(", ")}</p>
            </Card>
        </div>
    );
}