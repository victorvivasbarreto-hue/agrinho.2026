// ============================================
// FUNCIONALIDADE DE ACESSIBILIDADE
// ============================================

// Selecionando os botões
const btnAumentar = document.getElementById('btnAumentarFonte');
const btnDiminuir = document.getElementById('btnDiminuirFonte');
const btnContraste = document.getElementById('btnAltoContraste');

let tamanhoFonte = 16; // tamanho padrão em pixels

// Função para atualizar a fonte do body
function atualizarFonte() {
    document.body.style.fontSize = tamanhoFonte + 'px';
}

// Aumentar fonte (máximo 24px)
btnAumentar.addEventListener('click', () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        atualizarFonte();
    }
});

// Diminuir fonte (mínimo 12px)
btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        atualizarFonte();
    }
});

// Ativar/desativar alto contraste
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// ============================================
// FUNCIONALIDADE INTERATIVA PRINCIPAL
// Ao clicar nos botões, aparecem informações, 
// desenhos e imagens sobre como evitar desmatamento
// ============================================

// Selecionando os botões interativos e a área de conteúdo
const botoesInfo = document.querySelectorAll('.btn-info');
const areaConteudo = document.getElementById('conteudo-dinamico');
const mensagemInicial = document.getElementById('mensagem-inicial');

// Conteúdos que serão exibidos quando o usuário clicar
const conteudos = {
    reflorestamento: {
        titulo: '🌳 Reflorestamento',
        texto: 'Plantar árvores nativas ajuda a recuperar áreas desmatadas. Uma única árvore pode absorver até 22kg de CO₂ por ano! O reflorestamento também traz de volta os animais que viviam na região.',
        imagem: 'https://via.placeholder.com/400x200?text=Reflorestamento+Desenho'
    },
    agrofloresta: {
        titulo: '🌾 Agrofloresta',
        texto: 'A agrofloresta é um sistema que une árvores nativas com plantações. Ela protege o solo, gera alimentos saudáveis e evita o desmatamento, pois não precisa derrubar a floresta para plantar.',
        imagem: 'https://via.placeholder.com/400x200?text=Agrofloresta'
    },
    preservacao: {
        titulo: '💧 Preservação de nascentes',
        texto: 'Proteger as nascentes (onde a água nasce) garante água limpa para todos. Evite desmatamento perto de rios e córregos. A mata ao redor das nascentes filtra a água e evita a erosão.',
        imagem: 'https://via.placeholder.com/400x200?text=Nascente+Preservada'
    },
    compostagem: {
        titulo: '🍂 Compostagem',
        texto: 'A compostagem transforma restos de comida e folhas em adubo natural. Isso evita queimadas e reduz o lixo. O adubo ajuda as plantas a crescerem sem precisar desmatar novas áreas.',
        imagem: 'https://via.placeholder.com/400x200?text=Compostagem'
    }
};

// Função que mostra o conteúdo quando um botão é clicado
function mostrarConteudo(chave) {
    const info = conteudos[chave];
    
    if (info) {
        // Esconde a mensagem inicial
        mensagemInicial.style.display = 'none';
        
        // Cria o conteúdo dinâmico com imagem, texto e informações
        areaConteudo.innerHTML = `
            <div class="card-interativo">
                <h3>${info.titulo}</h3>
                <img src="${info.imagem}" alt="Ilustração sobre ${info.titulo}">
                <p>${info.texto}</p>
                <p><small>📸 Substitua esta imagem por seu próprio desenho ou fotografia!</small></p>
            </div>
        `;
    } else {
        areaConteudo.innerHTML = '<p>❌ Informação não encontrada. Tente outro botão.</p>';
    }
}

// Adiciona o evento de clique para cada botão interativo
botoesInfo.forEach(botao => {
    botao.addEventListener('click', () => {
        const infoId = botao.getAttribute('data-info');
        mostrarConteudo(infoId);
    });
});

// Quando a página carregar, garantir que a mensagem inicial apareça
window.addEventListener('DOMContentLoaded', () => {
    mensagemInicial.style.display = 'block';
    areaConteudo.innerHTML = '';
});
