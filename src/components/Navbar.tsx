import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold font-heading tracking-tighter uppercase">
            Creative <span className="text-primary">Jam</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Возможности
          </a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Процесс
          </a>
          <a href="#comparison" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Сравнение
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Цены
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex font-mono text-xs uppercase tracking-widest">
            Войти
          </Button>
          <Button className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none border border-primary/50 shadow-[0_0_15px_rgba(255,69,0,0.5)]">
            Начать бесплатно
          </Button>
        </div>
      </div>
    </nav>
  );
}
