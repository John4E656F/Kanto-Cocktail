import Image from "next/image";
import { CocktailCard } from "../components/Card";

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center justify-between ">
        <div className="flex flex-col w-full items-center gap-6 text-center  py-16">
        <Image
          className=""
          src="/logo.png"
          alt="Kanto Cocktail logo"
          width={500}
          height={100}
          priority
        />
        
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-white">
            Sa kanto namin, di lang chismis ang matapang. Pati cocktail!
          </h1>
        </div>
        <div className="flex flex-col w-full gap-4  text-center bg-[#57756E] px-8 py-8">
          <h2 className="text-2xl text-white font-semibold ">
            Our Core Selection
          </h2>
          <p className="text-white ">
            Ang Kanto Cocktail na magpapalimot sa’yo ng problema. Tatlong matatapang na espiritu, iikot ang mundo mo sa sarap.
          </p>
        <div className="flex flex-col items-center gap-6 text-center max-w-md mx-auto">
          {/* Download button - centered */}
          <a
            href="/Kanto Cocktail Recipes.pdf"
            download="kanto-cocktail-recipes.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#57756E] shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Download Our Complete Recipes 📥
          </a>
          
          {/* OR divider */}
          <div className="flex items-center gap-4 w-full">
            <hr className="flex-1 border-white/50" />
            <span className="text-white/70 font-medium text-sm px-4">OR</span>
            <hr className="flex-1 border-white/50" />
          </div>
          
          {/* Click instruction */}
          <p className="text-red-800 font-semibold text-lg">
            Click any cocktail card to view full recipe
          </p>
        </div>
          <div className="text-left flex flex-col gap-5 pt-8">
            <CocktailCard
              slug="ailyns-mojito"
              imageSrc="/cocktails/mojito.png"
              imageAlt="Ailyn's Mojito"
              brand="Bacardi Rum"
              title="Ailyn's Mojito"
              description="Ang Ailyn's Mojito ay isang napakasiglang, pampalamig na inumin. Sariwang mint, kalamansi, asukal, at sinamahan ng soda. Ang perpektong tropical cooler para sa lahat."
              items={[
                "Rum",
                "Fresh Mint",
                "Lime Juice", 
                "Simple Syrup",
                "Soda Water"
              ]}
            />
            <CocktailCard
              slug="mine-na"
              imageSrc="/cocktails/daiquiri.png"
              imageAlt="Mine Na Daiquiri"
              brand="Bacardi Rum"
              title="Mine Na (Classic Daiquiri)"
              description="Ang Mine Na Daiquiri, simple lang, pero malakas ang dating. Rum, kalamansi, at asukal—walang arte, malakas ang tama. Perfect pang-aura at pang-sweet."
              items={[
                "Rum",
                "Lime Juice",
                "Simple Syrup",
              ]}
            />
            <CocktailCard
              slug="no-refund"
              imageSrc="/cocktails/sour.png"
              imageAlt="No Refund Tequila Sour"
              brand="Olmeca Reposado Tequila"
              title="No Refund (Tequila Sour)"
              description="Ito na, for the broken-hearted! Reposado tequila na may lime at syrup—may pait, may tamis, at may foam pa sa taas! Pang-drama, pang-senti. NO REFUND sa feelings mo! I-BUY NOW para gumaan ang pakiramdam."
              items={[
                "Tequila",
                "Lime Juice",
                "Simple Syrup",
              ]}
            />
            <CocktailCard
              slug="done-checkout"
              imageSrc="/cocktails/gimlet.png"
              imageAlt="199 Lang Vodka Gimlet"
              brand="Absolut Vodka"
              title="199 Lang Vodka (Vodka Gimlet)"
              description="199 lang for this clean girl aesthetic! Absolut Vodka and fresh lime. Straight-up deal, no hidden agenda. Walang kalat, walang **refund** sa lasa. Super crisp, super potent! I-DONE CHECKOUT na 'yan!"
              items={[
                "Vodka",
                "Lime Juice",
                "Simple Syrup",
              ]}
            />
            <CocktailCard
              slug="basket-5"
              imageSrc="/cocktails/libre.png"
              imageAlt="Basket #5 Cuba Libre"
              brand="Bacardi Rum"
              title="Basket #5 (Cuba Libre)"
              description="Ang OG best seller namin! Rum, Coke, at kalamansi. Perfect partner sa TikTok dance challenge mo! I-MINE NA para ma-ship via J&T pickup! Mura na, masarap pa. DONE CHECKOUT agad, mga mii!"
              items={[
                "Rum",
                "Lime Juice",
                "Cola"
              ]}
            />
            <CocktailCard
              slug="pickup"
              imageSrc="/cocktails/highball.png"
              imageAlt="J&T Pickup Tequila Highball"
              brand="Olmeca Reposado Tequila"
              title="J&T Pickup (Tequila Highball)"
              description="Para sa matinding init! Tequila, lime, at soda. Light at bubbly. Ubusin mo man ang isang pitsel, sobrang fresh pa rin, hindi ka bibitawan ng amoy."
              items={[
                "Tequila",
                "Lime Juice",
                "Simple Syrup",
                "Soda Water"
              ]}
            />
            <CocktailCard
              slug="tempered-glass"
              imageSrc="/cocktails/tequila.png"
              imageAlt="Tempered Glass Tequila Shot"
              brand="Olmeca Reposado Tequila"
              title="Tempered Glass (Tequila Shot) "
              description="Maam Sir! Pa Tempered Glass na po kayo 50 pesos lang libreng palagay (with salt and lime)!"
              items={[
                "Olmeca Tequila (Neat)",
                "Lime",
                "Salt"
              ]}
            />
            <CocktailCard
              slug="bundle-sale"
              imageSrc="/cocktails/long.png"
              imageAlt="Bundle Sale 3-in-1 Long Island‑style Highball"
              brand="All Spirits Bundle"
              title="Bundle Sale 3-in-1 (Long Island‑style Highball) "
              description="Sulit bundle na 'to mga mii! Tequila, Rum, AND Vodka in one glass! Sinamahan ng lime, syrup, at cola/lime juice. Napakalakas, pang-matagalan! Very strong, sip slowly ha? CHECK OUT NA bago magkaubusan!"
              items={[
                "Tequila",
                "Vodka",
                "Rum",
                "Lime Juice",
                "Simple Syrup",
                "Cola or Lime Juice"
              ]}
            />
            <CocktailCard
              slug="freebies"
              imageSrc="/cocktails/rum.png"
              imageAlt="Freebies Rum & Vodka"
              brand="Rum & Vodka"
              title="Freebies (Rum & Vodka)"
              description="Looking for a versatile deal? Rum plus Vodka, with fresh lime and syrup. Top it with ANY soda you like—cola, lemon-lime, or ginger ale! Ikaw na bahala sa trip mo. Solid na Basket 'to! I-MINE NA!"
              items={[
                "Vodka",
                "Rum",
                "Lime Juice",
                "Simple Syrup",
                "Cola or Lime Juice"
              ]}
            />
            <CocktailCard
              slug="marvin"
              imageSrc="/cocktails/shot.png"
              imageAlt="Marvin ag shot tayon (Shot of Rum or Vodka)"
              brand="Rum or Vodka"
              title="Marvin ag shot tayon (Shot of Rum or Vodka)"
              description="This is the call to action for Marvin, Ailyn's legendary packer. Every time our Belgian friend visits the Philippines, he tells Marvin: Ag shot tayon!"
              items={[
                "Olmeca Tequila",
                "Vodka",
                "Rum"
              ]}
            />
          </div>
        </div>
      </main>
  );
}
