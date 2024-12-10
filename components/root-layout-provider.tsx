"use client";

import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
  inter: string;
  poppins: string;
}

export function RootLayoutProvider({ children, inter, poppins }: RootLayoutProviderProps) {
  return (
    <body className={`${inter} ${poppins} font-sans`} suppressHydrationWarning>
      {children}
    </body>
  );
}