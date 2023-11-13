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
            class="flex flex-col items-center justify-end w-full text-center md:mx-5 md:w-1/4">
            <img class="w-14" src="./images/icons/icon_arco.png" alt="Icone" />
            <h1
              class="mt-4 text-xl font-black leading-snug text-center text-black uppercase md:text-lg font-poppins">
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
              class="mt-4 text-xl font-black leading-snug text-center text-black uppercase md:text-lg font-poppins">
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
              class="mt-4 text-xl font-black leading-snug text-center text-black uppercase md:text-lg font-poppins">
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
              class="mt-4 text-xl font-black leading-snug text-center text-black uppercase md:text-lg font-poppins">
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
          <div class="relative z-20 ml-8 space-y-10 mt-14 md:mt-36 md:ml-20">
            <h1 class="text-base font-bold uppercase md:w-[70%] md:text-4xl font-poppins">
              Descubra a revolução culinária com a Fritadeira WAP AirFry Barbecue
              Digital! 
            </h1>
            <p
              class="font-inter opacity-80 text-base tracking-tighter w-[200%] lg:w-[75%]">
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
              class="absolute animation object-fill md:block hidden w-[20rem] -top-40 -left-10 animate-subtle"
              alt="" />
            <img
              src="./images/effect_imgs/effect_img_1.png"
              class="absolute z-10 animation object-fill w-[3rem] top-24 md:top-14 md:w-[3rem] right-[1%] md:right-[inherit] md:left-[52%] animate-float"
              alt="" />
            <img
              src="./images/effect_imgs/effect_img_3.png"
              class="absolute z-10 animation object-fill w-[8rem] -top-12 md:top-80 md:w-[5rem] md:right-[4%] md:left-[inherit] -left-12 animate-float"
              alt="" />
            <img
              src="./images/effect_imgs/effect_img_4.png"
              class="absolute z-10 animation object-fill w-[6rem] top-12 md:top-48 md:w-[10rem] md:-right-[3%] right-[30%] animate-float"
              alt="" />
            <img
              src="./images/produto_com_alimento.png"
              class="mr-0 -translate-y-[6rem] w-[13rem] -translate-x-[1rem] md:-translate-y-[6rem] md:translate-x-[0rem] md:mr-14 md:w-full"
              alt="" />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-1/3 h-0.5 my-14 bg-white bg-opacity-20 rounded-full"></div>
          <h1 class="text-center">
            <span class="text-4xl font-bold md:text-7xl">10 LITROS</span><br />
            <span class="text-xl font-light md:text-5xl">DE CAPACIDADE</span>
          </h1>
          <p
            class="mx-8 mt-10 text-sm font-light tracking-tighter md:w-1/2 opacity-80 md:text-center font-inter sm:text-base">
            O cesto com a capacidade de 10 litros permite o preparo de grandes porções,
            sem empilhar a comida, assando por igual.  
          </p>
          <img
            src="./images/produto_capacidade.png"
            alt=""
            class="hidden w-full px-12 mb-8 md:block" />
          <img
            src="./images/produto_capacidade_mobile.png"
            alt=""
            class="w-full px-12 mb-8 md:hidden" />
        </div>
      </section>

      <section class="grid mx-8 mt-16 md:mt-28 lg:mt-0 lg:ml-20 md:grid-cols-2">
        <div class="flex flex-col md:gap-10 md:justify-center md:ml-0">
          <div class="flex flex-col h-auto gap-3 mt-10 md:mt-0">
            <div
              class="px-4 py-4 mb-5 text-2xl font-bold text-white rounded-md bg-red-default w-max">
              12 EM 1
            </div>
            <h1
              class="text-xl font-black md:w-5/6 md:text-xl text-black-default font-poppins">
              EXPLORE AO MÁXIMO SEU PODER NA COZINHA E IMPRESSIONE A FAMÍLIA TODA 
            </h1>
            <p
              class="text-base opacity-80 tracking-tighter text-black-default font-light font-inter lg:w-[80%] md:w-[70%]">
              Você tem ideia de quantas delícias pode fazer com sua
              <b class="font-bold">WAP Fritadeira AirFry Barbecue Digital Prosdócimo?</b>
              Com 1700W de potência, um duplo sistema de aquecimento e tecnologia
              Smokless, você pode preparar uma suculenta picanha na air fryer em um
              ambiente livre de fumaça.
            </p>
          </div>

          <!--Controler desktop-->
          <div
            class="hidden md:flex flex-col items-start justify-center h-[12rem] rounded-l-full py-4 bg-red-default">
            <div class="flex flex-col gap-5 ml-20 text-white">
              <div class="flex flex-col text-start">
                <h2 class="text-2xl font-bold card-title"></h2>
                <p
                  class="text-base card-description font-poppins max-w-[80%] leading-tight"></p>
              </div>
              <div class="flex items-center justify-center gap-5">
                <p class="font-bold card-counter"></p>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer previous"
                  style="background-image: url('./images/icons/left_sign.png')"></div>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer next"
                  style="background-image: url('./images/icons/right_sign.png')"></div>
              </div>
            </div>
          </div>
        </div>
        <!--Images do slider-->
        <div
          class="flex flex-col items-center justify-center w-full mt-10 lg:pb-20 sm:mt-20 md:mt-20 md:-ml-10">
          <div
            class="relative flex items-end justify-end h-full mr-5 md:mx-0 sm:mx-20">
            <img src="./images/slider/background_image.png" class="" alt="" />
            <img
              alt="Imagens de alimentos"
              id="card-image"
              class="absolute z-10 px-2 mt-10 mb-10 transition-opacity duration-500 rounded-3xl" />
          </div>
        </div>
        <!--Controler mobile-->
        <div
          class="flex flex-col items-center justify-center h-48 px-10 text-white rounded-full mt-14 md:hidden bg-red-default">
          <div class="flex items-start justify-between w-full">
            <h2
              class="text-black font-poppins ml-5 card-title font-black leading-[120.5%] uppercase"></h2>
            <div class="flex items-center justify-center flex-shrink-0 w-max">
              <p class="mr-3 text-sm font-bold card-counter"></p>
              <div
                class="mr-2 bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 previous"
                style="background-image: url('./images/icons/left_sign.png')"></div>
              <div
                class="bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 next"
                style="background-image: url('./images/icons/right_sign.png')"></div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-2">
            <p class="ml-5 text-xs card-description font-inter"></p>
          </div>
        </div>
      </section>

      <section class="flex flex-col items-center justify-center mx-8 mt-28">
        <h1 class="text-xl font-black md:w-11/12 md:text-3xl md:text-center font-poppins">
          VERSATILIDADE PARA VOCÊ EXPLORAR<br class="hidden md:block" />
          TODAS AS POSSIBILIDADES
        </h1>
        <p class="mt-6 md:w-2/3 text-black-default md:text-center">
          A <b class="font-bold">AirFry Barbecue WAP</b> amplia suas opções culinárias!
          Para tornar sua experiência na cozinha ainda mais completa, ela garante a cocção
          uniforme dos alimentos sem utilizar óleo. Prepare receitas mais saudáveis para
          toda a família de forma descomplicada todos os dias.
        </p>
        <img
          src="./images/produto_grid.png"
          alt="Exposição de produtos"
          class="hidden w-full mt-8 md:mt-16 md:block" />
        <img
          src="./images/produto_grid_mobile.png"
          alt="Exposição de produtos"
          class="w-full mt-8 md:mt-16 md:hidden" />
      </section>

      <section class="flex flex-col w-full mt-12 md:mt-48 md:flex-row">
        <div
          class="flex flex-col md:min-w-[50%] justify-center w-full md:w-1/2 px-8 py-8 md:py-48 rounded-full md:bg-red-default">
          <img
            class="hidden w-12 h-12 md:block"
            src="./images/icons/parts_icon.png"
            alt="Icone chefe" />
          <h1
            class="mt-8 mb-4 text-xl font-black uppercase md:text-white md:text-4xl font-poppins">
            ACESSÓRIOS PARA VOCÊ FAZER DE TUDO
          </h1>
          <p
            class="font-inter text-base tracking-tighter md:text-white w-full lg:w-[75%]">
            A <b class="font-bold">air fryer Barbecue</b> acompanha um refratário de
            alumínio fundido, tampa de vidro, cesto para fritura, grade para desidratar
            alimentos e uma escova de limpeza, transformando cada refeição em uma
            experiência única de sabor e praticidade.
          </p>
        </div>
        <div class="hidden px-8 md:flex">
          <img
            src="./images/produto_partes.png"
            alt=""
            class="h-full px-4 w-max max-w-[50%] md:px-0 md:mr-8 md:-ml-32" />
          <div class="flex flex-col justify-between pb-16 ml-4 md:pb-16 md:pt-4">
            <div class="flex flex-col">
              <h1 class="text-base font-black md:text-3xl font-poppins">GRELHA</h1>
              <p class="text-xs leading-tight font-inter md:text-base">
                Além de ser versátil, faz comidas no vapor e desidrata alimentos,
                proporcionando sabor de dar água na boca.
              </p>
            </div>
            <div class="flex flex-col">
              <h1 class="text-base font-black md:text-3xl font-poppins">
                CESTO PARA FRITURAS
              </h1>
              <p class="text-xs leading-tight font-inter md:text-base">
                Parte fundamental da fritadeira elétrica air fryer, o cesto ajuda a
                preparar receitas saudáveis e saborosas em grandes quantidades.  
              </p>
            </div>
            <div class="flex flex-col">
              <h1 class="text-base font-black md:text-3xl font-poppins">
                TAMPA DE VIDRO
              </h1>
              <p class="text-xs leading-tight font-inter md:text-base">
                Colabora para a preparação rápida dos pratos, permitindo visualizar e
                cozinhar à vapor.  
              </p>
            </div>
            <div class="flex flex-col">
              <h1 class="text-base font-black leading-tight md:text-3xl font-poppins">
                REFRATÁRIO DE ALUMÍNIO FUNDIDO
              </h1>
              <p class="text-xs leading-tight font-inter md:text-base">
                Ideal para molhos, caldos grelhados e refogados. 
              </p>
            </div>
            <div class="flex flex-col">
              <h1 class="text-base font-black md:text-3xl font-poppins">
                ESCOVA DE LIMPEZA
              </h1>
              <p class="text-xs leading-tight font-inter md:text-base">
                Ideal para remoção das sujeiras mais difíceis. 
              </p>
            </div>
          </div>
        </div>
        <div>
          <img class="px-5 md:hidden" src="./images/produto-partes-mobile.png" alt="">
        </div>
      </section>

      <section
        class="relative flex flex-col mt-40 text-white bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-2 gap-4">
          <div class="relative z-10 mx-8 mt-10 space-y-8 md:mt-20 md:ml-20">
            <h1
              class="text-xl mt-8 md:mt-0 font-black uppercase md:w-[90%] md:text-4xl font-poppins">
              Experimente o sabor do churrasco quando quiser
            </h1>
            <p
              class="font-inter text-base opacity-80 tracking-tighter w-[200%] lg:w-full">
              Prepare uma deliciosa picanha na air fryer na
              <b class="font-semibold"
                >WAP Fritadeira AirFry Barbecue Digital Prosdócimo</b
              >. Com quatro níveis de temperatura para grelhar:
              <b class="font-semibold">baixo, médio, alto e máximo</b>, você pode
              reproduzir o sabor original das carnes de churrasco de forma simples. 
            </p>
          </div>
          <div class="relative flex items-start justify-end w-full">
            <img
              src="./images/alimento.png"
              class="absolute mr-0 -translate-y-[6rem] max-w-none w-[20rem] md:-translate-y-[6rem] md:w-full"
              alt="" />
          </div>
        </div>
        <div class="flex gap-4 mx-8 my-14 md:my-20 md:mx-20">
          <div class="flex flex-col">
            <img
              class="w-12 h-12 md:w-14 md:h-14"
              src="./images/icons/icon_temperature_measure_white.png"
              alt="Icone chefe" />
            <h1
              class="text-base leading-tight mt-4 mb-2 font-black uppercase md:w-[90%] md:text-2xl font-poppins">
              4 TEMPERATURAS PARA GRELHAR
            </h1>
            <p
              class="font-inter opacity-80 text-sm md:text-base tracking-tighter w-[90%]">
              Desfrute da maciez e suculência originais do churrasco, tendo total controle
              sobre o preparo. Escolha entre os diferentes pontos de cocção, que vão desde
              carne malpassada até bem passada.
            </p>
          </div>
          <div class="flex flex-col">
            <img
              class="w-12 h-12 md:w-14 md:h-14"
              src="./images/icons/icon_no_smoke_white.png"
              alt="Icone chefe" />
            <h1
              class="text-base uppercase leading-tight mt-4 mb-2 font-black md:w-[90%] md:text-2xl font-poppins">
              tecnologia Smokless
            </h1>
            <p
              class="font-inter opacity-80 text-sm md:text-base tracking-tighter w-[90%]">
              Tenha alimentos mais saborosos e com a textura perfeita, sem ter que se
              preocupar com a fumaça! Utilize a fritadeira air fryer em espaços fechados
              sem incômodo na cozinha.
            </p>
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

      <section class="flex flex-col mt-24 md:flex-row md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col">
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1 class="text-2xl md:text-3xl -top-[1rem] font-extrabold font-poppins">
              FAÇA FRITURAS SEM <br />
              UTILIZAR ÓLEO.
            </h1>

            <p class="mt-3 text-base md:w-[80%] font-light text-black font-inter md:mt-5">
              É possível preparar frituras saborosas, crocantes por fora e macias por
              dentro, com menos gordura! Com a
              <b class="font-bold">Wap Fritadeira AirFry Barbecue Digital Prosdócimo</b>,
              você chega no ponto ideal das receitas sem utilizar óleo ou manteiga no
              preparo.
            </p>
            <p class="mt-3 text-base md:w-[80%] font-light text-black font-inter md:mt-5">
              Sua tecnologia 360° permite fritar os alimentos com ar quente. Ela envolve a
              comida, aquecendo e cozinhando internamente, proporcionando ótimos
              resultados.
            </p>
          </div>
          <img
            class="left-0 w-full mt-10 ml-4 md:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1
              class="hidden mt-16 text-2xl font-extrabold uppercase md:block font-poppins">
              Descubra novas receitas dignas de chef!
            </h1>
            <h1
              class="block mt-10 text-lg font-extrabold uppercase md:hidden font-poppins">
              Descubra um novo cardápio digno de chef!  
            </h1>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5">
              Aprenda receitas exclusivas, desenvolvidas pelo chef Henrique Fogaça, e
              inove no menu da sua casa com pratos simples e saborosos.
            </p>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5">
              Com sugestão de ingredientes e dicas de preparo, Fogaça escolheu receitas
              deliciosas para aproveitar ao máximo todos os produtos da linha de cozinha
              WAP.
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

      <section
        class="relative grid m-auto mt-20 overflow-visible text-white lg:mt-48 lg:pb-10 bg-black-default lg:rounded-3xl lg:grid-cols-2">
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
          class="m-auto mt-10 mb-[-10%] lg:mb-0 w-[18rem] lg:w-full lg:pr-20"
          src="./images/produto_funcionamento.png"
          alt="Circulação de ar 360 graus" />
      </section>

      <section class="grid m-auto -mt-5 lg:grid-cols-2">
        <div class="flex flex-col pb-4 rounded-b-full md:ml-6 lg:bg-red-default">
          <div class="flex flex-col gap-6 mx-8 lg:m-auto md:justify-center">
            <h1
              class="mt-32 text-2xl font-bold text-black md:pl-5 lg:text-white font-poppins">
              A REVOLUÇÃO NO MUNDO<br />
              DAS AIR FRYERS
            </h1>
            <p
              class="lg:text-white mb-4 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter md:w-[26rem]">
              Conheça a <b class="font-bold">fritadeira elétrica</b> Barbecue e prepare
              frango, bife, peixes e muitas outras carnes, que geralmente são fritos,
              grelhados e assados, com uma única airfry.
            </p>
          </div>
          <img
            class="hidden -mt-32 translate-y-32 lg:block"
            src="./images/produto_aberto.png"
            alt="Fritadeira airfry" />
        </div>

        <div
          class="flex flex-col gap-[2.5rem] md:items-start mx-8 md:mt-14 md:ml-20 lg:py-14 cards-section">
          <div class="flex flex-col items-center md:items-start">
            <img class="w-10 md:w-14" src="./images/icons/icon_toque.png" alt="" />
            <h1 class="mt-3 text-xl font-black md:text-2xl font-poppins">
              PAINEL DIGITAL
            </h1>
            <p
              class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1 text-center md:text-start">
              Painel digital com uma interface moderna e intuitiva para controlar suas
              preparações de maneira simples e eficaz.
            </p>
          </div>

          <div class="flex flex-col items-center md:items-start">
            <img class="w-10 md:w-14" src="./images/icons/power_icon.png" alt="" />
            <h1
              class="mt-3 text-xl font-black text-center md:text-2xl font-poppins md:text-start">
              DESLIGAMENTO AUTOMÁTICO
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Ao atingir o tempo pré-definido no timer, a fritadeira emite um aviso sonoro
              e desliga automaticamente. 
            </p>
          </div>

          <div class="flex flex-col items-center md:items-start">
            <img class="w-10 md:w-14" src="./images/icons/estrela_gota.png" alt="" />
            <h1 class="mt-3 text-xl font-black md:text-2xl font-poppins">LIMPA FÁCIL</h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1 text-center md:text-start">
              Ninguém precisa mais perder tempo limpando a air fryer Barbecue! A camada
              dupla antiaderente Gray Stone evita que a gordura e os alimentos grudem no
              cesto e na chapa removíveis.
            </p>
          </div>
        </div>
      </section>

      <section class="ml-5 lg:hidden">
        <img src="./images/produto-aberto-mobile.png" alt="">
      </section>

      <section class="grid m-auto lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 pb-20 gap-y-20 lg:bg-white md:bg-black-default">
          <div
            class="flex flex-col-reverse justify-center md:text-center md:items-center md:flex-col lg:items-start card">
            <div
              class="hidden px-8 py-2 mb-4 text-2xl font-bold text-white rounded-md md:block bg-red-default w-max">
              12 EM 1
            </div>
            <div class="flex flex-col items-center px-8 md:px-0">
              <h1
                class="w-full mt-6 text-xl font-black uppercase md:text-white md:text-2xl lg:text-black-default font-poppins">
                SUA COZINHA DO SEU JEITO!
              </h1>
              <p
                class="font-inter md:text-white md:w-[25rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
                Com um visual sofisticado, capaz de transformar qualquer cozinha, a WAP
                Fritadeira AirFry Barbecue Digital Prosdócimo possui painel digital com
                interface moderna e intuitiva.
              </p>
              <p
                class="font-inter md:text-white md:w-[25rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
                Ela desliga automaticamente e emite um aviso sonoro ao concluir o preparo
                dos pratos, tornando sua rotina mais segura. 
              </p>
            </div>
            <img
              class="left-0 w-full mt-10 ml-16 sm:hidden"
              src="./images/produto_com_fundo.png"
              alt="Imagem do produto" />
            <p
              class="md:w-[90%] w-2/3 px-8 text-xl font-black uppercase md:px-0 md:mt-20 md:text-white text-start md:text-2xl lg:text-black-default font-poppins">
              SUA JORNADA PARA REFEIÇÕES SAUDÁVEIS, SABOROSAS E VERSÁTEIS ESTÁ PRESTES A
              COMEÇAR! 
            </p>
          </div>
        </div>
        <div class="hidden lg:order-2 md:block">
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
