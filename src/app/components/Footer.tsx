import { Beaker, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Análisis Clínicos', href: '#servicios' },
      { name: 'Microbiología', href: '#servicios' },
      { name: 'Hematología', href: '#servicios' },
      { name: 'Hormonales', href: '#servicios' },
      { name: 'Inmunología', href: '#servicios' },
      { name: 'Check-up Integral', href: '#servicios' }
    ],
    enlaces: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Contacto', href: '#contacto' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Beaker className="size-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-white">Lab. Arauz Reyes</span>
                <span className="text-xs text-gray-400">Laboratorio Clínico</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Más de 10 años brindando servicios de diagnóstico clínico con calidad y profesionalismo.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.enlaces.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Alcaldia Municipal 1/2 cuadra al sur.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+521234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +505 8854 4579
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:contacto@labarauzreyes.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contacto@labarauzreyes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Lab. Arauz Reyes. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}