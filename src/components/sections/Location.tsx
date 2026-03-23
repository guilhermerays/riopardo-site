import { MapPin, Phone, Instagram, ArrowRight } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 bg-zinc-900 text-zinc-100" id="loc">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <span className="text-red-500 font-semibold tracking-wider text-sm uppercase">
                Onde estamos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Venha conhecer nossa estrutura
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Localizada estrategicamente no centro da cidade, nossa loja
                oferece um showroom completo com toda a linha de festas,
                embalagens e confeitaria.
              </p>
            </div>

            <div className="space-y-6">
              {}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-950/50 border border-zinc-800">
                <div className="bg-red-500/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Loja Física</h3>
                  <p className="text-zinc-400">
                    R. Campos Salles, 724 - Centro
                  </p>
                  <p className="text-zinc-400">
                    São José do Rio Pardo - SP, 13720-000
                  </p>
                </div>
              </div>

              {}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-950/50 border border-zinc-800">
                <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fale Conosco</h3>
                  <div className="space-y-1 text-zinc-400">
                    <p>
                      Loja:{" "}
                      <span className="text-zinc-200">(19) 3682-7171</span>
                    </p>
                    <p>
                      WhatsApp:{" "}
                      <span className="text-zinc-200">(19) 98992-6166</span>
                    </p>
                    <p>
                      Distribuidora:{" "}
                      <span className="text-zinc-200">(19) 3682-8777</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/5519989926166"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Chamar no WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/riopardoembalagens"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Siga no Instagram
              </a>
            </div>
          </div>

          {}
          <div className="relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.6582496357423!2d-46.88846192383794!3d-21.59489659359676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c904fd8e1f5165%3A0xe74466c4302979e!2sR.%20Campos%20Sales%2C%20724%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Pardo%20-%20SP%2C%2013720-000!5e0!3m2!1spt-BR!2sbr!4v1705621234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              title="Mapa da Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
