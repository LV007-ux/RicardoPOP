import React from 'react';
import { trajectory } from '../data/mock';
import { Calendar, MapPin, Music2 } from 'lucide-react';

const Trajectory = () => {
  const events = [
    "Sob o Céu Sob o Sol",
    "Espraiado de Portas Abertas", 
    "Pedacinho do Céu",
    "Festival Rua & Sabor",
    "Maricá Musical"
  ];

  return (
    <section id="trajetoria" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/h9r7ej00_WhatsApp%20Image%202025-07-30%20at%2008.48.51.jpeg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900/80 to-blue-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {trajectory.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Timeline Content */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                {trajectory.content}
              </p>

              {/* Key Milestones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-red-400 mr-3" />
                    <h3 className="text-xl font-semibold">Início da Carreira</h3>
                  </div>
                  <p className="text-gray-300">
                    Projeto colaborativo <strong>Júlio Cesar & Ricardo</strong> com álbum de composições próprias
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Music2 className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">Carreira Solo</h3>
                  </div>
                  <p className="text-gray-300">
                    <strong>10 anos</strong> de projeto solo "Ricardo Pop – Que Mistura é Essa"
                  </p>
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold">Eventos Culturais</h3>
              </div>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-300 font-medium">{event}</p>
                      <p className="text-sm text-gray-500">Prefeitura de Maricá</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm text-red-200">
                  <strong>Experiências</strong> que fortaleceram o vínculo com o público e a cultura local
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trajectory;