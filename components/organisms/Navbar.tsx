import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <nav className="w-full h-14 bg-white flex items-center px-4 shadow-sm">
        <Link passHref href="/">
          <a>
            <div className="relative w-32 h-12">
              <Image
                src="https://skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg"
                alt="Logo"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </nav>
    </header>
  );
};
