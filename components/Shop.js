import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export const Shop = ({ shop }) => {
  return (
    <div className="card">
      <Link href={`/shop/${shop.slug}`}>
        <a>
          {/* <Image src={shop.image} alt={shop.name} className="rounded shadow" /> */}
          <img src={shop.image} alt={shop.name} className="rounded shadow" />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/shop/${shop.slug}`}>
          <a>
            <h2 className="text-lg">{shop.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{shop.description}</p>
        <button className="primary-button" type="button">
          Access to Shop
        </button>
      </div>
    </div>
  );
};
