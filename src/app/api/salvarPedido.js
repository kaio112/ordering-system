import Pedido from '../../lib/database/pedido'; // Caminho para o modelo Pedido

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nomeCliente, tipo, sabor, acompanhamentos, tamanho } = req.body;

    try {
      const pedido = await Pedido.create({
        nomeCliente,
        tipo,
        sabor,
        acompanhamentos: JSON.stringify(acompanhamentos), // Salvar como JSON string
        tamanho,
      });

      res.status(201).json({ message: 'Pedido salvo com sucesso!', pedido });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao salvar pedido', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
