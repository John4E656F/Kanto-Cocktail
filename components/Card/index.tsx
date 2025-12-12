'use client';

import React from 'react';
import Link from 'next/link';

interface CardProps {
  brand: string;
  title: string;
  description: string;
  items: string[];
  imageSrc: string;      
  imageAlt: string; 
  bgColor?: string;
  titleColor?: string;
  className?: string;
  slug: string; 
}

export const CocktailCard: React.FC<CardProps> = ({
  brand,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  bgColor = 'bg-[#8CC2B5]',
  titleColor = 'text-[#813C2E]',
  className = '',
  slug,
}) => {
  return (
    <Link href={`/cocktails/${slug}`} className="block">
    <section 
      className={`
        ${bgColor} 
        rounded-lg 
        shadow-2xl 
        hover:shadow-accent/50 
        transition 
        duration-300 
        transform 
        hover:scale-[1.02] 
        p-6
        cursor-pointer
        ${className}
      `}
    >
           <div className="mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-contain rounded-md"
        />
      </div>
    <span 
        className={`
            rounded-full text-black max-w-min inline-block px-3 py-1 text-nowrap text-xs font-semibold mb-3
            ${brand === 'Bacardi Rum' ? 'bg-white' : 
                brand === 'Olmeca Reposado Tequila' ? 'bg-orange-400' : 
                brand === 'Absolut Vodka' ? 'bg-blue-400' : 
                'bg-white'
            }
        `}
    >
    {brand}
    </span>
      <h3 className={`text-3xl font-bold mb-3 ${titleColor}`}>
        {title}
      </h3>
      <p className="text-black mb-4">{description}</p>
      <ul className="text-sm text-gray-700 space-y-1">
        <strong className="font-medium">Key Ingredients:</strong> 
            {items.map((item, index) => (
            <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>{item}</span>
            </li>
            ))}
      </ul>
    </section>
    </Link>
  );
};
