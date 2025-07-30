import React from 'react';
import { socialLinks } from '../data/mock';
import { Music, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    spotify: Music
  };

  const quickLinks = [
    { name: 'Biografia', href: '#biografia' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Discografia', href: '#discografia' },
    { name: 'Shows', href: '#shows' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-3 rounded-full">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ricardo POP</h3>
                <p className="text-gray-400">Que mistura é essa!</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Mais de 15 anos criando uma identidade musical única, 
              misturando pop rock, MPB e forronejo com autenticidade e paixão.
            </p>

            <div className="flex space-x-4">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-300 text-sm">contato@ricardopop.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+55 (21) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">Maricá, RJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ricardo POP. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;