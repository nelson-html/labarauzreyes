import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Alcaldia municipal 1/2 Cuadra al sur',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+505 8854 4579',
      link: 'tel:+505 8854 4579'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@labarauzreyes.com',
      link: 'mailto:contacto@labarauzreyes.com'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun - Sáb: 7:00 AM - 4:00 PM',
      link: '#'
    }
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
            Contáctanos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Agenda tu Cita
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos para servirte. Contáctanos y con gusto te atenderemos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <Icon className="size-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                        <p className="text-gray-900">{info.content}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl overflow-hidden h-[300px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Ubicación del Laboratorio</p>
                  <p className="text-sm text-gray-500 mt-2">Alcaldia Municipal 1/2 Cuadra al sur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="+505 8854 4579"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="size-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
