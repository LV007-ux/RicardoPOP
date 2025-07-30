import React from 'react';
import { useBiography } from '../hooks/useApi';
import { Loader2 } from 'lucide-react';

const Biography = () => {
  const { data: biography, loading, error } = useBiography();

  if (loading) {
    return (
      <section id="biografia" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            <span className="text-lg text-slate-600">Carregando biografia...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || !biography) {
    return (
      <section id="biografia" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-600">Erro ao carregar biografia</p>
        </div>
      </section>
    );
  }

  return (
    <section id="biografia" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                {biography.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mb-8"></div>
            </div>

            {/* Years Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold">
                + de 15 anos
              </div>
              <div className="text-sm text-slate-600 mt-2 text-center">NA ESTRADA</div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              {biography.content}
            </p>

            {/* Music Genres */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Influências Musicais:</h3>
              <div className="flex flex-wrap gap-3">
                {['Pop Rock', 'MPB', 'Forronejo'].map((genre, index) => (
                  <span 
                    key={index}
                    className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-300 transition-colors"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={biography.image} 
                alt="Ricardo POP"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;