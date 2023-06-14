const touristPoints = {
  Acre: {
    state: "Acre",
    attractions: {
      attraction1: "Rio Branco",
      description1:
        "Explore Rio Branco, the capital city of Acre, and discover its rich history, including the Memorial dos Autonomistas and the Museu da Borracha.",
      attraction2: "Parque Nacional da Serra do Divisor",
      description2:
        "Experience the untouched wilderness of Parque Nacional da Serra do Divisor, with its dense rainforests, diverse wildlife, and stunning landscapes.",
      attraction3: "Catedral Nossa Senhora de Nazaré",
      description3:
        "Visit the Catedral Nossa Senhora de Nazaré, a beautiful Catholic cathedral in Rio Branco, known for its architectural design and religious significance.",
    },
  },
  Alagoas: {
    state:"Alagoas",
    attractions: {
      attraction1: "Maceió",
      description1:
        "Visit Maceió, the capital city of Alagoas, and enjoy its pristine beaches, crystal-clear waters, and vibrant beachfront promenade.",
      attraction2: "Maragogi",
      description2:
        "Discover the breathtaking natural pools of Maragogi, known as the 'Caribbean of Brazil,' and indulge in snorkeling or diving in its turquoise waters.",
      attraction3: "São Miguel dos Milagres",
      description3:
        "Relax on the secluded beaches of São Miguel dos Milagres, surrounded by coconut palms and coral reefs, and savor the tranquility of this coastal paradise.",
    },
  },
  Amapa: {
    state: "Amapá",
    attractions: {
      attraction1: "Macapá",
      description1:
        "Explore Macapá, the capital city of Amapá, and visit its iconic landmarks such as the Marco Zero monument and the Fortaleza de São José de Macapá.",
      attraction2: "Ilha de Santana",
      description2:
        "Take a boat trip to Ilha de Santana, an island located in the Amazon River, and discover its pristine beaches, lush rainforest, and diverse wildlife.",
      attraction3: "Parque Zoobotânico",
      description3:
        "Visit the Parque Zoobotânico, a zoo and botanical garden in Macapá, home to a variety of animal species and lush vegetation from the Amazon region.",
    },
  },
  Amazonas: {
    state: "Amazonas",
    attractions: {
      attraction1: "Manaus",
      description1:
        "Experience the vibrant city of Manaus, the capital of Amazonas, and explore its unique blend of urban development and lush rainforest.",
      attraction2: "Meeting of the Waters",
      description2:
        "Witness the impressive natural phenomenon known as the Meeting of the Waters, where the dark Rio Negro and the sandy-colored Rio Solimões merge to form the Amazon River.",
      attraction3: "Amazon Rainforest",
      description3:
        "Embark on an unforgettable adventure into the Amazon Rainforest, discovering its incredible biodiversity, indigenous communities, and lush ecosystems.",
    },
  },
  Bahia: {
    state: "Bahia",
    attractions: {
      attraction1: "Salvador",
      description1:
        "Discover Salvador, the vibrant capital city of Bahia, known for its rich Afro-Brazilian culture, colorful colonial architecture, and lively music and dance traditions.",
      attraction2: "Morro de São Paulo",
      description2:
        "Relax on the pristine beaches of Morro de São Paulo, a beautiful island getaway with crystal-clear waters, coral reefs, and lush tropical vegetation.",
      attraction3: "Chapada Diamantina National Park",
      description3:
        "Explore the stunning landscapes of Chapada Diamantina National Park, featuring towering waterfalls, caves, mountains, and unique rock formations.",
    },
  },
  Ceara: {
    state: "Ceará",
    attractions: {
      attraction1: "Fortaleza",
      description1:
        "Visit Fortaleza, the capital city of Ceará, and enjoy its gorgeous beaches, lively nightlife, and rich cultural heritage, including the historic city center.",
      attraction2: "Jericoacoara",
      description2:
        "Experience the natural beauty of Jericoacoara, a coastal village famous for its sandy dunes, pristine lagoons, and breathtaking sunsets.",
      attraction3: "Canoa Quebrada",
      description3:
        "Relax on the enchanting beach of Canoa Quebrada, known for its red sand cliffs, warm waters, and vibrant bohemian atmosphere.",
    },
  },
  DistritoFederal: {
    state: "Distrito Federal",
    attractions: {
      attraction1: "Brasília",
      description1:
        "Visit the modern capital of Brazil, Brasília, known for its unique architecture and urban planning, including landmarks like the Brasília Cathedral and the Palácio do Planalto.",
      attraction2: "Parque Nacional de Brasília",
      description2:
        "Explore the natural beauty of the Brasília National Park, with its diverse flora and fauna, hiking trails, and refreshing waterfalls.",
      attraction3: "Museu Nacional",
      description3:
        "Immerse yourself in the cultural and historical heritage of Brazil at the National Museum, featuring exhibits on indigenous cultures, art, and archaeology.",
    },
  },
  EspiritoSanto: {
    state: "Espírito Santo",
    attractions: {
      attraction1: "Vitória",
      description1:
        "Visit the capital city of Espírito Santo, known for its beautiful beaches, vibrant culture, and colonial architecture.",
      attraction2: "Guarapari",
      description2:
        "Relax on the stunning beaches of Guarapari and enjoy its warm waters, natural pools, and delicious seafood.",
      attraction3: "Convento da Penha",
      description3:
        "Explore the historic Convento da Penha, perched on a hilltop, and enjoy panoramic views of the surrounding area.",
    },
  },
  Goias: {
    state: "Goiás",
    attractions: {
      attraction1: "Goiânia",
      description1:
        "Discover Goiânia, the capital city of Goiás, with its modern architecture, vibrant nightlife, and cultural attractions.",
      attraction2: "Chapada dos Veadeiros National Park",
      description2:
        "Experience the natural beauty of Chapada dos Veadeiros National Park, home to stunning waterfalls, canyons, and hiking trails.",
      attraction3: "Pirenópolis",
      description3:
        "Visit the charming colonial town of Pirenópolis, known for its well-preserved architecture, waterfalls, and traditional festivals.",
    },
  },
  Maranhao: {
    state: "Maranhão",
    attractions: {
      attraction1: "São Luís",
      description1:
        "Explore São Luís, the capital city of Maranhão, and admire its colonial architecture, UNESCO World Heritage sites, and vibrant cultural scene.",
      attraction2: "Lençóis Maranhenses National Park",
      description2:
        "Witness the unique beauty of Lençóis Maranhenses National Park, characterized by its vast sand dunes and freshwater lagoons.",
      attraction3: "Alcântara",
      description3:
        "Visit the historic town of Alcântara, known for its well-preserved colonial buildings and rich cultural heritage.",
    },
  },
  MatoGrosso: {
    state: "Mato Grosso",
    attractions: {
      attraction1: "Cuiabá",
      description1:
        "Discover Cuiabá, the capital city of Mato Grosso, and experience its blend of modern architecture and traditional culture.",
      attraction2: "Pantanal",
      description2:
        "Explore the Pantanal, one of the world's largest wetlands, and observe its diverse wildlife, including jaguars, capybaras, and caimans.",
      attraction3: "Chapada dos Guimarães",
      description3:
        "Visit Chapada dos Guimarães National Park and marvel at its stunning rock formations, waterfalls, and hiking trails.",
    },
  },
  MatoGrossoDoSul: {
    state: "Mato Grosso do Sul",
    attractions: {
      attraction1: "Campo Grande",
      description1:
        "Experience Campo Grande, the capital city of Mato Grosso do Sul, known for its lively culture, delicious cuisine, and outdoor activities.",
      attraction2: "Bonito",
      description2:
        "Discover the natural beauty of Bonito, renowned for its crystal-clear rivers, caves, and abundant marine life, perfect for snorkeling and diving.",
      attraction3: "Pantanal",
      description3:
        "Explore the Pantanal region of Mato Grosso do Sul and observe its incredible biodiversity, including jaguars, birds, and anacondas.",
    },
  },
  MinasGerais: {
    state: "Minas Gerais",
    attractions: {
      attraction1: "Belo Horizonte",
      description1:
        "Visit Belo Horizonte, the capital city of Minas Gerais, and explore its modern architecture, vibrant cultural scene, and delicious cuisine.",
      attraction2: "Ouro Preto",
      description2:
        "Step back in time in the historic town of Ouro Preto, a UNESCO World Heritage site, known for its colonial architecture and rich gold-mining history.",
      attraction3: "Serra da Canastra",
      description3:
        "Explore the stunning landscapes of Serra da Canastra National Park, home to waterfalls, canyons, and diverse wildlife, including the rare Canastra cheese.",
    },
  },
  Para: {
    state: "Pará",
    attractions: {
      attraction1: "Belém",
      description1:
        "Experience the vibrant city of Belém, the capital of Pará, and discover its historic center, lively markets, and mouthwatering cuisine.",
      attraction2: "Ilha de Marajó",
      description2:
        "Escape to Ilha de Marajó, the largest river island in the world, and explore its diverse ecosystems, rich wildlife, and peaceful beaches.",
      attraction3: "Alter do Chão",
      description3:
        "Relax in the laid-back town of Alter do Chão, known for its stunning white-sand beaches, turquoise waters, and Amazonian rainforest.",
    },
  },
  Paraiba: {
    state: "Paraíba",
    attractions: {
      attraction1: "João Pessoa",
      description1:
        "Visit João Pessoa, the capital city of Paraíba, and enjoy its beautiful beaches, charming historic center, and vibrant cultural scene.",
      attraction2: "Praia de Tambaba",
      description2:
        "Experience the natural beauty of Praia de Tambaba, a stunning nudist beach known for its crystal-clear waters and scenic cliffs.",
      attraction3: "Areia",
      description3:
        "Explore the historic town of Areia and admire its well-preserved colonial architecture and cultural heritage.",
    },
  },
  Parana: {
    state: "Paraná",
    attractions: {
      attraction1: "Curitiba",
      description1:
        "Discover Curitiba, the capital city of Paraná, and explore its well-planned urban spaces, beautiful parks, and cultural attractions.",
      attraction2: "Foz do Iguaçu",
      description2:
        "Marvel at the awe-inspiring Iguazu Falls in Foz do Iguaçu, a natural wonder shared by Brazil and Argentina, surrounded by lush rainforest.",
      attraction3: "Ilha do Mel",
      description3:
        "Escape to Ilha do Mel, a picturesque island with beautiful beaches, ecological trails, and a relaxed atmosphere.",
    },
  },
  Pernambuco: {
    state: "Pernambuco",
    attractions: {
      attraction1: "Recife",
      description1:
        "Explore the vibrant city of Recife, the capital of Pernambuco, and experience its rich history, lively culture, and stunning beaches.",
      attraction2: "Olinda",
      description2:
        "Step into the past in the UNESCO World Heritage town of Olinda, known for its colorful colonial architecture, lively carnival, and artistic scene.",
      attraction3: "Porto de Galinhas",
      description3:
        "Relax on the paradisiacal beaches of Porto de Galinhas and enjoy its crystal-clear waters, natural pools, and vibrant marine life.",
    },
  },
  Piaui: {
    state: "Piauí",
    attractions: {
      attraction1: "Teresina",
      description1:
        "Visit Teresina, the capital city of Piauí, and discover its mix of modern architecture, green spaces, and cultural attractions.",
      attraction2: "Serra da Capivara National Park",
      description2:
        "Explore the prehistoric wonders of Serra da Capivara National Park, home to ancient rock paintings and archaeological sites.",
      attraction3: "Delta do Parnaíba",
      description3:
        "Take a boat trip through the stunning Delta do Parnaíba, a unique ecosystem formed by the Parnaíba River and the Atlantic Ocean.",
    },
  },
  RioDeJaneiro: {
    state: "Rio de Janeiro",
    attractions: {
      attraction1: "Rio de Janeiro",
      description1:
        "Experience the vibrant city of Rio de Janeiro, known for its iconic landmarks like Christ the Redeemer and Copacabana Beach, lively nightlife, and samba culture.",
      attraction2: "Ipanema Beach",
      description2:
        "Relax on the famous Ipanema Beach, known for its golden sands, stunning sunsets, and lively atmosphere.",
      attraction3: "Tijuca National Park",
      description3:
        "Explore the lush Tijuca National Park, the largest urban forest in the world, with beautiful hiking trails and waterfalls.",
    },
  },
  RioGrandeDoNorte: {
    state: "Rio Grande do Norte",
    attractions: {
      attraction1: "Natal",
      description1:
        "Visit Natal, the capital city of Rio Grande do Norte, and enjoy its beautiful beaches, sand dunes, and natural beauty.",
      attraction2: "Pipa Beach",
      description2:
        "Relax on the idyllic beaches of Pipa, known for their natural beauty, clear waters, and opportunities for dolphin watching.",
      attraction3: "Genipabu",
      description3:
        "Experience the exhilarating dune buggy rides in Genipabu, where you can slide down sand dunes and explore the beautiful landscape.",
    },
  },
  RioGrandeDoSul: {
    state: "Rio Grande do Sul",
    attractions: {
      attraction1: "Porto Alegre",
      description1:
        "Discover Porto Alegre, the capital city of Rio Grande do Sul, and explore its cultural institutions, beautiful parks, and lively music scene.",
      attraction2: "Gramado",
      description2:
        "Experience the charm of Gramado, a picturesque town known for its Bavarian-style architecture, stunning landscapes, and annual film festival.",
      attraction3: "Canela",
      description3:
        "Visit Canela, a neighboring town to Gramado, and explore its natural attractions, including waterfalls, canyons, and the Caracol Park.",
    },
  },
  Rondonia: {
    state: "Rondônia",
    attractions: {
      attraction1: "Porto Velho",
      description1:
        "Explore Porto Velho, the capital city of Rondônia, and learn about its history, including the Madeira-Mamoré Railway and the rubber boom era.",
      attraction2: "Ji-Paraná",
      description2:
        "Visit Ji-Paraná, one of the largest cities in Rondônia, and enjoy its natural beauty, including waterfalls, rivers, and caves.",
      attraction3: "Parque Nacional de Pacaás Novos",
      description3:
        "Discover the biodiversity of Parque Nacional de Pacaás Novos, a national park with lush rainforests, rivers, and a rich variety of flora and fauna.",
    },
  },
  Roraima: {
    state: "Roraima",
    attractions: {
      attraction1: "Boa Vista",
      description1:
        "Visit Boa Vista, the capital city of Roraima, and discover its blend of modern architecture, indigenous culture, and natural beauty.",
      attraction2: "Monte Roraima",
      description2:
        "Embark on an adventure to climb Monte Roraima, one of the oldest geological formations on Earth and a stunning tabletop mountain.",
      attraction3: "Tepequém",
      description3:
        "Explore the natural wonders of Tepequém, including waterfalls, canyons, and panoramic views of the savannah and mountains.",
    },
  },
  SantaCatarina: {
    state: "Santa Catarina",
    attractions: {
      attraction1: "Florianópolis",
      description1:
        "Discover Florianópolis, the capital city of Santa Catarina, and enjoy its beautiful beaches, lively nightlife, and outdoor activities.",
      attraction2: "Balneário Camboriú",
      description2:
        "Relax on the beaches of Balneário Camboriú, a popular tourist destination known for its high-rise buildings, cable cars, and vibrant atmosphere.",
      attraction3: "Serra do Rio do Rastro",
      description3:
        "Drive along the scenic Serra do Rio do Rastro, a mountain range known for its winding road, breathtaking views, and outdoor activities.",
    },
  },
  SaoPaulo: {
    state: "São Paulo",
    attractions: {
      attraction1: "São Paulo",
      description1:
        "Explore São Paulo, Brazil's largest city, and experience its diverse cultural scene, world-class museums, vibrant nightlife, and delicious cuisine.",
      attraction2: "Ibirapuera Park",
      description2:
        "Relax in Ibirapuera Park, a large urban park with beautiful gardens, walking paths, museums, and recreational areas.",
      attraction3: "Avenida Paulista",
      description3:
        "Stroll along Avenida Paulista, a bustling avenue lined with skyscrapers, shops, restaurants, and cultural institutions.",
    },
  },
  Sergipe: {
    state: "Sergipe",
    attractions: {
      attraction1: "Aracaju",
      description1:
        "Visit Aracaju, the capital city of Sergipe, and enjoy its beautiful beaches, historical sites, and lively cultural scene.",
      attraction2: "Praia do Saco",
      description2:
        "Relax on the pristine beaches of Praia do Saco and enjoy its calm waters, sand dunes, and natural beauty.",
      attraction3: "São Cristóvão",
      description3:
        "Explore the historic town of São Cristóvão, a UNESCO World Heritage site, known for its colonial architecture and cobblestone streets.",
    },
  },
  Tocantins: {
    state: "Tocantins",
    attractions: {
      attraction1: "Palmas",
      description1:
        "Discover Palmas, the capital city of Tocantins, and enjoy its modern architecture, urban beaches, and outdoor activities.",
      attraction2: "Jalapão",
      description2:
        "Explore the natural wonders of Jalapão, a stunning region with sand dunes, waterfalls, canyons, and crystal-clear rivers.",
      attraction3: "Ilha do Bananal",
      description3:
        "Visit Ilha do Bananal, the largest fluvial island in the world, located in the Araguaia River, and experience its unique ecosystem and indigenous culture.",
    },
  },
};

export default touristPoints;
