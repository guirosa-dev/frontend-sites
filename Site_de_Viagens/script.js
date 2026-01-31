const destinos = {
    "paris": {
        nome: "Paris, França",
        preco: "R$ 9.500",
        img: "img/lu1.jpg",
        item1: "✔ Piquenique nos Jardins da Torre Eiffel",
        item2: "✔ Cruzeiro Noturno pelo Rio Sena"
    },
    "italia": {
        nome: "Venezza Italia",
        preco: "R$ 9.400",
        img: "img/lu12.jpg",
        item1: "✔ Passeio Privativo de Gôndola",
        item2: "✔ Jantar com Vista para o Canal"
    },
    "kyoto": {
        nome: "Kyoto, Japão",
        preco: "R$ 12.400",
        img: "img/lu8.jpg",
        item1: "✔ Caminhada pelo Túnel de Torii",
        item2: "✔ Cerimônia Tradicional do Chá"
    },
    "grecia": {
        nome: "Santorini, Grécia",
        preco: "R$ 10.400",
        img: "img/lu4.jpg",
        item1: "✔ Assistir ao Pôr do Sol em Oia",
        item2: "✔ Mergulho em Águas Termais Vulcânicas"
    },
    "islandia": {
        nome: "Reykjavik, Islândia",
        preco: "R$ 13.000",
        img: "img/lu11.jpg",
        item1: "✔ Caça à Aurora Boreal em Jipe 4x4",
        item2: "✔ Banho Relaxante na Blue Lagoon"
    },
    "peru": {
        nome: "Cusco, Peru",
        preco: "R$ 4.500",
        img: "img/lu2.jpg",
        item1: "✔ Tour Guiado pela Cidadela de Machu Picchu",
        item2: "✔ Degustação de Culinária Andina no Vale Sagrado"
    },
    "egito": {
        nome: "Cairo, Egito",
        preco: "R$ 8.400",
        img: "img/lu7.jpg",
        item1: "✔ Visita às Pirâmides de Gizé e Esfinge",
        item2: "✔ Jantar em Barco Tradicional no Rio Nilo"
    },
    "indonesia": {
        nome: "Bali, Indonésia",
        preco: "R$ 11.000",
        img: "img/lu10.jpg",
        item1: "✔ Aula de Yoga com Vista para os Terraços de Arroz",
        item2: "✔ Banho de Purificação no Templo Tirta Empul"
    },
    "argentina": {
        nome: "Bariloche, Argentina",
        preco: "R$ 5.400",
        img: "img/lu9.jpg",
        item1: "✔ Aula de Esqui ou Snowboard no Cerro Catedral",
        item2: "✔ Rota do Chocolate e Chá da Tarde Llao Llao"
    },
    "eua": {
        nome: "Nova York, EUA",
        preco: "R$ 9.400",
        img: "img/lu3.jpg",
        item1: "✔ Patinação no Gelo no Central Park",
        item2: "✔ Assistir a um Musical na Broadway"
    },
    "portugal": {
        nome: "Lisboa, Portugal",
        preco: "R$ 7.500",
        img: "img/lu5.jpg",
        item1: "✔ Passeio de Elétrico pelos Bairros Históricos",
        item2: "✔ Noite de Fados com Degustação de Vinhos e Queijos"
    },
    "marrocos": {
        nome: "Marraquexe, Marrocos",
        preco: "R$ 9.500",
        img: "img/lu6.jpg",
        item1: "✔ Tour de Compras e Especiarias no Souk",
        item2: "✔ Passeio de Camelo ao Pôr do Sol no Palmeiral"
    },
    
    
};

//Pega o ID da URL (ex: ?id=paris)
const urlParams = new URLSearchParams(window.location.search);
const idDestino = urlParams.get('id');

//Busca os dados do objeto
const dados = destinos[idDestino];

//Se o destino existir, preenche a página
if (dados) {
    document.getElementById('titulo-destino').innerText = dados.nome;
    document.getElementById('preco-destino').innerText = dados.preco;
    document.getElementById('info-1').innerText = dados.item1;
    document.getElementById('info-2').innerText = dados.item2;
    document.getElementById('imagem-destino').src = dados.img;
}