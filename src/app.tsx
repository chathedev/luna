import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Dog, 
  Shirt, 
  Package, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'städhjälp',
      icon: Sparkles,
      title: 'Städhjälp hemma',
      description: 'Torka, dammsuga, plocka undan – vi hjälper dig med enkel städning.',
      price: '150–300 kr per gång',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Grundstädning', 'Dammsugning', 'Torkdukning', 'Upplockning']
    },
    {
      id: 'hundpromenad',
      icon: Dog,
      title: 'Hundpromenader',
      description: 'Jobbar heltid? Vi går gärna ut med din fyrbenta vän.',
      price: '100 kr/promenad (30 min)',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['30 min promenad', 'Pålitlig service', 'Flexibla tider', 'Älskar hundar']
    },
    {
      id: 'tvätt',
      icon: Shirt,
      title: 'Tvätt & vikning',
      description: 'Vi hämtar din tvätt, tvättar hemma och lämnar tillbaka vikt och ren.',
      price: '100–200 kr/kasse',
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Hämtar & lämnar', 'Professionell tvätt', 'Vikt & strukturerat', 'Snabb service']
    },
    {
      id: 'flytt',
      icon: Package,
      title: 'Flytt & bärhjälp',
      description: 'Behöver hjälp med möbler, flytt eller tunga lyft? Vi finns här för dig.',
      price: '200–300 kr per gång',
      image: 'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Möbelmontering', 'Flytthjälp', 'Bärhjälp', 'Helger tillgängliga']
    },
    {
      id: 'teknik',
      icon: Smartphone,
      title: 'Teknikhjälp för äldre',
      description: 'Techhjälp – 15 år, tålmodig & pålitlig. Hjälp med mobil, appar och BankID.',
      price: '150 kr/timme',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Mobil & appar', 'BankID hjälp', 'Tålmodig undervisning', 'Hembesök']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kontakt@wby.se?subject=Förfrågan om ${formData.service}&body=Namn: ${formData.name}%0D%0AE-post: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0ATjänst: ${formData.service}%0D%0A%0D%0AMeddelande:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">WBY</h1>
                <p className="text-sm text-gray-500">Vardagshjälp i Härnösand</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Tjänster</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</a>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Mail className="w-4 h-4" />
                <span>kontakt@wby.se</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-24 lg:py-32 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Vardagshjälp som
                <span className="block text-gray-600">förenklar ditt liv</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Pålitliga tjänster för hem och familj i Härnösand. Från städning till teknikhjälp – vi finns här för att hjälpa dig med vardagens utmaningar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Se våra tjänster</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:border-gray-300 transition-all duration-300"
                >
                  Kontakta oss
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professionell städning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Pålitlig service</p>
                    <p className="text-sm text-gray-500">Sedan 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Våra tjänster</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professionella tjänster anpassade efter dina behov i Härnösand
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="text-2xl font-bold text-gray-900 mb-6">{service.price}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-gray-600">
                          <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => {
                        setFormData({...formData, service: service.title});
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <span>Boka {service.title.toLowerCase()}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Kontakta oss</h3>
            <p className="text-xl text-gray-600">Berätta vad du behöver hjälp med så hör vi av oss</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src="https://images.pexels.com/photos/7464005/pexels-photo-7464005.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Kontakta WBY Tjänster" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-post</p>
                    <p className="text-gray-600">kontakt@wby.se</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Område</p>
                    <p className="text-gray-600">Vi hjälper dig i Härnösand</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="Ditt namn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                      Tjänst *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Välj tjänst</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Berätta mer om vad du behöver hjälp med..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Skicka förfrågan</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">W</span>
              </div>
              <h4 className="text-2xl font-bold">WBY Tjänster</h4>
            </div>
            <p className="text-gray-400 mb-8 text-lg">Pålitlig vardagshjälp i Härnösand</p>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>kontakt@wby.se</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Härnösand</span>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">© 2025 WBY Tjänster. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
