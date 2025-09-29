import React, { useState } from 'react';
import { Building2, Phone, Mail, MessageSquare, Award, Users, SquareGantt, Shovel, PencilRuler, AppWindow, FolderKanban, BadgeDollarSign, Cog } from 'lucide-react';
import LoginModal from '../components/LoginModal';
import PreviewModal from '../components/previewModal';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../icons/logo.png';

const LandingPage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdvModalOpen, setIsAdvModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isRemodelingModalOpen, setIsRemodelingModalOpen] = useState(false);
  const [isOnlineModalOpen, setIsOnlineModalOpen] = useState(false);
  const [isTenderModalOpen, setIsTenderModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isControlModalOpen, setIsControlModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ subject: '', message: '' });
  const { t } = useLanguage();

  const titleAdv = t('landing.services.subtitle1');
  const imageSrcAdv = 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=600';
  const textDescriptionAdv = t('landing.services.description1');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', contactForm);
    setContactForm({ subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <img src={logo} alt="NLH Logo" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('nav.services')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('nav.contact')}
              </a>
              <LanguageSelector />
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105"
              >
                {t('nav.login')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('landing.hero.subtitle')}
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('landing.hero.subtitle2')}
            </p>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-xl"
            >
              {t('nav.login')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('landing.services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-all" onClick={() => setIsAdvModalOpen(true)}>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SquareGantt className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle1')}</h3>
              <p className="text-gray-600">{t('landing.services.description1')}</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all" onClick={() => setIsNewModalOpen(true)}>
              <div className="bg-gradient-to-r from-green-600 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shovel className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle2')}</h3>
              <p className="text-gray-600">{t('landing.services.description2')}</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-lg transition-all" onClick={() => setIsRemodelingModalOpen(true)}>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <PencilRuler className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle3')}</h3>
              <p className="text-gray-600">{t('landing.services.description3')}</p>
            </div>
          </div>
          <br />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-all" onClick={() => setIsOnlineModalOpen(true)}>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AppWindow className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle4')}</h3>
              <p className="text-gray-600">{t('landing.services.description4')}</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all" onClick={() => setIsTenderModalOpen(true)}>
              <div className="bg-gradient-to-r from-green-600 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FolderKanban className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle5')}</h3>
              <p className="text-gray-600">{t('landing.services.description5')}</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-lg transition-all" onClick={() => setIsBudgetModalOpen(true)}>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BadgeDollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle6')}</h3>
              <p className="text-gray-600">{t('landing.services.description6')}</p>
            </div>
          </div>
          <br />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-all" onClick={() => setIsControlModalOpen(true)}>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('landing.services.subtitle7')}</h3>
              <p className="text-gray-600">{t('landing.services.description7')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('landing.about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in the construction industry, we provide cutting-edge 
                project management solutions that streamline workflows and enhance collaboration.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Construction team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('landing.contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@constructpro.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ConstructPro</span>
            </div>
            <p className="text-gray-400">
              © 2024 ConstructPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <PreviewModal isOpen={isAdvModalOpen} title={t('landing.services.subtitle1')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description1')} onClose={() => setIsAdvModalOpen(false)} />
      <PreviewModal isOpen={isNewModalOpen} title={t('landing.services.subtitle2')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description2')}  onClose={() => setIsNewModalOpen(false)} />
      <PreviewModal isOpen={isRemodelingModalOpen} title={t('landing.services.subtitle3')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description3')}  onClose={() => setIsRemodelingModalOpen(false)} />
      <PreviewModal isOpen={isOnlineModalOpen} title={t('landing.services.subtitle4')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description4')}  onClose={() => setIsOnlineModalOpen(false)} />
      <PreviewModal isOpen={isTenderModalOpen} title={t('landing.services.subtitle5')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description5')}  onClose={() => setIsTenderModalOpen(false)} />
      <PreviewModal isOpen={isBudgetModalOpen} title={t('landing.services.subtitle6')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description6')}  onClose={() => setIsBudgetModalOpen(false)} />
      <PreviewModal isOpen={isControlModalOpen} title={t('landing.services.subtitle7')} imageSrc={imageSrcAdv} textDescription={t('landing.services.description7')} onClose={() => setIsControlModalOpen(false)} />  
    </div>
  );
};

export default LandingPage;