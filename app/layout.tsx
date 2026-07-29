import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata():Promise<Metadata>{
  const h=await headers();
  const host=h.get("x-forwarded-host")??h.get("host")??"localhost:3000";
  const protocol=h.get("x-forwarded-proto")??(host.includes("localhost")?"http":"https");
  const origin=`${protocol}://${host}`;
  return {
    title:"Lumina Dental Studio | Sample Dental Clinic Website",
    description:"A modern, fictional dental clinic website concept featuring family dentistry, appointment requests and a clinic information assistant.",
    icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
    openGraph:{title:"Lumina Dental Studio",description:"Feel good about your smile. A fictional dental clinic website concept.",images:[{url:`${origin}/og-lumina.png`,width:1200,height:630,alt:"Lumina Dental Studio sample website"}]},
    twitter:{card:"summary_large_image",title:"Lumina Dental Studio",description:"A fictional modern dental clinic website concept.",images:[`${origin}/og-lumina.png`]}
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
