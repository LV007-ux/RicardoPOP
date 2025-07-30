import React from 'react';
import { useArtistInfo } from '../hooks/useApi';
import { Music, Play, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const { data: artistInfo, loading, error } = useArtistInfo();

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
          <span className="text-xl">Carregando...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">RICARDO POP</h1>
          <p className="text-red-400">Erro ao carregar informações</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-red-500 blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-blue-500 blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-purple-500 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Artist Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-red-200 bg-clip-text text-transparent">
              {artistInfo?.name || 'RICARDO POP'}
            </span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-200">
            {artistInfo?.tagline || 'Que mistura é essa!'}
          </h2>

          {/* Years Badge */}
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Music className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-lg font-medium">+ de {artistInfo?.yearsActive || '15'} anos de carreira</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {artistInfo?.description || 'Carregando descrição...'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Ouça Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Ver Shows
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;