const htmlContent = `
<!DOCTYPE html>
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
    <!-- Link para o CSS do Swiper -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet" />

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
          class="w-full px-6 m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto" />

        <div
          class="flex flex-col items-start gap-12 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/icon_arco.png" alt="Icone" />
            <h1
              class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              PAINEL DIGITAL
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Intuitivo, ele possui 10 funções pré-programadas, incluindo as receitas
              clássicas de air fryer, mais a função reaquecer.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/light_icon.png" alt="Icon" />

            <h1
              class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              PORTA COM VISOR
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              A porta com abertura lateral, equipada com visor e luz interna, permite
              monitorar refeições sem abrir, mantendo calor.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-5 text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/circulacao_360_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              CIRCULAÇÃO DE AR
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Assa o alimento por igual, crocante por fora e macio por dentro, sem excesso
              de óleo, para pratos mais saudáveis.
            </p>
          </div>
        </div>
      </section>

      <section
        class="flex flex-col gap-2 mt-20 text-white md:mt-60 bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-2 gap-8">
          <div class="relative z-10 mt-8 ml-8 space-y-6 md:mt-16 md:ml-20">
            <h1 class="text-base font-bold uppercase md:w-[60%] md:text-3xl font-poppins">
              DESCUBRA A REVOLUÇÃO CULINÁRIA COM A FRITADEIRA AIRFRY OVEN DIGITAL
            </h1>
            <p
              class="font-inter font-light tracking-tighter text-sm sm:text-base w-[200%] lg:w-[70%]">
              A WAP combinou as funcionalidades das fritadeiras air fryer com a
              versatilidade dos fornos convencionais para mudar a forma como você cozinha
              diariamente.
            </p>
            <p
              class="font-inter font-light tracking-tighter text-sm sm:text-base w-[200%] lg:w-[70%]">
              Com dois andares e temperatura ajustável de 30°C a 200°C, ela é escolha
              ideal para preparar vários pratos, de uma só vez, para toda família.
            </p>
          </div>
          <div class="relative flex items-start justify-start w-[120%]">
            <img
              class="absolute z-10 animation object-fill w-[2rem] md:w-[8rem] md:left-5 left-8 animate-float"
              src="./images/effect_imgs/effect_img_2.png"
              alt="Imagem de efeito" />
            <img
              class="absolute z-10 animation object-fill w-[2rem] hidden md:block -top-[6rem] md:top-10 md:w-[10rem] md:right-20 animate-float"
              src="./images/effect_imgs/effect_img_4.png"
              alt="Imagem de efeito" />
            <img
              class="absolute z-10 object-fill w-[5rem] animation top-3 md:-top-20 -left-16 md:-left-[12rem] md:w-[15rem] animate-float"
              src="./images/effect_imgs/effect_img_1.png"
              alt="Imagem de efeito" />
            <img
              class="absolute z-10 animation object-fill  right-[5rem] md:right-14 top-[5rem] w-[5rem] md:w-[15rem] animate-float"
              src="./images/effect_imgs/effect_img_3.png"
              alt="Imagem de efeito" />
            <img
              src="./images/produto_com_alimento.png"
              class="mr-0 -translate-y-[2rem] w-[14rem] -translate-x-[2rem] sm:-translate-y-[2rem] md:-translate-y-[5rem] md:-translate-x-[8rem] md:mr-5 md:w-full"
              alt="" />
          </div>
        </div>

        <div
          class="flex flex-col-reverse gap-4 px-8 pb-20 mt-10 md:mt-0 md:px-20 lg:grid lg:grid-cols-2">
          <div class="flex items-center justify-center px-4 md:px-8 md:py-8">
            <img
              src="./images/pão_de_queijo.png"
              alt="Bandeija com alimento"
              class="object-contain w-full h-full lg:-mt-8 lg:translate-y-10 -mt-44 translate-y-44" />
          </div>
          <div
            class="flex flex-col items-center justify-center gap-4 mt-12 md:mt-0 font-poppins">
            <h1 class="text-center">
              <span class="text-4xl font-bold md:text-7xl">12 LITROS</span><br />
              <span class="text-xl font-light md:text-5xl">DE CAPACIDADE</span>
            </h1>
            <p
              class="md:text-center font-inter font-light tracking-tighter text-sm sm:text-base lg:w-[70%] w-full">
              Combine a eficiência da fritadeira elétrica com a versatilidade do forno
              convencional para preparar refeições saudáveis e deliciosas, em grandes
              quantidades, dignas de chef.
            </p>
          </div>
        </div>
      </section>

      <!--Slider-->
      <section class="grid mx-5 mt-20 lg:mt-0 lg:ml-20 md:grid-cols-2">
        <div class="flex flex-col md:gap-10 md:justify-center md:ml-0">
          <div class="flex flex-col h-auto gap-3 mt-10 md:mt-0">
            <img src="./images/icons/icon_arco.png" alt="logo" class="w-10 md:w-14" />
            <h1 class="font-black md:text-2xl text-black-default font-poppins">
              10 FUNÇÕES <br />
              PRÉ-PROGRAMADAS
            </h1>
            <p
              class="text-base tracking-tighter text-black-default font-light font-inter lg:w-[80%] w-[70%]">
              Com 10 funções pré-programadas, incluindo as receitas clássicas de air
              fryer, mais a função reaquecer.
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

      <section class="flex flex-col items-center justify-center mx-5 mt-20">
        <h1 class="w-11/12 text-xl font-bold md:text-4xl md:text-center font-poppins">
          VERSATILIDADE PARA VOCÊ EXPLORAR<br class="hidden md:block" />TODAS AS
          POSSIBILIDADES
        </h1>
        <p class="w-11/12 mt-6 md:w-2/3 text-black-default md:text-center">
          A <b class="font-bold">Fritadeira AirFry Oven Digital da WAP</b> é a escolha
          certa para quem busca uma solução culinária saudável e eficiente. Essencial na
          cozinha moderna por sua capacidade e versatilidade, ela permite que você crie
          pratos saborosos rapidamente, sem o uso de óleo.
        </p>
        <img
          src="./images/produto_grid.png"
          alt="Exposição de produtos"
          class="w-full mt-16" />
      </section>

      <section class="flex flex-col items-center justify-center mt-20 lg:mt-40">
        <img
          class="hidden md:block"
          src="./images/mais_possibilidades_section_desktop.png"
          alt="" />
        <img
          class="md:hidden"
          src="./images/mais_possibilidades_section_mobile.png"
          alt="" />
      </section>

      <section class="grid m-auto md:ml-10 lg:grid-cols-2">
        <div
          class="flex-col hidden md:flex items-end pb-[18rem] rounded-b-full lg:bg-red-default">
          <img
            class="translate-y-[6rem] hidden lg:block translate-x-7 w-[80%]"
            src="./images/produto_para_esquerda.png"
            alt="Fritadeira airfry" />
        </div>

        <div

          class="flex flex-col gap-[2.5rem] md:items-start mt-10 justify-center items-center md:ml-28 md:mt-0 lg:py-14 cards-section">
          <div class="flex flex-col items-center justify-center mt-10 text-center md:text-start md:justify-start md:items-start">
            <img class="w-[3rem] md:hidden" src="./images/icons/bubble_red.png" alt="" />
            <img class="w-[3rem] hidden md:block" src="./images/icons/bubble_black.png" alt="" />

            <h1 class="mt-3 text-base font-bold md:text-2xl font-poppins">
              FÁCIL LIMPEZA
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1">
              As camadas antiaderentes marmorizadas Gray Stone, além de conferir charme
              aos acessórios, garante que os alimentos não grudem.
              <br /><br />
              A porta com abertura lateral é removível para torna a limpeza uma tarefa
              rápida e descomplicada. 
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start">
            <img class="w-[3rem] md:hidden" src="./images/icons/icon_arco.png" alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <img class="w-[3rem] hidden md:block" src="./images/icons/arch_black.png" alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 text-base font-bold md:text-2xl font-poppins">
              PAINEL DIGITAL
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Intuitivo, ele possui 10 funções pré-programadas para facilitar sua rotina
              culinária, incluindo as receitas cotidianas e a função reaquecer. 
            </p>
          </div>
        </div>
      </section>

      <section class="grid ml-5 mt-14 md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col md:px-0 md:mr-5 md:ml-20">
          <h1 class="text-xl md:text-2xl -top-[1rem] font-extrabold font-poppins">
            FAÇA FRITURAS SEM <br class="hidden md:block" />
            UTILIZAR ÓLEO.
          </h1>

          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            A evolução da air fryer já chegou! Agora, o almoço em família ou o preparo das
            porções para o encontro entre amigos está mais fácil do que nunca.<br /><br />

            Vá além das batatas fritas! Complete sua cozinha utilizando as funções do
            forno e da fritadeira simultaneamente, criando receitas de dar água na boca.
          </p>
          <img
            class="left-0 w-full mt-10 sm:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <h1 class="hidden mt-16 text-2xl font-extrabold md:block font-poppins">
            CARDÁPIO DE CHEF
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            CARDÁDIO DE CHEF
          </h1>
          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            Aprenda receitas exclusivas, assinados pelo chef Henrique Fogaça, e transforme
            o cardápio da sua casa com pratos simples e deliciosos.<br /><br />

            Compartilhando ingredientes e dicas de preparo, Fogaça trouxe receitas
            selecionadas para explorar ao máximo toda linha cozinha WAP.
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
      </section>

      <section
        class="relative grid m-auto mt-20 overflow-visible text-white lg:mt-80 lg:pb-10 bg-black-default lg:rounded-3xl lg:grid-cols-2">
        <div class="w-[85%] m-auto mt-10 lg:mx-0 lg:ml-20 lg:mt-20">
          <h3 class="font-light font-poppin text-[1.25rem] lg:text-[2.5rem]">
            CIRCULAÇÃO DE AR
          </h3>
          <h1
            class="lg:text-[5.625rem] -mt-4 lg:-mt-8 text-[2.8rem] font-bold font-poppins">
            EM 360°
          </h1>
          <p
            class="font-light lg:text-[1.25rem] w-[80%] md:w-[90%] tracking-tighter font-inter">
            A tecnologia de circulação de ar em 360° garante um cozimento uniforme do
            alimento, deixando-o crocante por fora e macio por dentro, além de eliminar o
            óleo em excesso, proporcionando pratos mais saudáveis. 
          </p>
        </div>
        <img
          class="m-auto mt-10 mb-[-10%] lg:mb-0 w-[18rem] lg:w-[30rem] lg:-mt-40"
          src="./images/circulacao_360.png"
          alt="Circulação de ar 360 graus" />
      </section>

      <section class="grid m-auto -mt-5 lg:grid-cols-2">
        <div class="flex flex-col pb-20 rounded-b-full lg:bg-red-default">
          <div class="flex flex-col gap-8 mx-5 lg:m-auto md:justify-center">
            <h1
              class="mt-32 text-2xl font-bold text-black md:pl-5 lg:text-white font-poppins">
              MAIS POSSIBILIDADES,<br />
              SEM PERDER O SABOR
            </h1>
            <p
              class="lg:text-white mb-4 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]">
              A Fritadeira Elétrica AirFry Oven da WAP é potente e espaçosa, ideal para
              preparar alimentos maiores e em grandes quantidades.
              <b class="font-bold">Quer ver exemplos?</b>
            </p>
            <p
              class="lg:text-white mb-8 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]">
              Faça um frango suculento, bolos deliciosos, batata frita ou até mesmo uma
              pizza bem recheada para compartilhar com os amigos, tudo de forma rápida e
              descomplicada.
            </p>
          </div>
          <img class="hidden px-10 lg:block" src="./images/produto_com_batata.png" alt="Fritadeira airfry"/>
          <img class="lg:hidden" src="./images/cesto_com_alimento.png" alt="Fritadeira airfry"/>
        </div>

        <div
          class="flex flex-col gap-[2.5rem] md:items-start  ml-5 md:mt-14 md:ml-20 lg:py-14 cards-section">
          <div class="">
            <img class="w-10 md:w-14" src="./images/icons/timer_icon.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              TIMER DE 120 MIN
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1">
              Tenha controle total no processo de cozimento com o timer, que emite um
              aviso sonoro ao final do preparo dos alimentos
            </p>
          </div>

          <div>
            <img
              class="w-10 md:w-14"
              src="./images/icons/temperature_icon.png"
              alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              TEMPERATURA DE ATÉ 200º C
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              O seletor de temperatura, com variação de 30°C a 200°C, permite que você
              escolha a opção ideal para diversos preparos.
            </p>
          </div>

          <div>
            <img class="w-10 md:w-14" src="./images/icons/power_icon.png" alt="" />

            <h1 class="mt-3 font-bold md:text-2xl font-poppins">SEGURANÇA NA ROTINA</h1>

            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Ao fim do tempo selecionado no timer, a fritadeira desliga automaticamente,
              emitindo um aviso sonoro. 
            </p>
          </div>

          <div>
            <img class="w-10 md:w-14" src="./images/icons/alca_icon.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">PORTA REMOVÍVEL</h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Ao mover a trava, pressione o botão para retirar o cesto, facilitando a
              utilização e a limpeza interna da air fryer. 
            </p>
          </div>
        </div>
      </section>

      <section class="grid m-auto lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 pb-20 gap-y-20 ">
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">

            <img class="hidden w-10 md:w-14 md:block" src="./images/icons/lampada.png" alt="Icone lâmpada" />
            <img class="w-10 md:w-14 md:hidden" src="./images/icons/light_icon.png" alt="Icone lâmpada" />
            <h1 class="w-full mt-5 font-bold uppercase md:text-start md:text-2xl text-black-default font-poppins">
              PORTA COM VISOR E LUZ INTERNA
            </h1>
            <p
              class="font-inter  md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              A porta com abertura lateral, equipada com visor e luz interna permite que
              você acompanhe o progresso de suas refeições sem abrir a porta, mantendo o
              calor interno.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img class="hidden w-10 md:block md:w-14" src="./images/icons/lava_louca.png" alt="Icone lava louça" />
            <img class="w-10 md:hidden md:w-14" src="./images/icons/lavalouca_red.png" alt="Icone lava louça" />
            <h1
              class="w-full mt-5 font-bold uppercase md:text-start md:text-2xl text-black-default font-poppins">
              USE NA LAVA-LOUÇAS
            </h1>
            <p
              class="font-inter  md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Após o uso, você pode higienizar os acessórios da Fritadeira Elétrica AirFry
              Oven da WAP na lava-louça de forma prática.  
            </p>
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

      <section
        class="relative flex items-center justify-center pb-4 m-auto max-w-screen-2xl">
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
</html>

    `;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
    