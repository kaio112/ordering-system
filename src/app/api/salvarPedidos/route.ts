// src/app/api/salvarPedido/route.ts
import { NextResponse } from 'next/server';

interface Pedido {
    nome: string;
    sabor: string;
    tipo: string;
    tamanho: string;
    acompanhamentos: string[];
}

export async function POST(request: Request) {
    try {
        // Lê os dados da requisição
        const data: Pedido = await request.json();

        // Aqui você pode processar os dados, como salvar no banco de dados
        console.log(data);

        // Retorna uma resposta em JSON
        return NextResponse.json({ message: 'Pedido salvo com sucesso!' });
    } catch (error) {
        console.error("Erro ao processar o pedido:", error);

        // Retorna uma resposta de erro caso ocorra algo
        return NextResponse.json({ message: 'Erro ao salvar pedido.' }, { status: 500 });
    }
}
