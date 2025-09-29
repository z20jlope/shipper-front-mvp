import React, { useState, useEffect } from 'react';
import { User, LogOut, FolderOpen, CreditCard, Settings as SettingsIcon, Building2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectsView from '../components/ProjectsView';
import ProfileView from '../components/ProfileView';
import LicenseView from '../components/LicenseView';
import SettingsView from '../components/SettingsView';

type DashboardSection = 'projects' | 'profile' | 'license' | 'settings';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DashboardSection>('projects');
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
  };

  const menuItems = [
    { id: 'projects', label: t('dashboard.projects'), icon: FolderOpen, visible: true },
    { id: 'profile', label: t('dashboard.profile'), icon: User, visible: true },
    { id: 'license', label: t('dashboard.license'), icon: CreditCard, visible: true },
    { id: 'settings', label: t('dashboard.settings'), icon: SettingsIcon, visible: user?.role === 'administrator' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return <ProjectsView />;
      case 'profile':
        return <ProfileView />;
      case 'license':
        return <LicenseView />;
      case 'settings':
        return user?.role === 'administrator' ? <SettingsView /> : <ProjectsView />;
      default:
        return <ProjectsView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">NLH</span>
          </div>
        </div>
        
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar || `https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150`}
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.filter(item => item.visible).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as DashboardSection)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-all mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">{t('dashboard.logout')}</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;