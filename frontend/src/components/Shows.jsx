import React from 'react';
import { useShows } from '../hooks/useApi';
import { Calendar, MapPin, Clock, Ticket, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Shows = () => {
  const { data: shows, loading, error } = useShows();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section id="shows" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
            <span className="text-xl">Carregando shows...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || !shows) {
    return (
      <section id="shows" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">PRÓXIMOS SHOWS</h2>
          <p className="text-red-400">Erro ao carregar agenda de shows</p>
        </div>
      </section>
    );
  }

  return (
    <section id="shows" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-red-500 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-blue-500 blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            PRÓXIMOS SHOWS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Confira a agenda de apresentações e venha curtir a mistura única de ritmos
          </p>
        </div>

        {shows.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-300 mb-4">Nenhum show agendado no momento</p>
            <p className="text-gray-400">Fique ligado nas redes sociais para próximos anúncios!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {shows.map((show, index) => (
              <Card key={show.id} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-red-400">
                        <Calendar className="w-5 h-5 mr-3" />
                        <span className="text-sm font-medium uppercase tracking-wide">
                          {formatDate(show.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {show.venue}
                      </h3>
                    </div>

                    <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                      show.status === 'confirmed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {show.status === 'confirmed' ? 'Confirmado' : 'Em breve'}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                      <span>{show.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-purple-400" />
                      <span>{show.time}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 group-hover:scale-105">
                      <Ticket className="w-4 h-4 mr-2" />
                      Mais Informações
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                      Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Quer contratar um show?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para agendar apresentações em eventos, festivais e casas de shows
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;