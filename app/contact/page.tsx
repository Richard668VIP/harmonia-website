import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title:"Contact & Free Trial | Harmonia", path:"/contact" });
export default function ContactPage() {
  return (<><Nav activePage="/contact"/><section className="min-h-screen py-24 px-7 bg-parchment"><div className="max-w-xl mx-auto pt-20"><h1 className="font-display text-5xl text-ink mb-4">Get in Touch</h1><p className="text-muted mb-8">All messages receive a reply within 2 business days.</p><a href="mailto:hello@harmoniawisdom.com" className="btn-gold inline-flex">hello@harmoniawisdom.com →</a></div></section><Footer/></>);
}
