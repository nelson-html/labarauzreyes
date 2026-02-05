import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, Award } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-16 md:pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              ✓ Resultados Confiables y Rápidos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Lab. Arauz Reyes
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700">
              Tu salud, nuestra prioridad
            </p>
            
            <p className="text-gray-600 text-lg">
              Laboratorio clínico con más de 10 años de experiencia, equipado con tecnología de última generación para brindarte los mejores resultados diagnósticos.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horario</p>
                  <p className="text-gray-900">Lun - Sáb</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Resultados en menos</p>
                  <p className="text-gray-900">De 24 hrs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="size-5 text-blue-600" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Agendar Cita
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
              >
                Ver Servicios
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631556760585-2e846196d5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzcwMjcxNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratorio Clínico"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
