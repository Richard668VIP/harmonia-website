import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title:"Crystal Shop | Sacred Tools | Harmonia", path:"/shop" });
export default function ShopPage() {
  return (<><Nav activePage="/shop"/><section className="min-h-screen py-24 px-7 bg-cream"><div className="max-w-4xl mx-auto text-center pt-20"><h1 className="font-display text-5xl text-ink mb-4">Sacred Earth Crystal Shop</h1><p className="text-muted text-lg">Shop content — connect product data source.</p><a href="/courses/free-starter-pack" className="btn-gold mt-8 inline-flex">Begin Free →</a></div></section><Footer/></>);
}
