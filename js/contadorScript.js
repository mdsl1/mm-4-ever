// Data inicial (exemplo: 1 de janeiro de 2024, às 10:00:00)
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
const dataInicial = new Date(2023, 9, 18, 21, 21, 0);

const displayDias = document.getElementById("cDias");
const displayHrs = document.getElementById("cHrs");

function atualizarContador() {
    
    const dataAtual = new Date();
    const formatadorDeMilhar = new Intl.NumberFormat('pt-BR');

    // Calcula a diferença em milissegundos
    const diferencaEmMs = dataAtual - dataInicial;

    const segundosTotais = Math.floor(diferencaEmMs / 1000);
    
    // Calcula as horas, minutos e segundos
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
    
    // Calcula os dias
    let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();

    // Ajusta o cálculo se a data inicial for posterior à atual no mês
    if (dias < 0) {
        meses--;
        // Pega o número de dias do mês anterior para o ajuste
        const ultimoDiaDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Formata os valores para ter 2 dígitos (ex: 05, 12)
    const horasFormatadas = formatadorDeMilhar.format(horas);
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    const anosFormatados = formatadorDeMilhar.format(anos);
    const mesesFormatados = formatadorDeMilhar.format(meses);
    const diasFormatados = formatadorDeMilhar.format(dias);

    // Atualiza o texto do elemento HTML
    displayHrs.textContent = 
        `${horasFormatadas} horas, ${minutosFormatados} ${minutosFormatados > 1 ? "minutos": "minuto"} e ${segundosFormatados} segundos.`;
    
    displayDias.textContent = 
        `${anosFormatados} ${anos > 1 ? "anos": "ano"}, ${mesesFormatados} ${meses > 1 ? "meses": "mês"} e ${diasFormatados} ${dias > 1 ? "dias": "dia"}.`;
}

// Chama a função pela primeira vez para exibir o contador imediatamente
atualizarContador();

// Atualiza o contador a cada segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);