import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 md:py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff45001a_1px,transparent_1px),linear-gradient(to_bottom,#ff45001a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-bold font-heading tracking-tighter uppercase mb-6 block">
                Creative <span className="text-primary">Jam</span>
              </a>
            </Link>
            <p className="text-muted-foreground max-w-md font-light">
              Платформа на базе 9 коллаборативных ИИ-ассистентов для создания data-driven стратегий, медиапланов и креативных концепций.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Продукт</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Цены</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Кейсы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Компания</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 CREATIVE JAM INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors font-mono">PRIVACY POLICY</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors font-mono">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
