"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function Pedido() {
  const router = useRouter();
  const [nomeCliente, setNomeCliente] = useState("");
  const [selectedSabor, setSelectedSabor] = useState("");
  const [shipping, setShippingSelected] = useState<any>([]);
  const [comoFazer, setComoFazer] = useState("");
  const [tamanho, setTamanho] = useState("");

  const handleCheckboxChange = (acompanhamento: any) => {
    if (shipping.includes(acompanhamento)) {
      setShippingSelected(shipping.filter((item: any) => item !== acompanhamento));
    } else if (shipping.length < 4) {
      setShippingSelected([...shipping, acompanhamento]);
    }
  };

  const handleRedirect = () => {
    const pedidoData = {
      nome: nomeCliente,
      sabor: selectedSabor,
      tipo: comoFazer,
      acompanhamentos: shipping,
      tamanho,
    };

    const queryString = new URLSearchParams({
      nome: pedidoData.nome,
      sabor: pedidoData.sabor,
      tipo: pedidoData.tipo,
      tamanho: pedidoData.tamanho,
      ...pedidoData.acompanhamentos.reduce(
        (acc: any, item: any, index: any) => ({ ...acc, [`acompanhamentos[${index}]`]: item }),
        {}
      ),
    }).toString();

    router.push(`/carrinho?${queryString}`);
  };

  return (
    <div className="translate-x-40 min-h-screen bg-gray-200 text-white flex justify-center items-center p-4"
    style={{
      backgroundImage: "url('/logo.png')",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
      >
      <div className="w-full max-w-3xl bg-white text-gray-700 rounded-lg shadow-lg p-6"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Sabor de Verão</h1>
          <div>
            <span className="block text-gray-900 text-sm">Sorveteria e Açaíteria</span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="nome" className="block font-bold mb-1">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Digite o nome do cliente"
            className="w-full border rounded-md p-2"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          {["Local", "P/ Tampar", "Delivery"].map((tipo) => (
            <label key={tipo} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600"
                name="tipo"
                value={tipo}
                checked={comoFazer === tipo}
                onChange={(e) => setComoFazer(e.target.value)}
              />
              {tipo}
            </label>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="font-bold mb-2">Sabor</h2>
          <div className="flex items-center gap-4 flex-wrap">
            {["Açaí", "Cupuaçu", "Açaí com Cupuaçu", "Sorvete"].map((sabor) => (
              <label key={sabor} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                  name="sabor"
                  value={sabor}
                  checked={selectedSabor === sabor}
                  onChange={(e) => setSelectedSabor(e.target.value)}
                />
                {sabor}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="font-bold mb-2">Acompanhamentos</h2>
          <div className="grid grid-cols-2 gap-2 text-gray-800">
            {[
              "Leite em Pó",
              "Creme de Leite Ninho",
              "Paçoca",
              "Ovomaltine",
              "Doce de Leite",
              "Amendoim",
              "Granola",
              "Banana",
              "Morango",
              "Kiwi",
              "Creme de Pistache",
              "Sucrilhos",
              "Granulado",
              "Confete",
              "Bis",
              "Nutella",
              "Farinha Láctea",
              "Coco Ralado",
              "Neston",
              "Mel",
              "Leite Condensado",
              "Caramelo",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                  disabled={shipping.length >= 4 && !shipping.includes(item)}
                  checked={shipping.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="font-bold mb-2">Tamanhos</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Copo Mini 180ml R$8,00", value: "mini" },
              { label: "Copo P 300ml R$14,00", value: "pequeno" },
              { label: "Copo M 400ml R$18,00", value: "medio" },
              { label: "Copo G 500ml R$21,00", value: "grande" },
              { label: "Copo GG 770ml R$30,00", value: "gigante" },
            ].map((tamanhoOption) => (
              <label key={tamanhoOption.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="tamanho"
                  className="rounded border-gray-300 text-blue-600"
                  value={tamanhoOption.value}
                  checked={tamanho === tamanhoOption.value}
                  onChange={(e) => setTamanho(e.target.value)}
                />
                {tamanhoOption.label}
              </label>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleRedirect}
            disabled={!nomeCliente || !selectedSabor || !tamanho || !comoFazer}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}


