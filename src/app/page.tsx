"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Pedido() {
  const router = useRouter()
  const [selectedSabor, setSelectedSabor] = useState('')
  const [shipping, setShippingSelected] = useState([])
  const [comoFazer, setComoFazer] = useState('')
  const handleCheckboxChange = (acompanhamento) => {
    if (shipping.includes(acompanhamento)) {
      setShippingSelected(
        shipping.filter(item => item !== acompanhamento)
      );
    } else if (shipping.length < 4) {
      setShippingSelected([...shipping, acompanhamento]);
    }
  };

  const handleRedirect = () => {
    const pedidoData = {
      sabor: selectedSabor,
      tipo: comoFazer,
      acompanhamentos: shipping,
    };
  
    
    const queryString = new URLSearchParams({
      sabor: pedidoData.sabor,
      tipo: pedidoData.tipo,
      ...pedidoData.acompanhamentos.reduce(
        (acc, item, index) => ({ ...acc, [`acompanhamentos[${index}]`]: item }),
        {}
      ),
    }).toString();
  
    router.push(`/carrinho?${queryString}`);
  };

  return (
    <div className=" translate-x-40 min-h-screen bg-gray-200 text-white flex justify-center items-center ep-4">
      <div className="w-full max-w-3xl  text-gray-700 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">Sabor do Verão</h1>
          <div>
            <span className="block text-gray-700 text-sm">Sorveteria e Açaíteria</span>
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
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          {["Local", "P/ Tampar", "Delivery"].map((tipo) => (
            <label key={tipo} className="flex items-center gap-2">
              <input type="checkbox"
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
                <input type="checkbox" className="rounded border-gray-300 text-blue-600"
                  name="sabor"
                  value={sabor}
                  checked={selectedSabor === sabor}
                  onChange={e => setSelectedSabor(e.target.value)}
                />
                {sabor}
              </label>
            ))}
            {selectedSabor == "Sorvete" && (
              <input
                type="text"
                placeholder="Digite o sabor"
                className="border rounded-md p-2 w-full mt-2"
              />
            )}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="font-bold mb-2">Acompanhamentos</h2>
          <div className="grid grid-cols-2 gap-2">
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
              "Caramelo"
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600"
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
            ].map((tamanho) => (
              <label key={tamanho.value} className="flex items-center gap-2">
                <input type="radio" name="tamanho" className="rounded border-gray-300 text-blue-600" />
                {tamanho.label}
              </label>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleRedirect}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

