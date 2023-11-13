const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Fritadeira Elétrica Wap Airfry Family 4.1L</title>
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/slider.css" />
    <link rel="stylesheet" href="styles/leafsAnimation.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </head>
  <main class="m-auto max-w-vtex">
    <div class="overflow-x-hidden">
      <header class="flex flex-col items-center">
        <div class="w-full" x-data="{ showVideo: false }">
          <img
            x-show="!showVideo"
            @click="showVideo = true"
            src="./images/cover_video.png"
            alt="Video Thumbnail"
            class="hidden object-cover w-full h-full mt-10 md:block" />
          <iframe
            x-show="showVideo"
            loading="lazy"
            :src="showVideo ? 'https://www.youtube.com/embed/FkZ0bcu_Hwk?enablejsapi=1&autoplay=1' : ''"
            class="w-full mt-10 m-auto h-[40rem] hidden md:block"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
        <h1
          class="py-2 text-center text-white rounded-b-lg md:py-4 px-7 text-1xl font-poppins bg-red-default">
          PROSDÓCIMO
        </h1>
      </header>

      <section class="flex flex-col items-center mt-14 md:mt-36">
        <img
          src="./images/fogaca_apontando_dedo_desktop.png"
          class="hidden w-full px-10 md:block"
          alt="Henrique Fogaca apontando dedo para o produto" />
        <img
          src="./images/fogaca_apontando_dedo_mobile.png"
          class="w-full m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto" />

        <div
          class="flex flex-col items-start gap-20 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-14" src="./images/icons/icon_arco.png" alt="Icone" />
            <h1
              class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              12 FUNÇÕES COM<br class="hidden md:block" />
              PAINEL DIGITAL
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              São 12 funções de cozimento pré-selecionas para facilitar seu dia.  
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-14" src="./images/icons/icon_no_smoke.png" alt="Icon" />
            <h1
              class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              Smokless <br class="hidden md:block" />
              Technology
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Cozinhe em ambientes fechados sem se preocupar com a fumaça.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img
              class="w-14"
              src="./images/icons/icon_temperature_measure.png"
              alt="Icon" />
            <h1
              class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              4 pontos de <br class="hidden md:block" />
              grelhar
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Escolha entre baixa, média, alta e máxima temperatura para o ponto certo das
              receitas.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-14" src="./images/icons/icon_energy_power.png" alt="Icon" />
            <h1
              class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              POTÊNCIA DE<br class="hidden md:block" />
              1700W
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Prepare refeições suculentas com mais rapidez.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative flex flex-col mt-40 text-white bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-2 gap-4">
          <div class="relative z-10 mt-10 ml-5 space-y-10 md:mt-36 md:ml-20">
            <h1 class="text-base font-bold uppercase md:w-[70%] md:text-4xl font-poppins">
              Descubra a revolução culinária com a Fritadeira WAP AirFry Barbecue
              Digital! 
            </h1>
            <p class="font-inter text-base tracking-tighter w-[200%] lg:w-[75%]">
              Com a linha de fritadeiras air fryer da WAP, não há nada que você não possa
              fazer. Cozinhe como um chef profissional, utilizando suas 12 funções, e se
              surpreenda com as possibilidades e a praticidade.
              <br /><br />
              Muito mais que uma fritadeira elétrica, a
              <b class="font-bold">WAP Barbecue</b> permite que você asse, gratine,
              utilizar como forno air fryer, desidrate, prepare pratos na chapa, faça
              ensopados, cozinhe a vapor e mantenha as refeições aquecidas por mais tempo.
            </p>
          </div>
          <div class="flex items-start justify-end w-full">
            <img
              src="./images/effect_imgs/effect_img_2.png"
              class="absolute animation object-fill w-[10rem] -top-32 md:w-[20rem] md:-left-10 left-[2rem] animate-float"
              alt="" />
            <img
              src="./images/produto_com_alimento.png"
              class="mr-0 -translate-y-[6rem] w-[13rem] -translate-x-[1rem] md:-translate-y-[6rem] md:translate-x-[0rem] md:mr-5 md:w-full"
              alt="" />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-1/3 h-0.5 my-8 bg-white bg-opacity-20 rounded-full"></div>
          <h1 class="mt-4 text-center">
            <span class="text-4xl font-bold md:text-7xl">10 LITROS</span><br />
            <span class="text-xl font-light md:text-5xl">DE CAPACIDADE</span>
          </h1>
          <p
            class="w-1/2 mt-10 text-sm font-light tracking-tighter md:text-center font-inter sm:text-base">
            O cesto com a capacidade de 10 litros permite o preparo de grandes porções, sem empilhar a comida, assando por igual.  
          </p>
          <img src="./images/produto_capacidade.png" alt="" class="w-full px-12 mb-8">
        </div>
      </section>

      <section class="grid mx-5 mt-20 lg:mt-0 lg:ml-20 md:grid-cols-2">
        <div class="flex flex-col md:gap-10 md:justify-center md:ml-0">
          <div class="flex flex-col h-auto gap-3 mt-10 md:mt-0">
            <img src="./images/icons/icon_arco.png" alt="logo" class="w-10 md:w-14" />
            <h1 class="font-black md:text-2xl text-black-default font-poppins">
              EXPLORE AO MÁXIMO SEU PODER NA COZINHA E IMPRESSIONE A FAMÍLIA TODA
            </h1>
            <p
              class="text-base tracking-tighter text-black-default font-light font-inter lg:w-[80%] w-[70%]">
              Você tem ideia de quantas delícias pode fazer com sua WAP Fritadeira AirFry Barbecue Digital Prosdócimo? Com 1700W de potência, um duplo sistema de aquecimento e tecnologia Smokless, você pode preparar uma suculenta picanha na air fryer em um ambiente livre de fumaça.
            </p>
          </div>

          <!--Controler desktop-->
          <div
            class="hidden md:flex flex-col items-start justify-center h-[10rem] rounded-l-full bg-red-default">
            <div class="flex flex-col gap-5 ml-20 text-white">
              <div class="flex flex-col text-start">
                <h2 class="text-2xl font-bold card-title"></h2>
                <p class="text-base card-description font-poppins"></p>
              </div>
              <div class="flex items-center justify-center gap-5">
                <p class="font-bold card-counter"></p>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer previous" style="background-image: url('./images/icons/left_sign.png')"></div>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer next" style="background-image: url('./images/icons/right_sign.png')"></div>
              </div>
            </div>
          </div>
        </div>
        <!--Images do slider-->
        <div
          class="flex flex-col items-center justify-center w-full mt-10 lg:pb-20 sm:mt-20 md:mt-20 md:-ml-10">
          <div
            class="relative flex items-center justify-center h-full mr-5 md:mx-0 sm:mx-20">
            <img src="./images/slider/background_image.png" class="" alt="" />
            <img
              alt="Imagens de alimentos"
              id="card-image"
              class="absolute z-10 px-2 mt-10 mb-10 transition-opacity duration-500 rounded-3xl" />
          </div>
        </div>
        <!--Controler mobile-->
        <div
          class="grid items-center justify-center grid-cols-2 py-8 mt-10 text-white rounded-full md:hidden bg-red-default">
          <div class="flex flex-col items-start justify-start h-full">
            <h2
              class="text-black font-poppins ml-5 text-lg card-title font-bold leading-[120.5%] uppercase"></h2>
            <p class="ml-5 text-base card-description font-inter"></p>
          </div>
          <div class="flex items-center justify-center h-full mt-5">
            <p class="mr-4 font-bold card-counter"></p>
            <div
              class="mr-2 bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 previous" style="background-image: url('./images/icons/left_sign.png')"></div>
            <div
              class="bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 next" style="background-image: url('./images/icons/right_sign.png')"></div>
          </div>
        </div>
      </section>
      
      <section id="slider_aduhs" class="relative mx-auto -mt-5 overflow-hidden md:mt-3">
        <div
          id="slider_container"
          class="flex items-start md:pr-[0rem] transition-transform duration-250"></div>
        <div
          id="btn_previous_uas"
          class="absolute z-10 hidden w-10 h-10 p-2 px-4 text-3xl transform -translate-y-1/2 cursor-pointer md:block left-5 top-1/2"
          style="
            background-image: url('./images/icons/left_sign.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          "></div>
        <div
          id="button_next_uasdhuas"
          class="absolute z-20 hidden w-10 h-10 p-2 px-4 transform -translate-y-1/2 cursor-pointer md:block right-5 top-1/2"
          style="
            background-image: url('./images/icons/right_sign.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          "></div>
      </section>

      <section class="grid ml-5 mt-14 md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col md:px-0 md:mr-5 md:ml-20">
          <h1 class="text-2xl -top-[1rem] font-extrabold font-poppins">
            FAÇA FRITURAS SEM <br />
            UTILIZAR ÓLEO.
          </h1>

          <p class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5">
            É possível preparar frituras saborosas, crocantes por fora e macias por
            dentro, com menos gordura! Com a Fritadeira Elétrica WAP AirFry Family 4L,
            você chega no ponto ideal das receitas sem utilizar óleo ou manteiga no
            preparo<br /><br />

            Sua tecnologia permite fritar os alimentos com ar quente. A Air Fryer envolve
            a comida, aquecendo e cozinhando internamente, sem usar o óleo, proporcionando
            ótimos resultados.
          </p>
          <h1 class="hidden mt-16 text-2xl font-extrabold md:block font-poppins">
            CARDÁPIO DE CHEF
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            CARDÁDIO DE CHEF HENRIQUE FOGAÇA
          </h1>
          <p class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5">
            Desperte seu paladar para uma rotina alimentar mais saudável e de dar água na
            boca com receitas assinadas pelo Chef Henrique Fogaça.<br /><br />

            De pratos principais a sobremesa, o chef irá revelar como usar todo o
            potencial da linha de produtos de cozinha da WAP em suas receitas.
          </p>
          <div class="mt-10">
            <span
              class="px-4 py-2 font-bold text-white rounded-md cursor-pointer font-poppins bg-red-default"
              onclick="window.open('https://wap.ind.br/receitas', '_blank')">
              ACESSE AS RECEITAS DA WAP
            </span>
          </div>
        </div>
        <img
          class="w-[30rem] sm:block hidden sm:mt-0 mt-10 mx-auto"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho.png"
          alt="Henrique fogaça com a mão na cintura" />
        <img
          class="left-0 w-full mt-10 sm:hidden"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
          alt="Henrique fogaça com a mão na cintura" />
      </section>

      <section class="z-10 grid justify-center m-auto mt-20 lg:grid-cols-2">
        <img
          class="object-cover sm:w-[30rem] lg:w-[60rem] m-auto"
          src="./images/produto_de_lado.png"
          alt="Frigideura gray stone" />

        <div
          class="flex flex-col justify-center h-full gap-20 pt-10 mx-5 text-center md:pl-10 lg:text-start font-poppins">
          <div class="flex flex-col items-center justify-center lg:items-start">
            <img class="w-12 h-12" src="./images/icons/estrela_gota.png" alt="Icon" />
            <h1 class="mt-6 text-2xl font-bold">GRAY STONE</h1>
            <p class="mt-6 w-[80%] font-light tracking-tighter font-inter">
              Para manter sua air fryer sempre limpa, o revestimento antiaderente com
              acabamento marmorizado evita que os alimentos grudem e é fácil de limpar.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center lg:items-start">
            <img class="w-12 h-12" src="./images/icons/bolhas.png" alt="Icon" />
            <h1 class="mt-6 text-2xl font-bold">FÁCIL LIMPEZA</h1>
            <p class="mt-6 w-[80%] font-light tracking-tighter font-inter">
              A limpeza interna é prática com o cesto removível. Basta pressionar o botão
              e remover o cesto para uma limpeza sem esforço.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative grid m-auto mt-20 overflow-visible text-white lg:mt-80 lg:pb-10 bg-black-default lg:rounded-3xl lg:grid-cols-2">
        <div class="w-[85%] m-auto mt-10 lg:mx-0 lg:ml-20 lg:mt-28">
          <h3 class="font-light font-poppin text-[1.25rem] lg:text-[2.5rem]">
            CIRCULAÇÃO DE AR
          </h3>
          <h1
            class="lg:text-[5.625rem] -mt-4 lg:-mt-8 text-[2.8rem] font-bold font-poppins">
            EM 360°
          </h1>
          <p
            class="font-light lg:text-[1.25rem] w-[80%] md:w-[90%] tracking-tighter font-inter">
            A circulação de ar quente em 360° proporciona mais agilidade e eficiência no
            preparo, eliminando o óleo em excesso, proporcionando pratos mais saudáveis.
          </p>
        </div>
        <img
          class="m-auto mt-10 mb-[-10%] lg:mb-0 w-[18rem] lg:w-[30rem] lg:-mt-40"
          src="./images/circulacao_360.png"
          alt="Circulação de ar 360 graus" />
      </section>

      <section class="grid m-auto -mt-5 md:mx-10 lg:grid-cols-2">
        <div class="flex flex-col pb-20 rounded-b-full lg:bg-red-default">
          <div class="flex flex-col gap-8 mt-5 ml-5 lg:m-auto md:justify-center">
            <h1
              class="mt-20 text-2xl font-bold text-black md:mt-40 md:pl-5 lg:text-white font-poppins">
              WAP AIRFRY <br />
              FAMILY PROSDÓCIMO 4.2 L
            </h1>
            <p
              class="lg:text-white mb-20 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]">
              Preparar refeições deliciosas para toda a família, livres de gordura, sem
              fumaça e sem fritura agora ficou mais fácil. Conheça a ritadeira WAP Air
              Fryer Family, a parceira ideal na cozinha!
            </p>
          </div>
          <img
            class="m-auto w-[20rem] lg:mr-0 md:w-[30rem]"
            src="./images/fritadeira_airfry.png"
            alt="Fritadeira airfry" />
        </div>

        <div
          class="flex flex-col gap-[2.5rem] items-start ml-5 md:ml-14 lg:mt-28 cards-section">
          <div class="">
            <img class="w-[3rem]" src="./images/icons/timer_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              TIMER DE 60 MIN
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1">
              Controle facilmente o tempo de preparo certo para cada uma de suas receitas.
            </p>
          </div>

          <div>
            <img
              class="w-[3rem]"
              src="./images/icons/temperature_icon.png"
              alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              TEMPERATURA DE <br class="md:hidden" />
              80º C ATÉ 200º C
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3">
              Permite a escolha da temperatura ideal para diferentes tipos de alimentos.
            </p>
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/power_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              DESLIGAMENTO AUTOMÁTICO
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3">
              Selecione o tempo necessário de preparo para as receitas e, ao fim do tempo
              no timer, a fritadeira desliga automaticamente, emitindo um aviso sonoro.
            </p>
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/alca_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              ENGATE RÁPIDO
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3">
              Prático, o cesto removível, além de facilitar a limpeza, simplifica o
              manuseio com suas aberturas laterais melhorando a circulação do ar.
            </p>
          </div>
        </div>
      </section>

      <section class="grid m-auto lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 pb-20 gap-y-20 lg:bg-white bg-black-default">
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="hidden lg:block"
              src="./images/icons/chefe_icon.png"
              alt="Icone chefe" />
            <img
              class="w-12 h-12 lg:hidden"
              src="./images/icons/chefe_icon_branco.png"
              alt="Icone chefe" />
            <h1
              class="w-full mt-3 font-bold text-white uppercase md:text-start md:text-2xl lg:text-black-default font-poppins">
              Desperte sua criatividade
            </h1>
            <p
              class="font-inter text-white md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Prepare carnes suculentas, pratos salgados cheios de sabor e até sobremesas
              doces com praticidade. Descubra um mundo de sabores, cozinhando como um chef
              profissional, para toda família.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="hidden w-12 h-12"
              src="./images/icons/grelhados_icon_branco.png"
              alt="Icone chefe" />
            <h1
              class="mt-3 md:w-[25rem] w-[20rem] font-bold text-center text-white uppercase md:text-2xl lg:text-black-default font-poppins">
              Sua jornada para refeições saudáveis, saborosas e versáteis está prestes a
              começar!
            </h1>
          </div>
        </div>
        <div class="lg:order-2">
          <img
            class="hidden mx-5 mt-20 lg:block"
            src="./images/fogaca_sorrindo.png"
            alt="Foto fogaça sorrindo" />
          <img
            class="px-5 mt-10 lg:hidden"
            src="./images/fogaca_sorrindo_mobile.png"
            alt="Foto fogaça sorrindo" />
        </div>
      </section>

      <section class="relative flex items-center justify-center m-auto max-w-screen-2xl">
        <img
          class="object-fill lg:hidden"
          src="./images/fogaca_na_cozinha_mobile.png"
          alt="" />
        <img
          class="hidden object-fill mt-20 lg:block"
          src="./images/fogaca_na_cozinha.png"
          alt="" />
      </section>
    </div>
  </main>
  <script src="./javascript/slider.js"></script>
  <script src="./javascript/senders.js"></script>
  <script src="./javascript/imagesAnimation.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
</html>
`;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
