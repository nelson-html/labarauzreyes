import { Microscope, TestTube, Activity, Heart, Users, Droplets } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: TestTube,
      title: 'Análisis Clínicos',
      description: 'Química sanguínea, perfil lipídico, glucosa, hemoglobina glucosilada y más.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Microscope,
      title: 'Microbiología',
      description: 'Cultivos, antibiogramas, urocultivos y análisis bacteriológicos completos.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Droplets,
      title: 'Hematología',
      description: 'Biometría hemática completa, tiempos de coagulación y estudios especiales.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Activity,
      title: 'Hormonales',
      description: 'Perfil tiroideo, hormonas reproductivas, marcadores tumorales.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Heart,
      title: 'Inmunología',
      description: 'Pruebas de VIH, hepatitis, pruebas rápidas y análisis inmunológicos.',
      color: 'bg-pink-100 text-pink-600'
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Servicios Especializados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de análisis clínicos con tecnología de vanguardia y personal altamente capacitado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="size-7" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            ¿No encuentras el estudio que necesitas?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Contamos con más de 200 tipos de análisis. Contáctanos y te ayudaremos a encontrar el estudio que necesitas.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contactar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
