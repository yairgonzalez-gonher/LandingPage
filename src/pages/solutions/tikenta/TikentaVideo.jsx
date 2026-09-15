import { useState } from 'react';
import { TIKENTA_VIDEO } from './tikentaData';

function isYouTube(url) {
  return /youtube\.com|youtu\.be/.test(url);
}

function isVimeo(url) {
  return /vimeo\.com/.test(url);
}

function toEmbedUrl(src, type) {
  if (type === 'youtube' || isYouTube(src)) {
    const id = src.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/)?.[1];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : src;
  }
  if (type === 'vimeo' || isVimeo(src)) {
    const id = src.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
    return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : src;
  }
  return src;
}

export default function TikentaVideo() {
  const { src, poster, type, title } = TIKENTA_VIDEO;
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(src);
  const embed = hasVideo && (type === 'youtube' || type === 'vimeo' || isYouTube(src) || isVimeo(src));

  return (
    <section id="video" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand mb-3">Conoce Tikenta</p>
          <h2 className="text-3xl md:text-5xl text-tk-text">
            El flujo, en <span className="tikenta-serif text-tk-brand">movimiento</span>.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Captura, validación y facturación de tickets dentro de la plataforma.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-tk-dark to-[#31206f] shadow-[0_30px_80px_rgba(26,17,71,0.28)] border border-white/10">
          <div className="tikenta-dash-grid absolute inset-0 opacity-40 pointer-events-none" />

          {playing && hasVideo && embed && (
            <iframe
              title={title}
              src={toEmbedUrl(src, type)}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}

          {playing && hasVideo && !embed && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={poster || undefined}
              controls
              autoPlay
            />
          )}

          {!playing && (
            <>
              {poster ? (
                <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="tikenta-num text-tk-brand/80 text-sm mb-2">01 / DEMO</p>
                    <p className="text-white/80 text-xl md:text-2xl max-w-md mx-auto">
                      {hasVideo ? title : 'Video de producto en preparación'}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => hasVideo && setPlaying(true)}
                disabled={!hasVideo}
                aria-label={hasVideo ? 'Reproducir video' : 'Video aún no disponible'}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="h-20 w-20 rounded-full bg-white/12 border border-white/35 backdrop-blur-sm grid place-items-center text-white transition-transform duration-200 group-hover:scale-105 group-disabled:opacity-80">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1" fill="currentColor" aria-hidden="true">
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                </span>
              </button>
            </>
          )}
        </div>

        {!hasVideo && (
          <p className="text-center text-sm text-gray-500 mt-4">
            El reproductor ya está listo. En cuanto tengamos el archivo, se conecta aquí.
          </p>
        )}
      </div>
    </section>
  );
}
