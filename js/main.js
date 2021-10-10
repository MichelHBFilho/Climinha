let linkAtual = `https://api.openweathermap.org/data/2.5/weather?q=${"Porto Alegre"}&appid=d60042ab475173beb863502b1da035ab`;
let temperatura;

$(".header__enviar-cidade").click(atualizaCidade);

$(".header__input-cidade").on("keypress", function(event) {
    if (event.keyCode !== 13) return;
    atualizaCidade();
})

$(".main__reload").click(() => atualizaDados(linkAtual));

$(() => {
    atualizaDados(linkAtual);
})

$(".celcius").on("click", atualizaTemperaturaToCelcius);
$(".fah").on("click", atualizaTemperaturaToFah);

function atualizaTemperaturaToFah() {
    if($(".fah").hasClass("active")) return;

    $(".celcius").removeClass("active");
    $(".fah").addClass("active");
    $(".main__graus").text(converteCelciusToFah(temperatura) + "°");
} 

function atualizaTemperaturaToCelcius() {
    if($(".celcius").hasClass("active")) return;

    $(".fah").removeClass("active");
    $(".celcius").addClass("active");
    $(".main__graus").text(converteFahToCelcius(temperatura) + "°");
}

function atualizaCidade() {
    const cidade = $(".header__input-cidade").val();

    linkAtual = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=d60042ab475173beb863502b1da035ab`;

    const retornoFuncao = atualizaDados(linkAtual);

    $(".header__titulo").text(`Climinha em ${cidade}`);
}

function atualizaDados(link) {
    $.get(link, (data) => {
        const temperaturaAtual = Math.round(converteKToCelcius(data.main.temp));
        temperatura = temperaturaAtual;
        $(".main__graus").text(temperaturaAtual + "°");
        escolherImagem(data.weather[0].main);
        $(".fah").removeClass("active");
        $(".celcius").addClass("active");
    }).fail((erro)=> {
        $(".main__erro").text("Erro " + erro.status);
        $(".main__popup").slideDown();
        setTimeout(() => {
            $(".main__popup").slideUp();
        }, 2000)
        return erro;
    })
}

function escolherImagem(status) {
    const imagem = $(".main__img");
    const txtTemp = $(".main__clima-info");
    if(status == "Clouds" || status == "Haze" ||
    status == "Mist") {
        imagem.attr("src", "assets/img/nublado.svg");
        txtTemp.text("Está Nublado")
    } else if (status == "Rain" || status == "Drizzle") {
        imagem.attr("src", "assets/img/chovendinho.svg");
        txtTemp.text("Está chovendo");
    } else if (status == "Thunderstrorm") {
        imagem.attr("src", "assets/img/trovoandinho.svg");
        txtTemp.text("Está trovoando");
    } else if (status == "Clear") {
        imagem.attr("src", "assets/img/solzinho.svg");
        txtTemp.text("O tempo está limpo");
    } else {
        imagem.attr("src", "assets/img/nublado.svg");
        txtTemp.text("A pelo amor de deus olha a janela");
    }
}

function converteKToCelcius(temp) {
    return temp - 273.15;
}

function converteCelciusToFah(temp) {
    const conta = Math.round((temp * 1.8 + 32));
    temperatura = conta;    
    return conta;
}

function converteFahToCelcius(temp) {
    const conta = Math.round(((temp - 32) * (5/9)));
    temperatura = conta
    return conta;
}
