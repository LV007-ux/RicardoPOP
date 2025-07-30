import React from 'react';
import { discography } from '../data/mock';
import { Play, Calendar, Music, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Discography = () => {
  return (
    <section id="discografia" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            DISCOGRAFIA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça os trabalhos musicais que marcam a trajetória artística de Ricardo POP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {discography.map((album, index) => (
            <Card key={album.id} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Album Cover */}
                  <div className="relative md:w-1/2 aspect-square bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center overflow-hidden">
                    {index === 0 ? (
                      <img 
                        src="https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/qkemigoh_ChatGPT%20Image%208%20de%20jul.%20de%202025%2C%2011_00_18.png"
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center">
                        <Music className="w-16 h-16 text-white/60 mb-4" />
                        <p className="text-white/80 font-medium">{album.title}</p>
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                        <Play className="w-6 h-6 mr-2" />
                        Reproduzir
                      </Button>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-slate-500 mr-2" />
                        <span className="text-slate-500 font-medium">{album.year}</span>
                        <span className="mx-2 text-slate-300">•</span>
                        <span className="text-slate-500">{album.type}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {album.title}
                      </h3>

                      {/* Track List */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                          Faixas:
                        </h4>
                        <ul className="space-y-2">
                          {album.tracks.map((track, trackIndex) => (
                            <li key={trackIndex} className="flex items-center text-slate-600">
                              <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                                {trackIndex + 1}
                              </span>
                              {track}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-8">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Ouvir
                      </Button>
                      <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Disponível nas Plataformas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Spotify', 'Apple Music', 'YouTube Music', 'Deezer', 'Amazon Music'].map((platform) => (
              <Button 
                key={platform}
                variant="outline" 
                className="border-slate-300 text-slate-600 hover:bg-slate-100"
              >
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;