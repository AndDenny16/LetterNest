'use client'

import { useRouter } from "next/navigation";

interface ButtonProps {
  href?: string; // Optional, for navigation
  children: React.ReactNode; // Button text or content
  className?: string; // Optional custom styling
}

export default function NavButton({ href, children, className }: ButtonProps) {

  const router = useRouter();
  const baseStyle = "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition";
  return (
    <button onClick={() => router.push(href ?? "/")} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
}
