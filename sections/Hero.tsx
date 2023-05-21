export interface Props {
    heroTittle : string;
    heroTittle2: string;
    heroText: string;
}

function Hero({heroTittle = "SOMOS A MINERCODE", heroTittle2 = "SUA BOUTIQUE DE SOFTWARE", heroText = "Nosso time de especialistas fornece serviços de alto nível que aumentam a qualidade do seu software e sua produtividade"} : Props) {
  return (
    <>
      <div
        class="hero min-h-screen"
        style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-left text-neutral-content">
          <div class="max-w-md">
            <h1 class="text-5xl w-full font-bold">{heroTittle}</h1>
            <h3 class="text-4xl w-full font-light text-primary">{heroTittle2}</h3>
            <p class="mb-5">
              {heroText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
