const musicas = [
    {
        id: 1,
        url: 'https://i1.sndcdn.com/artworks-ZVnCU1y2Kacg-0-t1080x1080.jpg',
        banda: 'MC Ig',
        nome: 'Contagem Regressiva',
        audio: 'audio/CONTAGEM REGRESSIVA - IG, Mc J Vila, Negão Original, Lele JP, MC Ryan SP (Djs Murillo e LT, Guh Mix) - GR6 EXPLODE.mp3'
    },
    {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvl_xl2XEols2Ds6st0YbJefpQwGtv4aE52xt2Qw0uA&s=10',
        banda: 'Joao Gustavo e Murilo, Grelo',
        nome: 'Postinho de Gasolina',
        audio: 'audio/João Gustavo e Murilo, @Eogrelo - Postinho De Gasolina Ao Vivo Em Goiânia.mp3'
    },
    {
        id: 3,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB33OY9yf9ORcYS9wr7278tGlxmm1Ia_VUi-G3dsiW5A&s',
        banda: 'Netto Brito, Luan Pereira - Ao Vivo',
        nome: 'Mega Hair',
        audio: 'audio/MEGA HAIR - Netto Brito, Luan Pereira Ilha do Arrocha (Ao Vivo em São Luís MA) - OFICIAL.mp3'
    },
    {
        id: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIzLjlE52JUtmVHvm2CMHDnryUAK8z4OXkemfop1YZg&s=10',
        banda: 'WIU',
        nome: 'Rainha da Finesse',
        audio: 'audio/WIU - Rainha da Finesse.mp3'
    },
    {
        id: 5,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVHgFHcjoG22zRyw-u2n2EIQcV2nBWI7OPQqcrTgiUQ&s=10',
        banda: 'G.A, Mc Lele JP',
        nome: 'foto com bumbum pra lua',
        audio: 'audio/1. G.A - foto com bumbum pra lua (ft. Mc Lele JP) [Funk de Canalha II].mp3'
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