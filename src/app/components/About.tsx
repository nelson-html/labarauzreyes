import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Shield, Users, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Users,
      title: 'Personal Calificado',
      description: 'Equipo de profesionales con amplia experiencia y actualización continua.'
    },
    {
      icon: Award,
      title: '+10 Años de Experiencia',
      description: 'Más de una décadas brindando servicios de diagnóstico confiables.'
    }
  ];

  const values = [
    'Precisión en cada resultado',
    'Atención personalizada',
    'Tecnología de última generación',
    'Resultados rápidos y oportunos',
    'Confidencialidad garantizada',
    'Precios competitivos'
  ];

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
            Sobre Nosotros
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Comprometidos con tu Salud
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583911860071-a2638580e8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMGxhYm9yYXRvcnklMjB0ZXN0JTIwdHViZXN8ZW58MXx8fHwxNzcwMzAxNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratorio Clínico"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-gray-600 text-lg">
              <strong className="text-gray-900">Lab. Arauz Reyes</strong> es un laboratorio clínico que desde hace más de 10 años se dedica a brindar servicios de diagnóstico de alta calidad, contribuyendo al cuidado de la salud de cientos de familias.
            </p>
            
            <p className="text-gray-600 text-lg">
              Contamos con equipo de última generación y un equipo de profesionales altamente capacitados que trabajan con precisión y dedicación para ofrecerte resultados confiables en el menor tiempo posible.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Equipment Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
                Tecnología de Vanguardia
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Nuestro laboratorio está equipado con la más avanzada tecnología en equipos de análisis clínico, permitiéndonos ofrecer resultados precisos y confiables.
              </p>
              <p className="text-gray-600 text-lg">
                Realizamos constantes actualizaciones tecnológicas y capacitación de nuestro personal para mantenernos a la vanguardia en diagnóstico clínico.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzAxOTAzODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipamiento médico moderno"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
