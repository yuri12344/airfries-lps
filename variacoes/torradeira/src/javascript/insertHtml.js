const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Fritadeira AirFry Barbecue</title>
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/slider.css" />
    <link rel="stylesheet" href="styles/leafsAnimation.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />

  </head>

  </head>
  <body class="m-auto max-w-vtex">
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
          class="w-full px-8 m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto" />

        <div
          class="flex flex-col items-start gap-20 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div
            class="flex flex-col items-center justify-end w-full text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/gap_icon.png" alt="Icone" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-lg font-poppins">
              ABERTURA<br class="hidden md:block" />
              EXTRA LARGA
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Acomode fatias de diversos tipos de pães e tamanhos, tornando o processo de
              torrar mais versátil e eficiente.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/cycle_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-lg font-poppins">
              REAQUECE E <br class="hidden md:block" />
              DESCONGELA
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Prepare torradas crocantes e saborosas em questão de minutos, seja com
              fatias do dia anterior ou congeladas. 
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/power_red_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-lg font-poppins">
              DESLIGAMENTO <br class="hidden md:block" />
              AUTOMATICO
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Sem precisar acompanhar! Prepare torradas com segurança e economia de
              energia a qualquer hora.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative flex flex-col mt-40 text-white bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-2 gap-4">
          <div class="z-20 flex-shrink-0 ml-8 space-y-6 mt-14 md:mt-12 md:ml-28">
            <h1
              class="text-[1.2rem] md:tracking-tighter font-black  uppercase md:w-[80%] flex-shrink-0 sm:text-[3rem] whitespace-nowrap font-poppins flex flex-col">
              7 NÍVEIS DE
              <span class="text-lg tracking-widest font-extralight sm:text-[2.5rem]">TOSTAGEM</span>
            </h1>
            <p class="font-inter opacity-80 text-sm tracking-tighter w-[200%] sm:w-[75%]">
              Com sete níveis de tostagem e acabamento em inox, a
              <b class="font-bold">Torradeira Elétrica Prosdócimo da WAP</b> combina
              design moderno à funcionalidade, tornando-a a escolha ideal para o seu
              cotidiano.
            </p>
            <p class="font-inter  text-sm tracking-tighter w-[200%] sm:w-[75%]">
              A torradeira WAP possui as funcionalidades de ‘Descongelamento’,
              ‘Reaquecimento’ e ‘Cancelamento’. Além disso, com as aberturas extralargas e
              o desligamento automático, você tem controle total sobre a crocância
              perfeita da sua torrada.
            </p>
          </div>
          <div class="flex items-start justify-end w-full ">
            <img
              src="./images/produto_com_alimento.png"
              class="mr-0 -translate-y-[3rem] w-full -translate-x-[1rem] md:-translate-y-[6rem] md:translate-x-[0rem] md:mr-14 md:w-full"
              alt="" />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-1/3 h-0.5 bg-white bg-opacity-20 rounded-full"></div>
          <h1 class="my-8 text-center uppercase md:text-4xl md:my-14">
            Escolha sua <b class="font-bold">crocância</b> perfeita
          </h1>
        </div>
      </section>

      <section class="flex flex-col mt-24 md:flex-row md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col">
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1
              class="text-2xl md:text-3xl -top-[1rem] font-extrabold font-poppins uppercase">
              Torradas gostosas <br />e crocantes  
            </h1>

            <p class="mt-3 text-base md:w-[80%] font-light text-black font-inter md:mt-5">
              Refeições deliciosas e descomplicadas mudam a rotina! Por isso, as torradas
              no café da manhã precisam estar do seu jeito.
            </p>
            <p class="mt-3 text-base md:w-[80%] font-light text-black font-inter">
              As aberturas largas da
              <b class="font-bold">Torradeira Elétrica Prosdócimo da WAP</b> garantem que
              você tenha fatias crocantes, mesmo com diferentes tipos de pães.
            </p>
          </div>
          <img
            class="left-0 w-full mt-10 ml-4 md:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1
              class="hidden mt-8 text-2xl font-extrabold uppercase md:block font-poppins">
              Cardápio de chef
            </h1>
            <h1
              class="block mt-8 text-lg font-extrabold uppercase md:hidden font-poppins">
              WAP Cardápio de chef
            </h1>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5">
              Aproveite as receitas assinadas pelo chef Henrique Fogaça e prepare pratos
              deliciosos. São receitas inéditas, perfeitas para diversos momentos do seu
              dia.
            </p>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter">
              Deixe suas refeições ainda melhores! Desperte o chef que há em você com a
              linha de cozinha da WAP.
            </p>
            <div class="flex items-center justify-center mt-10 md:justify-start wf">
              <span
                class="px-6 py-3 font-bold text-white rounded-lg cursor-pointer font-poppins bg-red-default"
                onclick="window.open('https://wap.ind.br/receitas', '_blank')">
                ACESSE AS RECEITAS DA WAP
              </span>
            </div>
          </div>
        </div>
        <img
          class="hidden w-1/2 mx-auto mt-10 mr-4 h-max md:block sm:mt-0"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho.png"
          alt="Henrique fogaça com a mão na cintura" />
      </section>

      <!--Funcionalidade para sua rotina Desktop-->
      <section class="hidden grid-cols-2 mt-64 md:grid bg-black-default">
        <div class="flex flex-col items-end justify-center mr-0 text-white ">
          <div class="mr-16 w-[70%] ">
            <h1 class="text-3xl font-bold font-poppins">FUNCIONALIDADE <br> PARA SUA ROTINA</h1>
            <p class="mt-10 text-base tracking-tighter font-inter">Comece o dia com um café da manhã perfeito ou um brunch descontraído com a <b class="font-bold">Torradeira Elétrica Prosdócimo WAP</b>. Escolha entre os sete níveis de tostagem para ter torradas frescas e, com a elevação automática, nunca mais se preocupe em queimar as fatias.</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full ">
          <img src="./images/produto_cima.png" class="" style="transform: scale(1.5)" alt="">
        </div>
      </section>

      <!--Funcionalidade para sua rotina Mobile-->
      <section class="flex flex-col items-end pb-10 mt-20 md:hidden bg-black-default">
        <div class="inline-block w-[30%] -mt-20 mr-12">
          <img src="./images/produto_cima.png" class="-rotate-90" alt="">
        </div>
        <div class="inline-block -mt-20 mx-7">
          <h1 class="inline-block text-lg font-bold leading-tight text-white font-poppins">FUNCIONALIDADE <br> PARA SUA ROTINA</h1>
          <p class="mt-8 text-sm tracking-tighter text-white font-inter">Comece o dia com um café da manhã perfeito ou um brunch descontraído com a <b class="font-bold">Torradeira Elétrica Prosdócimo WAP</b>. Escolha entre os sete níveis de tostagem para ter torradas frescas e, com a elevação automática, nunca mais se preocupe em queimar as fatias.</p>
        </div>
      </section>
      
      <!--Product inspect mobile-->
      <section class="">
        <div class="flex flex-col mt-10 md:hidden">
          <div class="mx-10">
            <img src="./images/product-inspect-mobile.png" alt="">
          </div>
          <div class="relative flex">
            <div class="flex-none w-full p-4 px-12 rounded-lg shadow-lg h-44">
              <h1 id="cardTitle" class="text-xl font-bold font-poppins">Título</h1>
              <p id="cardDescription">Descrição</p>
            </div>
            <button class="absolute left-0 p-2 transform -translate-y-1/2 bg-white top-1/2" onclick="changeCard(-1)">&#10094;</button>
            <button class="absolute right-0 p-2 transform -translate-y-1/2 bg-white top-1/2" onclick="changeCard(1)">&#10095;</button>
          </div>
        </div>
      </section>

      <!--Product inspect desktop-->
      <section class="grid mx-5 mt-10 md:mt-[12rem] lg:grid-cols-2 md:mx-20">
        <div class="relative   flex flex-col md:w-[500px] md:h-[650px]">
          <!--Desktop product inspect-->
          <div class="hidden md:block">
            <img class="" src="./images/product-inspect-desktop.png" alt="">
            <span id="span1" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4 bottom-[15rem] left-[9%]">
              <div class=" w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">ESCOLHA A CROCÂNCIA PERFEITA</h1>
                <p class="tracking-tighter font-inter">Com 7 níveis de tostagem, você tem o controle total sobre o ponto da sua torrada, garantindo que ela fique do jeito que você gosta.</p>
              </div>
            </span>
            <span id="span2" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4 bottom-[19rem] left-[16.5%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">CONTROLE TOTAL</h1>
                <p class="tracking-tighter font-inter">A função ‘Cancelar’ permite que você interrompa o processo de tostagem a qualquer momento.</p>
              </div>
            </span>
            <span id="span3" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4 bottom-[21.9rem] left-[16.5%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">MANTENHA O SABOR</h1>
                <p class="tracking-tighter font-inter">Com o modo ‘Reaquecer’, os pães do dia anterior continuam quentinhos, sem tostar, mantendo o sabor original.</p>
              </div>
            </span>
            <span id="span4" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4  bottom-[24.4rem] left-[16.5%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">TEXTURA ORIGINAL</h1>
                <p class="tracking-tighter font-inter">No modo ‘Descongelar’, pães congelados se transformam em fatias torradas em questão de minutos.</p>
              </div>
            </span>
            <span id="span5" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4  bottom-[22.2rem] left-[28%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">ELEVAÇÃO AUTOMÁTICA</h1>
                <p class="tracking-tighter font-inter">Suas fatias de pão são automaticamente elevadas quando atingem a tostagem desejada, garantindo segurança e praticidade.</p>
              </div>
            </span>
            <span id="span6" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute  rounded-full px-4 py-4  bottom-[27.5rem] right-[39%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 left-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">VERSATILIDADE NO PREPARO</h1>
                <p class="tracking-tighter font-inter">A abertura extralarga permite que você prepare uma variedade de pães, seja ele francês ou fatiado, para torradas deliciosas.</p>
              </div>
            </span>
          </div>
        </div>
        <div class="flex flex-col m-auto md:ml-20 justify-center w-[95%] gap-5 text-black-default">
          <h1 class="md:text-4xl text-xl w-[90%] font-bold font-poppins">CONHEÇA A TORRADEIRA ELÉTRICA PROSDÓCIMO WAP</h1>
          <p class="w-[95%]">A <b class="font-bold">Torradeira Elétrica WAP</b> combina um design moderno com inúmeras funcionalidades, proporcionando segurança e praticidade. Além da bandeja coletora de migalhas, que mantém sua cozinha livre de sujeiras, o desligamento automático economiza energia e tempo, simplificando sua rotina.</p>
        </div>
      </section>

      <section class="grid m-auto md:-mt-20 lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 pb-20 md:items-start md:pl-20 gap-y-12">
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="w-10 md:w-14 md:block"
              src="./images/icons/power_icon.png"
              alt="Icone lâmpada" />
            <h1
              class="w-full mt-5 font-black uppercase md:text-start md:text-2xl text-black-default font-poppins">
              segurança e economia
            </h1>
            <p
              class="font-inter md:w-[25rem] md:text-lg w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Mais segura e econômica, ao fim da torragem das fatias, o desligamento do
              equipamento é automático.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="w-10 md:block md:w-14"
              src="./images/icons/bolhas.png"
              alt="Icone lava louça" />
            <h1
              class="w-full mt-5 font-black uppercase md:text-start md:text-2xl text-black-default font-poppins">
              Limpeza descomplicada
            </h1>
            <p
              class="font-inter md:w-[25rem] md:text-lg w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              A bandeja coletora de migalhas removível simplifica a limpeza após o uso,
              tornando-a uma tarefa rápida e simples.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="w-10 md:block md:w-14"
              src="./images/icons/estrela_gota.png"
              alt="Icone lava louça" />
            <h1
              class="w-full mt-5 font-black uppercase md:text-start md:text-2xl text-black-default font-poppins">
              Elegância em aço inox
            </h1>
            <p
              class="font-inter md:w-[25rem] md:text-lg w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              O acabamento em aço inox combina beleza, sofisticação e resistência,
              transformado sua jornada culinária. 
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center lg:order-2">
          <img
            class="hidden lg:block"
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
    <script src="./javascript/senders.js"></script>
    <script src="./javascript/productInspect.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
  </body>
</html>

`;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
