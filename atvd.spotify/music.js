const musicas = [
    {
        id: 1,
        url: 'https://www.google.com/imgres?q=contagem%20regressiva%20musica&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273145253db3e8f88cb943db1f7&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Ftrack%2F06VStvBWfFbepR97LhRo8D&docid=qotUiEhTHiOpcM&tbnid=j9nuKfitNwKvXM&vet=12ahUKEwijiofz7c2XAxXMiJUCHe9KOmMQnPAOegQIRhAA..i&w=640&h=640&hcb=2&ved=2ahUKEwijiofz7c2XAxXMiJUCHe9KOmMQnPAOegQIRhAA',
        banda: 'MC Ig',
        nome: 'Contagem Regressiva',
        audio: 'audio/CONTAGEM REGRESSIVA - IG, Mc J Vila, Negão Original, Lele JP, MC Ryan SP (Djs Murillo e LT, Guh Mix) - GR6 EXPLODE.mp3'
    },
    {
        id: 2,
        url: 'https://www.google.com/imgres?q=postinho%20de%20gasolina%20musica&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2735a5ab94b38aec77383bde6ff&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Ftrack%2F0xXYRMvxCUBKWVptybXSjB&docid=Qo_MiCp84EpFMM&tbnid=YbYu9xWDlkvNiM&vet=12ahUKEwiZ4dfF7s2XAxVuI7kGHTJ4FkEQnPAOegQIPBAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiZ4dfF7s2XAxVuI7kGHTJ4FkEQnPAOegQIPBAA',
        banda: 'Joao Gustavo e Murilo, Grelo',
        nome: 'Postimho de Gasolina',
        audio: ''
    },
    {
        id: 3,
        url: 'https://www.google.com/imgres?q=mega%20hair%20musica&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273e91881ea1beeea44ecff0e5e&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Ftrack%2F6lZjGV5YRf4JP82ylbO0yu&docid=WiChyThedCq2nM&tbnid=Vy0O3n0KyDHtyM&vet=12ahUKEwi3xu2i782XAxX1lZUCHSIkMgwQnPAOegQIRBAA..i&w=640&h=640&hcb=2&itg=1&ved=2ahUKEwi3xu2i782XAxX1lZUCHSIkMgwQnPAOegQIRBAA',
        banda: 'Netto Brito, Luan Pereira - Ao Vivo',
        nome: 'Mega Hair',
        audio: ''
    },
    {
        id: 4,
        url: 'https://www.google.com/imgres?q=rainha%20da%20finesse%20musica&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2732bc7126d3c6b848ad747bf7b&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Ftrack%2F0w7vodPWFEcuEYvWpbNbOu&docid=OyvnqTp28jIVxM&tbnid=9dpxl5VbFvoG7M&vet=12ahUKEwiG1KTi782XAxUvr5UCHQOcCV8QnPAOegQITRAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiG1KTi782XAxUvr5UCHQOcCV8QnPAOegQITRAA',
        banda: 'WIU',
        nome: 'Rainha da Finesse',
        audio: ''
    },
    {
        id: 5,
        url: 'https://www.google.com/imgres?q=foto%20com%20bumbum%20pra%20lua%20musica&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b27380d839af739c13a7e1db3802&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%2Ftrack%2F4kijw81VK1woxf4mndg7IV&docid=7zg7NFn57Y1heM&tbnid=7_sDyFk8Gvau-M&vet=12ahUKEwiYs-LY8c2XAxXZFLkGHXMsNHYQnPAOegQIMRAA..i&w=640&h=640&hcb=2&itg=1&ved=2ahUKEwiYs-LY8c2XAxXZFLkGHXMsNHYQnPAOegQIMRAA',
        banda: 'G.A, Mc Lele JP',
        nome: 'foto com bumbum pra lua',
        audio: ''
    }
];

const listaMusicas = document.getElementById('listaMusicas');
const status = document.getElementById('status');
const player = new Audio();

musicas.forEach((musica) => {
    const item = document.createElement('li');

    item.className =
        'list-group-item musica d-flex align-items-center gap-3';

    item.innerHTML = `
        <img src="${musica.url}" alt="${musica.nome}">
        <div class="flex-grow-1">
            <div class="fw-bold">${musica.nome}</div>
            <div class="text-secondary">${musica.banda}</div>
        </div>
        <button class="btn-tocar" type="button">
            ▶ Tocar
        </button>
    `;

    const botao = item.querySelector('button');

    botao.addEventListener('click', async () => {
        if (!musica.audio) {
            status.textContent =
                'O arquivo de áudio desta música ainda não foi configurado.';
            return;
        }

        if (player.src === new URL(musica.audio, document.baseURI).href
            && !player.paused) {
            player.pause();
            botao.textContent = '▶ Continuar';
            return;
        }

        if (player.src !== new URL(musica.audio, document.baseURI).href) {
            player.src = musica.audio;
        }

        try {
            await player.play();
            status.textContent = `Tocando: ${musica.nome}`;
            document.querySelectorAll('.btn-tocar').forEach((b) => {
                b.textContent = '▶ Tocar';
            });
            botao.textContent = '⏸ Pausar';
        } catch (erro) {
            status.textContent =
                'Não foi possível reproduzir o áudio. Verifique o caminho do MP3.';
            console.error(erro);
        }
    });

    listaMusicas.appendChild(item);
});

player.addEventListener('ended', () => {
    status.textContent = 'Música finalizada.';
});