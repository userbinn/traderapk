

//1. Contagem ao Vivo (Live Count)

function updateLiveCount() {
    const liveCountElement = document.getElementById('liveCount');
    let currentCount = parseInt(liveCountElement.textContent);

    let variation = Math.floor(Math.random() * 10) - 5; 
    let newCount = Math.max(1, currentCount + variation); 

    liveCountElement.textContent = newCount;
}

setInterval(updateLiveCount, 3000);

/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/

// 2 Função para atualizar a barra de progresso e trocar a cor automaticamente com base na porcentagem
function updateProgressBar(progressBarId, progressTextId, initialPercentage, minPercentage) {
    const progressBar = document.getElementById(progressBarId);
    const progressText = document.getElementById(progressTextId);

    let percentage = initialPercentage;

    // Função para atualizar a cor da barra com base na porcentagem
    function updateColor(percentage) {
        if (percentage >= 70) {
            progressBar.style.backgroundColor = '#1c7d1c'; // Verde para porcentagem alta
        } else if (percentage >= 40 && percentage < 70) {
            progressBar.style.backgroundColor = '#e6b800'; // Amarelo para porcentagem média
        } else {
            progressBar.style.backgroundColor = '#d9534f'; // Vermelho para porcentagem baixa
        }
    }

    // Inicializa o progresso com a cor correta
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
    updateColor(percentage);

    // Atualiza o progresso a cada 4 segundos com variação
    setInterval(() => {
        const variation = Math.floor(Math.random() * 10) - 5;
        percentage = Math.min(100, Math.max(minPercentage, percentage + variation));

        progressBar.style.width = percentage + '%';
        progressText.textContent = percentage + '%';

        // Atualiza a cor com base na nova porcentagem
        updateColor(percentage);
    }, 4000);
}

// Atualizar as barras de progresso automaticamente para seis cards
updateProgressBar('progressBar1', 'progressText1', 70, 90); // Card 1 - verde (aleatório)
updateProgressBar('progressBar2', 'progressText2', 52, 78); // Card 2 - amarelo (aleatório)
updateProgressBar('progressBar3', 'progressText3', 44, 69); // Card 3 - vermelho (aleatório)
updateProgressBar('progressBar4', 'progressText4', 39, 53); // Card 4 - verde (aleatório)
updateProgressBar('progressBar5', 'progressText5', 57, 64); // Card 5 - amarelo (aleatório)
updateProgressBar('progressBar6', 'progressText6', 54, 67); // Card 6 - vermelho (aleatório)



/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/

// 3. Função de Slideshow (Banner Rotativo - REDES SOCIAIS)

let currentOption = 0;
const options = document.querySelectorAll('.banner-option');
const totalOptions = options.length;

function showNextOption() {
    // Remove a classe 'active' da opção atual
    options[currentOption].classList.remove('active');

    // Avança para a próxima opção
    currentOption = (currentOption + 1) % totalOptions;

    // Adiciona a classe 'active' para a nova opção
    options[currentOption].classList.add('active');
}

// Exibir a primeira opção automaticamente ao carregar
options[currentOption].classList.add('active');

// Trocar de opção a cada 3 segundos
setInterval(showNextOption, 3000);


/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/

//4. Notificação de Saque (Exibe Transações de Usuários)

const notifications = [
    { name: 'Larissa O.', amount: 'R$ 1.037,00' },
    { name: 'Carlos M.', amount: 'R$ 500,00' },
    { name: 'Ana P.', amount: 'R$ 850,00' },
    { name: 'Bruno L.', amount: 'R$ 300,00' },
    { name: 'Mariana S.', amount: 'R$ 1.200,00' },
];

let currentIndex = 0;
const notificationElement = document.getElementById('withdrawNotification');
const userNameElement = document.getElementById('userName');
const amountElement = document.getElementById('amount');

function showNotification() {
    const notification = notifications[currentIndex];
    userNameElement.textContent = notification.name;
    amountElement.textContent = notification.amount;

    notificationElement.style.opacity = '1';

    setTimeout(() => {
        notificationElement.style.opacity = '0';
    }, 3000);

    currentIndex = (currentIndex + 1) % notifications.length;
}

setInterval(showNotification, 5000);

/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
