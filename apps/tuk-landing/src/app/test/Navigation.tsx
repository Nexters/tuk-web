import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 border-border fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-primary text-2xl font-bold">리킨들</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#features" className="text-foreground hover:text-accent transition-smooth">
              기능 소개
            </a>
            <a href="#download" className="text-foreground hover:text-accent transition-smooth">
              다운로드
            </a>
            <Button variant="outline" size="sm" className="rounded-lg">
              문의하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                기능 소개
              </a>
              <a
                href="#download"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                다운로드
              </a>
              <Button variant="outline" size="sm" className="w-fit rounded-lg">
                문의하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
