import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
export default function NotFound() {
  return (<><Nav/><section className="min-h-screen flex items-center justify-center bg-cream"><div className="text-center"><div className="font-display text-8xl text-gold mb-4">404</div><h1 className="font-display text-3xl text-ink mb-4">Page Not Found</h1><p className="text-muted mb-8">The page you're looking for doesn't exist.</p><a href="/" className="btn-dark inline-flex">← Back to Home</a></div></section><Footer/></>);
}
