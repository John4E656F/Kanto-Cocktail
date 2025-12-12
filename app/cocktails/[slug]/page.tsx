import Image from 'next/image';
import Link from 'next/link';
import { CocktailCard } from '@/components/Card';
import { notFound } from 'next/navigation';

const cocktails = {
  'ailyns-mojito': {
    imageSrc: '/cocktails/mojito.png',
    imageAlt: "Ailyn's Mojito",
    brand: 'Bacardi Rum',
    title: "Ailyn's Mojito",
    description: "Ang Ailyn's Mojito ay isang napakasiglang, pampalamig na inumin. Sariwang mint, kalamansi, asukal, at sinamahan ng soda. Ang perpektong tropical cooler para sa lahat.",
    items: [
      "60 ml Bacardi rum",
      "10-12 fresh mint leaves", 
      "22 ml fresh lime/kalamansi juice",
      "22 ml simple syrup",
      "60-90 ml soda water",
      "Ice",
      "Mint sprig, lime wheel (garnish)"
    ],
    instructions: [
      "In a highball glass, add mint leaves and simple syrup.",
      "Gently muddle to release aroma (do not shred).",
      "Fill the glass with ice.",
      "Add rum and lime juice.",
      "Stir for about 10 seconds.",
      "Top with soda water and stir gently.",
      "Garnish with mint sprig and lime wheel."
    ]
  },
  'mine-na': {
    imageSrc: '/cocktails/daiquiri.png',
    imageAlt: "Mine Na Daiquiri",
    brand: 'Bacardi Rum',
    title: "Mine Na (Classic Daiquiri)",
    description: "Ang Mine Na Daiquiri, simple lang, pero malakas ang dating. Rum, kalamansi, at asukal—walang arte, malakas ang tama. Perfect pang-aura at pang-sweet.",
    items: [
      "60 ml Bacardi rum",
      "30 ml fresh lime/kalamansi juice", 
      "22 ml simple syrup",
      "Ice"
    ],
    instructions: [
      "Add rum, lime juice, and simple syrup to a shaker with ice.",
      "Shake hard for 10-15 seconds.",
      "Strain into a chilled coupe glass or rocks glass with fresh ice.",
      "Serve immediately."
    ]
  },
  'no-refund': {
    imageSrc: '/cocktails/sour.png',
    imageAlt: "No Refund Tequila Sour",
    brand: 'Olmeca Reposado Tequila',
    title: "No Refund (Tequila Sour)",
    description: "Ito na, for the broken-hearted! Reposado tequila na may lime at syrup—may pait, may tamis, at may foam pa sa taas! Pang-drama, pang-senti. NO REFUND sa feelings mo!",
    items: [
      "60 ml Olmeca Reposado tequila",
      "30 ml fresh lime/kalamansi juice",
      "22 ml simple syrup",
      "Optional: 15 ml egg white for foam",
      "Ice"
    ],
    instructions: [
      "With foam: Add all ingredients to shaker without ice. Dry shake 10 seconds.",
      "Add ice and shake 10-15 seconds more.",
      "Strain into rocks glass with ice or coupe without ice.",
      "No foam: Shake all with ice 10-15 seconds, strain."
    ]
  },
  'done-checkout': {
    imageSrc: '/cocktails/gimlet.png',
    imageAlt: "199 Lang Vodka Gimlet",
    brand: 'Absolut Vodka',
    title: "199 Lang Vodka (Vodka Gimlet)",
    description: "199 lang for this clean girl aesthetic! Absolut Vodka and fresh lime. Straight-up deal, no hidden agenda. Walang kalat, walang refund sa lasa.",
    items: [
      "60 ml Absolut vodka",
      "30 ml fresh lime/kalamansi juice",
      "22 ml simple syrup",
      "Ice"
    ],
    instructions: [
      "Add vodka, lime juice, and simple syrup to a shaker with ice.",
      "Shake for 10-15 seconds.",
      "Strain into a chilled coupe glass or rocks glass with ice."
    ]
  },
  'basket-5': {
    imageSrc: '/cocktails/libre.png',
    imageAlt: "Basket #5 Cuba Libre",
    brand: 'Bacardi Rum',
    title: "Basket #5 (Cuba Libre)",
    description: "Ang OG best seller namin! Rum, Coke, at kalamansi. Perfect partner sa TikTok dance challenge mo!",
    items: [
      "60 ml Bacardi rum",
      "15 ml fresh lime/kalamansi juice",
      "120 ml cola",
      "Ice",
      "Lime wedge"
    ],
    instructions: [
      "Fill a highball glass with ice.",
      "Add rum.",
      "Add cola to almost fill the glass.",
      "Add lime juice and give a quick stir.",
      "Garnish with lime wedge."
    ]
  },
  'pickup': {
    imageSrc: '/cocktails/highball.png',
    imageAlt: "J&T Pickup Tequila Highball",
    brand: 'Olmeca Reposado Tequila',
    title: "J&T Pickup (Tequila Highball)",
    description: "Para sa matinding init! Tequila, lime, at soda. Light at bubbly.",
    items: [
      "60 ml Olmeca Reposado tequila",
      "22 ml fresh lime/kalamansi juice",
      "15-22 ml simple syrup (to taste)",
      "90-120 ml soda water",
      "Ice",
      "Lime wheel"
    ],
    instructions: [
      "Fill a highball glass with ice.",
      "Add tequila, lime juice, and simple syrup.",
      "Stir to mix.",
      "Top with soda water and stir gently.",
      "Garnish with lime wheel."
    ]
  },
  'tempered-glass': {
    imageSrc: '/cocktails/tequila.png',
    imageAlt: "Tempered Glass Tequila Shot",
    brand: 'Olmeca Reposado Tequila',
    title: "Tempered Glass (Tequila Shot)",
    description: "Maam Sir! Pa Tempered Glass na po kayo 50 pesos lang libreng palagay (with salt and lime)!",
    items: [
      "45 ml Olmeca Reposado tequila",
      "Lime wedge",
      "Pinch of salt"
    ],
    instructions: [
      "Pour tequila into a shot glass.",
      "Put a small line of salt on the back of your hand.",
      "Lick the salt, drink the shot, then bite the lime wedge."
    ]
  },
  'bundle-sale': {
    imageSrc: '/cocktails/long.png',
    imageAlt: "Bundle Sale 3-in-1 Long Island‑style Highball",
    brand: 'All Spirits Bundle',
    title: "Bundle Sale 3-in-1 (Long Island‑style Highball)",
    description: "Sulit bundle na 'to mga mii! Tequila, Rum, AND Vodka in one glass! Very strong, sip slowly ha?",
    items: [
      "15 ml Olmeca Reposado tequila",
      "15 ml Bacardi rum",
      "15 ml Absolut vodka",
      "22 ml fresh lime/kalamansi juice",
      "22 ml simple syrup",
      "60-90 ml cola or lemon-lime soda/soda water",
      "Ice",
      "Lime wedge"
    ],
    instructions: [
      "Add all spirits, lime juice, and simple syrup to a shaker with ice.",
      "Shake for 10-15 seconds.",
      "Strain into a highball glass filled with fresh ice.",
      "Top with cola or other mixer and stir gently.",
      "Garnish with lime wedge."
    ]
  },
  'freebies': {
    imageSrc: '/cocktails/rum.png',
    imageAlt: "Freebies Rum & Vodka",
    brand: 'Rum & Vodka',
    title: "Freebies (Rum & Vodka)",
    description: "Looking for a versatile deal? Rum plus Vodka, with fresh lime and syrup. Top it with ANY soda you like!",
    items: [
      "30 ml Bacardi rum",
      "30 ml Absolut vodka",
      "22 ml fresh lime/kalamansi juice",
      "15 ml simple syrup",
      "90-120 ml mixer (cola, lemon-lime soda, ginger ale, or soda water)",
      "Ice",
      "Lime wheel"
    ],
    instructions: [
      "Fill a highball glass with ice.",
      "Add rum, vodka, lime juice, and simple syrup.",
      "Stir to combine.",
      "Top with chosen mixer and stir gently.",
      "Garnish with lime wheel."
    ]
  },
  'marvin': {
    imageSrc: '/cocktails/shot.png',
    imageAlt: "Marvin ag shot tayon",
    brand: 'Rum or Vodka',
    title: "Marvin ag shot tayon (Shot of Rum or Vodka)",
    description: "This is the call to action for Marvin, Ailyn's legendary packer. Ag shot tayon!",
    items: [
      "45 ml Bacardi rum OR",
      "45 ml Absolut vodka OR", 
      "45 ml Olmeca Reposado tequila",
      "Optional chaser: lime juice, cola, or water"
    ],
    instructions: [
      "Pour 45 ml of chosen spirit into a shot glass (chill if possible).",
      "Prepare chaser in a separate small glass if using.",
      "Count in and drink the shot together.",
      "Follow with chaser."
    ]
  }
};

interface CocktailPageProps {
  params: Promise<{ slug: string }>; 
}

export default async function CocktailPage({ params }: CocktailPageProps) {
 const { slug } = await params;
  
  console.log(slug);
  
  const cocktail = cocktails[slug as keyof typeof cocktails];


  if (!cocktail) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
        <div className="flex flex-col justify-center gap-12">
           <Link
           className="inline-block p-0" 
              href="/"
              style={{ display: 'contents' }} 
           >
              <Image
                className="mx-auto rounded-full p-0 "
                src="/logo.png"
                alt="Kanto Cocktail logo"
                width={300}
                height={100}
                priority
              />
            </Link>
          <div className="flex justify-center gap-6 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#57756E] px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#6A8A7F] transition-all duration-300 transform hover:scale-105"
            >
              ← Back to All Recipes
            </Link>
            <a
              href="/Kanto Cocktail Recipes.pdf"
              download="Kanto Cocktail Recipes.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              📄 Download Full PDF
            </a>
          </div>
        </div>
      <div className="max-w-2xl mx-auto">
        {/* Full-size recipe card */}
        <section className="bg-gradient-to-br from-[#8CC2B5] to-[#6A9A8C] rounded-2xl shadow-2xl p-8 text-left">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <span className="text-sm font-semibold text-white/80">{cocktail.brand}</span>
              <h1 className="text-4xl font-bold mt-1">{cocktail.title}</h1>
            </div>
          </div>
          
          <Image
            src={cocktail.imageSrc}
            alt={cocktail.imageAlt}
            width={500}
            height={400}
            className="w-full h-64 object-contain rounded-xl mb-6 shadow-2xl"
          />
          
          <p className="text-lg leading-relaxed mb-8">{cocktail.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white/90">Ingredients</h3>
              <ul className="space-y-2 text-gray-100">
                {cocktail.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white/90">Instructions</h3>
              <ol className="space-y-2 text-gray-100">
                {cocktail.instructions.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        
         <div className="flex justify-center gap-6 my-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#57756E] px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#6A8A7F] transition-all duration-300 transform hover:scale-105"
            >
              ← Back to All Recipes
            </Link>
            <a
              href="/Kanto Cocktail Recipes.pdf"
              download="Kanto Cocktail Recipes.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              📄 Download Full PDF
            </a>
          </div>
      </div>
    </main>
  );
}
