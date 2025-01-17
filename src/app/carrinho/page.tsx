// src/app/carrinho/Carrinho.tsx
'use client'
import { useState } from 'react';

interface Pedido {
    nome: string;
    sabor: string;
    tipo: string;
    tamanho: string;
    acompanhamentos: string[];
}

export default function Carrinho() {
    const [status, setStatus] = useState<string>("");
    const [nome, setNome] = useState<string>("João");  // Exemplo de dados
    const [sabor, setSabor] = useState<string>("Morango");
    const [tipo, setTipo] = useState<string>("Tradicional");
    const [tamanho, setTamanho] = useState<string>("Grande");
    const [acompanhamentos, setAcompanhamentos] = useState<string[]>(["Granola", "Leite Condensado"]);

    const confirmarPedido = async () => {
        setStatus("Enviando pedido...");

        const pedido: Pedido = {
            nome,
            sabor,
            tipo,
            tamanho,
            acompanhamentos,
        };

        try {
            const response = await fetch('/api/salvarPedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pedido),
            });

            if (response.ok) {
                setStatus("Pedido enviado com sucesso!");
            } else {
                setStatus("Erro ao enviar o pedido.");
            }
        } catch (error) {
            console.error("Erro ao enviar pedido:", error);
            setStatus("Erro ao enviar o pedido.");
        }
    };

    return (
        <div className="p-12 rounded">
            <h1 className="text-2xl font-bold mb-4">Resumo do Pedido</h1>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Sabor:</strong> {sabor}</p>
            <p><strong>Tipo:</strong> {tipo}</p>
            <p><strong>Acompanhamentos:</strong> {acompanhamentos.join(", ")}</p>
            <p><strong>Tamanho:</strong> {tamanho}</p>
            <button
                onClick={confirmarPedido}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
                Confirmar Pedido
            </button>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
}
