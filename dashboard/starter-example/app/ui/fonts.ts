// app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google'

// primary system font
export const inter = Inter({ subsets: ['latin'] })

// secondary display font
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})