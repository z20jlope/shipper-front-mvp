import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    
    // Landing Page
    'landing.hero.title': 'WMI - We Make it Happen',
    'landing.hero.subtitle': 'Project Advisory and Management - New Construction - Remodeling - Tenant Improvements',
    'landing.hero.subtitle2': 'Online Platform - Tenders - Budget - Project Control',
    'landing.services.title': 'Our Services',
    'landing.about.title': 'About Us',
    'landing.contact.title': 'Contact Us',

    // Landing Page Services Section
    'landing.services.subtitle1': 'Project Advisory and Management',
    'landing.services.description1': 'Provides expert guidance and oversight throughout the entire project lifecycle, from initial concept to completion.',
    'landing.services.subtitle2': 'New Construction',
    'landing.services.description2': 'This includes everything from initial planing and site preparation to the final touches and projects handover.',
    'landing.services.subtitle3': 'Remodeling',
    'landing.services.description3': 'Transform existing spaces to meet new needs, improve functionality, or update aesthetics.',
    'landing.services.subtitle4': 'Online Platform',
    'landing.services.description4': 'A centralized, cloud-based solution that digitizes and streamlines a company\'s entire project workflow.',
    'landing.services.subtitle5': 'Tender Management',
    'landing.services.description5': 'Comprehensive management of the tendering process, from preparing and issuing tender documents to evaluating bids and awarding contracts.',
    'landing.services.subtitle6': 'Budget',
    'landing.services.description6': 'Provide a detailed financial roadmap for your project, from initial planning to final completion.',
    'landing.services.subtitle7': 'Project Control',
    'landing.services.description7': 'A systematic approach to managing and monitoring a project\'s performance to ensure it stays on budget and schedule.',

    
    // Login
    'login.title': 'Login to Your Account',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Sign In',
    'login.error': 'Invalid username or password',
    'login.test': 'Demo Credentials',
    
    // Dashboard
    'dashboard.profile': 'Profile',
    'dashboard.projects': 'Projects',
    'dashboard.license': 'License',
    'dashboard.settings': 'Settings',
    'dashboard.logout': 'Logout',

    // Dashboard Projects
    'dashboard.projects.subtitle': 'Manage your construction projects',
    'dashboard.projects.notfound': ' No projects found',
    'dashboard.projects.location': 'Location',
    'dashboard.projects.type': 'Type',
    'dashboard.projects.start': 'Start',
    'dashboard.projects.surface': 'Surface',
    'dashboard.projects.delete.title': 'Confirm Delete',
    'dashboard.projects.delete.confirmation': 'Are you sure you want to delete this project? This action cannot be undone',

    // Tab
    'tab.general': 'General',
    'tab.deadline': 'Deadline',
    'tab.files': 'Files',
    'tab.qa': 'Q&A',
    'tab.download': 'Download',

    // Profile
    'project.profile.title': 'Manage your account settings',
    'project.password.change': 'Change Password',
    'project.password.current': 'Current Password',
    'project.password.new': 'New Password',
    'project.password.confirm': 'Confirm New Password',

    // Profile validation
    'project.password.match': 'New passwords do not match',
    'project.password.long': 'Password must be at least 6 characters long',
    'project.password.success': 'Password updated successfully',

    // Profile Button
    'project.password.updating': 'Updating...',
    'project.password.update': 'Update Password',
    
    // Projects
    'projects.title.new': 'New Project',
    'projects.title.edit': 'Edit Project',
    'projects.new': 'New Project',
    'projects.edit': 'Edit',
    'projects.delete': 'Delete',
    'projects.view': 'View Details',

    // Project General Section
    'project.general.notfound': 'Project not found',
    'project.general.title': 'General Information',
    'project.general.name': 'Title',
    'project.general.location': 'Location',
    'project.general.description': 'Description',
    
    // Project Detail Section
    'project.detail.title': 'Project Details',
    'project.detail.view': 'Project Information',
    'project.detail.type': 'Type',
    'project.detail.quantity': 'Quantity',
    'project.detail.surface': 'Surface',
    'project.detail.floor': 'Floor',
    'project.detail.materiality': 'Materiality',
    'project.detail.enclosure': 'Enclosure',

    // Project Select Type
    'project.select.commercial': 'Commercial',
    'project.select.residential': 'Residential',
    'project.select.industrial': 'Industrial',
    'project.select.infrastructure': 'Infrastructure',

    // Project Officer Section
    'project.officer.title': 'Responsible Parties',
    'project.officer.principal1': 'Principal 1',
    'project.officer.principal2': 'Principal 2',
    'project.officer.professional': 'Professionals',
    'project.officer.professional.add': 'Add Professional',
    'project.officer.specialist': 'Specialists',
    'project.officer.specialist.add': 'Add Specialist',
    'project.officer.contact': 'Contact',

    // Project Addionally Section
    'project.addition.title': 'Additional Information',
    'project.addition.title.placeholder': 'Alguna información adicional del projecto...',
    'project.addition.user': 'User',
    'project.addition.binding': 'Binding',

    // Deadline 
    'project.deadline.date': 'Project Dates',
    'project.deadline.publication': 'Publication Date',
    'project.deadline.start': 'Start Date',
    'project.deadline.end': 'Finish Date',
    
    'project.deadline.limits': 'Project Limits',
    'project.deadline.offers': 'Offers Limit',
    'project.deadline.ask': 'Asks Limit',
    'project.deadline.response': 'Response Limit',

    // Archivos
    'project.files.title': 'Project Files',
    'project.files.upload': 'Upload Files',
    'project.files.support': 'Supported File Types',
    'project.files.documents': 'Documents: PDF, DOC, DOCX',
    'project.files.cad': 'CAD Files: DWG',
    'project.files.images': 'Images: JPG, JPEG, PNG',
    'project.files.size': 'Maximum file size: 10MB per file',
    'project.files.without': 'No files uploaded yet',
    'project.files.attach': 'Upload files to attach them to this project',

    'project.files.table.file': 'File',
    'project.files.table.date': 'Upload Date',
    'project.files.table.by': 'Uploaded By',
    'project.files.table.size': 'Size',
    'project.files.table.action': 'Action',

    'project.files.message': 'ready to be associated with this project',

    // Project Button
    'project.button.save': 'Save Project',
    'project.button.update': 'Update Project',

    // Binding
    'project.binding.title': 'Manage your professional licenses',
    'project.binding.without': 'No licenses found',
    'project.binding.authority': 'Issuing Authority',
    'project.binding.date': 'Issue Date',
    'project.binding.expiry': 'Expiry Date',
    'project.binding.confirm': 'Are you sure you want to delete this license? This action cannot be undone.',

    'project.binding.add': 'New License',
    'project.binding.edit': 'Edit License',
    'project.binding.name': 'License Name',
    
    // Binding Select Type
    'project.binding.type': 'Type',
    'project.binding.construction': 'Construction',
    'project.binding.electrical': 'Electrical',
    'project.binding.plumbing': 'Plumbing',
    'project.binding.hvac': 'HVAC',
    'project.binding.engineering': 'Engineering',
    'project.binding.architecture': 'Architecture',  

    'project.binding.issuing': 'Issuing Authority',
    'project.binding.date.issue': 'Issue Date',
    'project.binding.date.expiry': 'Expiry Date',

    // Binding Button
    'project.binding.new': 'New License',
    'project.binding.save': 'Save License',

    // Q&A
    'project.qa.title': 'Ask a Question',
    'project.qa.subject': 'Subject',
    'project.qa.type': 'Question Type',
    'project.qa.question': 'Question',
    'project.qa.technical': 'Technical',
    'project.qa.procurement': 'Procurement',
    'project.qa.schedule': 'Schedule',
    'project.qa.general': 'General',

    'project.qa.list' : 'Questions & Answers',
    'project.qa.without' : 'No questions asked yet',
    'project.qa.ask.by': 'Asked by ',
    'project.qa.response.by': 'Responded by ',
    
    // Q&A Button
    'project.qa.response': 'Respond',
    'project.qa.send': 'Send',
    'project.qa.clear': 'Clear',

    // Download
    'project.download.title': 'Download Reports',
    'project.download.complete': 'Complete Report',
    'project.download.complete.description': 'Download a comprehensive project report',
    'project.download.questions': 'Questions Report',
    'project.download.questions.description': 'Download all questions and answers',
    
    // Download Button
    'project.download.button': 'Download',

    // Setting
    'project.setting.title': 'Settings',
    'project.setting.description': 'Manage system configuration and users',

    // Setting tabs
    'project.setting.tab.user': 'User Management',
    'project.setting.tab.project': 'Project Templates',
    'project.setting.tab.backup': 'System Backup',

    // Setting User
    'project.setting.user.add': 'Create New User',
    'project.setting.user.edit': 'Edit User',
    'project.setting.user.name': 'Name',
    'project.setting.user.email': 'Email',
    'project.setting.user.username': 'Username',
    'project.setting.user.password': 'Password',
    
    'project.setting.user.role': 'Role',
    'project.setting.user.customer': 'Customer',
    'project.setting.user.provider': 'Provider',
    'project.setting.user.administrator': 'Administrator',

    'project.setting.user.table.user': 'User',
    'project.setting.user.table.role': 'Role',
    'project.setting.user.table.username': 'Username',
    'project.setting.user.table.actions': 'Actions',

    // Setting Project Template
    'project.setting.template.title': 'Project Templates',
    'project.setting.template.description': 'Configure default project templates and settings',
    'project.setting.template.without': 'No templates configured',
    'project.setting.template.create': 'Create Template',

    // Setting Backup
    'project.setting.backup.title': 'System Backup',
    'project.setting.backup.description': 'Manage system backups and data export.',
    'project.setting.backup.create': 'Create Backup',
    'project.setting.backup.export': 'Export Backup',

    'project.setting.denied': 'Access denied. Administrator privileges required.',

    // Setting Button
    'project.setting.new': 'New User',
    'project.setting.save': 'Create',
    'project.setting.update': 'Update',

    // Common
    'common.save': 'Save',
    'common.saveing': 'Saving...',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    'common.select': 'Select Type',
    'common.delete': 'Delete',
    'common.delete.confirm': 'Confirm Delete',
  },
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    
    // Landing Page
    'landing.hero.title': 'NLH - Nosotros Lo Hacemos',
    'landing.hero.subtitle': 'Asesorias y Gestión de Proyectos - Construcción - Remodelación - Habilitación',
    'landing.hero.subtitle2': 'Plataforma Online - Licitaciones - Presupuesto - Control de Obras',
    'landing.services.title': 'Nuestros Servicios',
    'landing.about.title': 'Acerca de Nosotros',
    'landing.contact.title': 'Contáctanos',

    // Lading Page Services Section
    'landing.services.subtitle1': 'Asesoría y Gestión de Proyectos',
    'landing.services.description1': 'Proporciona orientación experta y supervisión durante todo el ciclo de vida del proyecto, desde el concepto inicial hasta la finalización.',
    'landing.services.subtitle2': 'Construcción Nueva',
    'landing.services.description2': 'Esto incluye desde la planificación inicial y la preparación del sitio hasta los toques finales y la entrega del proyecto.',
    'landing.services.subtitle3': 'Remodelación',
    'landing.services.description3': 'Transforma espacios existentes para satisfacer nuevas necesidades, mejorar la funcionalidad o actualizar la estética.',
    'landing.services.subtitle4': 'Plataforma Online',
    'landing.services.description4': 'Una solución centralizada basada en la nube que digitaliza y agiliza todo el flujo de trabajo de un proyecto de una empresa.',
    'landing.services.subtitle5': 'Gestión de Licitaciones',
    'landing.services.description5': 'Gestión integral del proceso de licitación, desde la preparación y emisión de los documentos de licitación hasta la evaluación de las ofertas y la adjudicación de contratos.',
    'landing.services.subtitle6': 'Presupuesto',
    'landing.services.description6': 'Proporciona una hoja de ruta financiera detallada para su proyecto, desde la planificación inicial hasta la finalización.',
    'landing.services.subtitle7': 'Control de Proyectos',
    'landing.services.description7': 'Un enfoque sistemático para gestionar y monitorear el rendimiento de un proyecto para garantizar que se mantenga dentro del presupuesto y el cronograma.',
    
    // Login
    'login.title': 'Iniciar Sesión en tu Cuenta',
    'login.username': 'Usuario',
    'login.password': 'Contraseña',
    'login.submit': 'Ingresar',
    'login.error': 'Usuario o contraseña inválidos',
    'login.test': 'Datos de Prueba',
    
    // Dashboard
    'dashboard.profile': 'Perfil',
    'dashboard.projects': 'Proyectos',
    'dashboard.license': 'Licitación',
    'dashboard.settings': 'Configuración',
    'dashboard.logout': 'Cerrar Sesión',

    // Dashboard Projects
    'dashboard.projects.subtitle': 'Gestión de sus proyectos de construcción',
    'dashboard.projects.notfound': 'No hay proyectos',
    'dashboard.projects.location': 'Localización',
    'dashboard.projects.type': 'Tipo',
    'dashboard.projects.start': 'Iniciado',
    'dashboard.projects.surface': 'Superficie',
    'dashboard.projects.delete.title': 'Confirma Eliminación',
    'dashboard.projects.delete.confirmation': 'Esta seguro que desea eliminar este projecto? Esta acción no puede ser deshecha',

     // Tab
    'tab.general': 'General',
    'tab.deadline': 'Fecha Limites',
    'tab.files': 'Archivos',
    'tab.qa': 'Consultas',
    'tab.download': 'Descargas',

    // Profile
    'project.profile.title': 'Administra la configuración de tu cuenta',
    'project.password.change': 'Cambiar Contraseña',
    'project.password.current': 'Contraseña Actual',
    'project.password.new': 'Contraseña Nueva',
    'project.password.confirm': 'Confirmar Nueva Contraseña',

    // Profile validation
    'project.password.match': 'La nueva contraseña no coinciden',
    'project.password.long': 'La contraseña debe tener al menos 6 caracteres.',
    'project.password.success': 'Contraseña actualizada exitosamente',

    // Profile Button
    'project.password.updating': 'Actualizando...',
    'project.password.update': 'Actualizar contraseña',
    
    // Projects
    'projects.title.new': 'Nuevo Proyecto',
    'projects.title.edit': 'Editar Proyecto',
    'projects.new': 'Nuevo Proyecto',
    'projects.edit': 'Editar',
    'projects.delete': 'Eliminar',
    'projects.view': 'Ver Detalles',

    // Project General Section
    'project.general.title': 'Información General',
    'project.general.name': 'Titulo',
    'project.general.location': 'Localización',
    'project.general.description': 'Descripción',
    
    // Project Detail Section
    'project.detail.title': 'Detalle Proyecto',
    'project.detail.view': 'Información del Proyecto',
    'project.detail.type': 'Tipo',
    'project.detail.quantity': 'Cantidad',
    'project.detail.surface': 'Superficie',
    'project.detail.floor': 'Nro de Piso',
    'project.detail.materiality': 'Materialidad',
    'project.detail.enclosure': 'Recinto',

    // Project Select Type
    'project.select.commercial': 'Comercial',
    'project.select.residential': 'Residencial',
    'project.select.industrial': 'Industrial',
    'project.select.infrastructure': 'Infraestructura',

    // Project Officer Section
    'project.officer.title': 'Responsables',
    'project.officer.principal1': 'Mandante 1',
    'project.officer.principal2': 'Mandante 2',
    'project.officer.professional': 'Profesional',
    'project.officer.professional.add': '+',
    'project.officer.specialist': 'Especialista',
    'project.officer.specialist.add': '+',
    'project.officer.contact': 'Contacto',

    // Project Addionally Section
    'project.addition.title': 'Información Adicional',
    'project.addition.title.placeholder': 'Alguna información adicional del projecto...',
    'project.addition.user': 'Cliente',
    'project.addition.binding': 'Licitación',

    // Deadline 
    'project.deadline.date': 'Fechas del proyecto',
    'project.deadline.publication': 'Fecha de publicación',
    'project.deadline.start': 'Fecha de inicio',
    'project.deadline.end': 'Fecha de finalización',
    
    'project.deadline.limits': 'Límites del proyecto',
    'project.deadline.offers': 'Límite de ofertas',
    'project.deadline.ask': 'Límite de consultas',
    'project.deadline.response': 'Límite de respuesta',

    // Archivos
    'project.files.title': 'Archivos de proyecto',
    'project.files.upload': 'Subir archivos',
    'project.files.support': 'Tipos de archivos admitidos',
    'project.files.documents': 'Documentos: PDF, DOC, DOCX',
    'project.files.cad': 'Archivos CAD: DWG',
    'project.files.images': 'Imagenes: JPG, JPEG, PNG',
    'project.files.size': 'Tamaño máximo de archivo: 10MB por archivo',
    'project.files.without': 'Aún no se han cargado archivos',
    'project.files.attach': 'Subir archivos para adjuntarlos a este proyecto',

    'project.files.table.file': 'Archivo',
    'project.files.table.date': 'Fecha de carga',
    'project.files.table.by': 'Subido por',
    'project.files.table.size': 'Tamaño',
    'project.files.table.action': 'Acción',

    'project.files.message': 'Listo para asociarse con este proyectot',

    // Project Button
    'project.button.save': 'Guardar Proyecto',
    'project.button.update': 'Actualizar Proyecto',

     // Binding
    'project.binding.title': 'Gestiona tus Licitaciones',
    'project.binding.without': 'No se encontraron licitaciones.',
    'project.binding.authority': 'Autoridad emisora',
    'project.binding.date': 'Fecha de Emisión',
    'project.binding.expiry': 'Fecha de Expiración',
    'project.binding.confirm': '¿Está seguro de que desea eliminar esta licitación? Esta acción no se puede deshacer.',

    'project.binding.add': 'Nueva Licitación',
    'project.binding.edit': 'Editar Licitación',
    'project.binding.name': 'Nombre Licitación',
    
    'project.binding.type': 'Tipo',
    'project.binding.construction': 'Construcción',
    'project.binding.electrical': 'Electrica',
    'project.binding.plumbing': 'Plomería',
    'project.binding.hvac': 'HVAC',
    'project.binding.engineering': 'Ingeniería',
    'project.binding.architecture': 'Arquitectura',  

    'project.binding.issuing': 'Authoridad',
    'project.binding.date.issue': 'Fecha Licitación',
    'project.binding.date.expiry': 'Expiración Licitación',

    // Binding Button
    'project.binding.new': 'Nueva Licitación',
    'project.binding.save': 'Guardar Licitación',

    // Q&A
    'project.qa.title': 'Haz una pregunta',
    'project.qa.subject': 'Asunto',
    'project.qa.type': 'Tipo de pregunta',
    'project.qa.question': 'Pregunta',
    'project.qa.technical': 'Técnico',
    'project.qa.procurement': 'Obtención',
    'project.qa.schedule': 'Cronograma',
    'project.qa.general': 'General',

    'project.qa.list' : 'Preguntas y respuestas',
    'project.qa.without' : 'Aún no se han hecho preguntas',
    'project.qa.ask.by': 'Preguntado por ',
    'project.qa.response.by': 'Respondido por ',
    
    // Q&A Button
    'project.qa.response': 'Responder',
    'project.qa.send': 'Enviar',
    'project.qa.clear': 'Limpiar',

    // Download
    'project.download.title': 'Descargar Informes',
    'project.download.complete': 'Informe completo',
    'project.download.complete.description': 'Descargue un informe completo del proyecto',
    'project.download.questions': 'Informe de preguntas',
    'project.download.questions.description': 'Descargar todas las preguntas y respuestas',
    
    // Download Button
    'project.download.button': 'Descargar',

    // Setting
    'project.setting.title': 'Ajustes',
    'project.setting.description': 'Administrar la configuración del sistema y los usuarios',

    // Setting tabs
    'project.setting.tab.user': 'Gestión de usuarios',
    'project.setting.tab.project': 'Plantillas de proyectos',
    'project.setting.tab.backup': 'Copia de seguridad del sistema',

    // Setting User
    'project.setting.user.add': 'Crear nuevo usuario',
    'project.setting.user.edit': 'Editar usuario',
    'project.setting.user.name': 'Nombre',
    'project.setting.user.email': 'Email',
    'project.setting.user.username': 'Nombre de Usuario',
    'project.setting.user.password': 'Contraseña',
    
    'project.setting.user.role': 'Rol',
    'project.setting.user.customer': 'Cliente',
    'project.setting.user.provider': 'Provedor',
    'project.setting.user.administrator': 'Administrador',

    'project.setting.user.table.user': 'Usuario',
    'project.setting.user.table.role': 'Rol',
    'project.setting.user.table.username': 'Nombre de Usuario',
    'project.setting.user.table.actions': 'Acciones',

    // Setting Project Template
    'project.setting.template.title': 'Plantillas de proyectos',
    'project.setting.template.description': 'Configurar plantillas y configuraciones de proyecto predeterminadas',
    'project.setting.template.without': 'No hay plantillas configuradas',
    'project.setting.template.create': 'Crear plantilla',

    // Setting Backup
    'project.setting.backup.title': 'Copia de seguridad del sistema',
    'project.setting.backup.description': 'Administrar copias de seguridad del sistema y exportación de datos.',
    'project.setting.backup.create': 'Crear copia de seguridad',
    'project.setting.backup.export': 'Exportar copia de seguridad',

    'project.setting.denied': 'Acceso denegado. Se requieren privilegios de administrador.',

    // Setting Button
    'project.setting.new': 'Nuevo usuario',
    'project.setting.save': 'Crear',
    'project.setting.update': 'Actualizar',
    
    // Common
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.close': 'Cerrar',
    'common.loading': 'Cargando...',
    'common.select': 'Seleccionar Tipo',
    'common.delete': 'Eliminar',
    'common.delete.confirm': 'Confirmar Eliminación',
  },
  pt: {
    // Navigation
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.login': 'Entrar',
    
    // Landing Page
    'landing.hero.title': 'NFA - Nós Fazemos Acontecer',
    'landing.hero.subtitle': 'Construction and Project Management - New Construction - Remodeling - Tenant Construção e Gerenciamento de Projetos - Novas Construções - Remodelação - Melhorias para Inquilinos',
    'landing.hero.subtitle2': 'Plataforma Online - Licitações - Orçamento - Controlo de Obras',
    'landing.services.title': 'Nossos Serviços',
    'landing.about.title': 'Sobre Nós',
    'landing.contact.title': 'Entre em Contato',

     // Landing Page Services Section
    'landing.services.subtitle1': 'Consultoria e Gestão de Projetos',
    'landing.services.description1': 'Fornece orientação especializada e supervisão durante todo o ciclo de vida do projeto, desde o conceito inicial até a conclusão.',
    'landing.services.subtitle2': 'Nova Construção',
    'landing.services.description2': 'Isso inclui desde o planejamento inicial e a preparação do local até os toques finais e a entrega do projeto.',
    'landing.services.subtitle3': 'Remodelação',
    'landing.services.description3': 'Transforme espaços existentes para atender a novas necessidades, melhorar a funcionalidade ou atualizar a estética.',
    'landing.services.subtitle4': 'Plataforma Online',
    'landing.services.description4': 'Uma solução centralizada baseada na nuvem que digitaliza e agiliza todo o fluxo de trabalho do projeto de uma empresa.',
    'landing.services.subtitle5': 'Gestão de Licitações',
    'landing.services.description5': 'Gestão abrangente do processo de licitação, desde a preparação e emissão dos documentos de licitação até a avaliação das propostas e adjudicação de contratos.',
    'landing.services.subtitle6': 'Orçamento',
    'landing.services.description6': 'Fornece um roteiro financeiro detalhado para o seu projeto, desde o planejamento inicial até a conclusão.',
    'landing.services.subtitle7': 'Controle de Projetos',
    'landing.services.description7': 'Uma abordagem sistemática para gerenciar e monitorar o desempenho de um projeto para garantir que ele permaneça dentro do orçamento e do cronograma.',
    
    // Login
    'login.title': 'Entrar na Sua Conta',
    'login.username': 'Usuário',
    'login.password': 'Senha',
    'login.submit': 'Entrar',
    'login.error': 'Usuário ou senha inválidos',
    'login.test': 'Data de teste',
    
    // Dashboard
    'dashboard.profile': 'Perfil',
    'dashboard.projects': 'Projetos',
    'dashboard.license': 'Licença',
    'dashboard.settings': 'Configurações',
    'dashboard.logout': 'Sair',

    // Dashboard Projects
    'dashboard.projects.subtitle': 'Gerencie seus projetos de construção',
    'dashboard.projects.notfound': 'Nenhum projeto encontrado',
    'dashboard.projects.location': 'Localização',
    'dashboard.projects.type': 'Tipo',
    'dashboard.projects.start': 'Iniciado',
    'dashboard.projects.surface': 'superfície',
    'dashboard.projects.delete.title': 'Confirmar exclusão',
    'dashboard.projects.delete.confirmation': 'Tem certeza de que deseja excluir este projeto? Esta ação não pode ser desfeita',

    // Tab
    'tab.general': 'General',
    'tab.deadline': 'Data Limite',
    'tab.files': 'Arquivos',
    'tab.qa': 'Perguntas',
    'tab.download': 'Descargas',

    // Profile
    'project.profile.title': 'Gerencie as configurações da sua conta',
    'project.password.change': 'Alterar a senha',
    'project.password.current': 'Senha atual',
    'project.password.new': 'Nova Senha',
    'project.password.confirm': 'Confirme a nova senha',

    // Profile validation
    'project.password.match': 'As novas senhas não correspondem',
    'project.password.long': 'A senha deve ter pelo menos 6 caracteres',
    'project.password.success': 'Senha atualizada com sucesso',

    // Profile Button
    'project.password.updating': 'Atualizando...',
    'project.password.update': 'Atualizar senha',
    
    // Projects
    'projects.title.new': 'Novo Projeto',
    'projects.title.edit': 'Editar Projeto',
    'projects.new': 'Novo Projeto',
    'projects.edit': 'Editar',
    'projects.delete': 'Excluir',
    'projects.view': 'Ver Detalhes',

    // Project General Section
    'project.general.title': 'Informações Gerais',
    'project.general.name': 'Título',
    'project.general.location': 'Localização',
    'project.general.description': 'Descrição',
    
    // Project Detail Section
    'project.detail.title': 'Detalhes do projeto',
    'project.detail.view': 'Informações do projeto',
    'project.detail.type': 'Tipo',
    'project.detail.quantity': 'Quantidade',
    'project.detail.surface': 'Superfície',
    'project.detail.floor': 'Nro de Andar',
    'project.detail.materiality': 'Materialidade',
    'project.detail.enclosure': 'Recinto',

    // Project Select Type
    'project.select.commercial': 'Comercial',
    'project.select.residential': 'Residencial',
    'project.select.industrial': 'Industrial',
    'project.select.infrastructure': 'Infraestrutura',

    // Project Officer Section
    'project.officer.title': 'Responsáveis',
    'project.officer.principal1': 'Diretor 1',
    'project.officer.principal2': 'Diretor 2',
    'project.officer.professional': 'Profissionais',
    'project.officer.professional.add': '+',
    'project.officer.specialist': 'Especialistas',
    'project.officer.specialist.add': '+',
    'project.officer.contact': 'Contato',

    // Project Addionally Section
    'project.addition.title': 'Informações adicionais',
    'project.addition.title.placeholder': 'Alguma informação adicional do projeto...',
    'project.addition.user': 'Cliente',
    'project.addition.binding': 'Vinculativo',

    // Deadline 
    'project.deadline.date': 'Datas do projeto',
    'project.deadline.publication': 'Data de publicação',
    'project.deadline.start': 'Data de início',
    'project.deadline.end': 'Data de término',
    
    'project.deadline.limits': 'Limites do Projeto',
    'project.deadline.offers': 'Limite de ofertas',
    'project.deadline.ask': 'Limite de perguntas',
    'project.deadline.response': 'Limite de resposta',

    // Archivos
    'project.files.title': 'Arquivos de projeto',
    'project.files.upload': 'Carregar arquivos',
    'project.files.support': 'Tipos de arquivo suportados',
    'project.files.documents': 'Documentos: PDF, DOC, DOCX',
    'project.files.cad': 'Arquivos CAD: DWG',
    'project.files.images': 'Imagens: JPG, JPEG, PNG',
    'project.files.size': 'Tamanho máximo do arquivo: 10MB por arquivo',
    'project.files.without': 'Nenhum arquivo carregado ainda',
    'project.files.attach': 'Carregar arquivos para anexá-los a este projeto',

    'project.files.table.file': 'Arquivo',
    'project.files.table.date': 'Data de upload',
    'project.files.table.by': 'Enviado por',
    'project.files.table.size': 'Tamanho',
    'project.files.table.action': 'Ação',

    'project.files.message': 'pronto para ser associado a este projeto',

    // Project Button
    'project.button.save': 'Salvar projeto',
    'project.button.update': 'Atualizar projeto',

     // Binding
    'project.binding.title': 'Gerencie suas licenças profissionais',
    'project.binding.without': 'Nenhuma licença encontrada',
    'project.binding.authority': 'Autoridade Emissora',
    'project.binding.date': 'Data de emissão',
    'project.binding.expiry': 'Data de validade',
    'project.binding.confirm': 'Tem certeza de que deseja excluir esta licença? Esta ação não pode ser desfeita.',

    'project.binding.add': 'Nova licença',
    'project.binding.edit': 'Editar licença',
    'project.binding.name': 'Nome da licença',
    
    // Binding Select Type
    'project.binding.type': 'Tipo',
    'project.binding.construction': 'Construção',
    'project.binding.electrical': 'Elétrica',
    'project.binding.plumbing': 'Encanamento',
    'project.binding.hvac': 'HVAC',
    'project.binding.engineering': 'Engenharia',
    'project.binding.architecture': 'Arquitetura',  

    'project.binding.issuing': 'Autoridade Emissora',
    'project.binding.date.issue': 'Data de emissão',
    'project.binding.date.expiry': 'Data de validade',

    // Binding Button
    'project.binding.new': 'Nova licença',
    'project.binding.save': 'Save License',

    // Q&A
    'project.qa.title': 'Faça uma pergunta',
    'project.qa.subject': 'Assunto',
    'project.qa.type': 'Tipo de pergunta',
    'project.qa.question': 'Pergunta',
    'project.qa.technical': 'Técnico',
    'project.qa.procurement': 'Aquisições',
    'project.qa.schedule': 'Agendar',
    'project.qa.general': 'Geral',

    'project.qa.list' : 'Perguntas e Respostas',
    'project.qa.without' : 'Nenhuma pergunta feita ainda',
    'project.qa.ask.by': 'Perguntado por ',
    'project.qa.response.by': 'Respondeu por ',
    
    // Q&A Button
    'project.qa.response': 'Responder',
    'project.qa.send': 'Enviar',
    'project.qa.clear': 'Limpar',

    // Download
    'project.download.title': 'Baixar relatórios',
    'project.download.complete': 'Relatório completo',
    'project.download.complete.description': 'Baixe um relatório abrangente do projeto',
    'project.download.questions': 'Relatório de perguntas',
    'project.download.questions.description': 'Baixe todas as perguntas e respostas',
    
    // Download Button
    'project.download.button': 'Baixar',

    // Setting
    'project.setting.title': 'Configurações',
    'project.setting.description': 'Gerenciar a configuração do sistema e os usuários',

    // Setting tabs
    'project.setting.tab.user': 'Gerenciamento de usuários',
    'project.setting.tab.project': 'Modelos de projeto',
    'project.setting.tab.backup': 'Backup do sistema',

    // Setting User
    'project.setting.user.add': 'Criar novo usuário',
    'project.setting.user.edit': 'Editar usuário',
    'project.setting.user.name': 'Nome',
    'project.setting.user.email': 'Email',
    'project.setting.user.username': 'Nome de usuario',
    'project.setting.user.password': 'Senha',
    
    'project.setting.user.role': 'função',
    'project.setting.user.customer': 'Cliente',
    'project.setting.user.provider': 'Provedor',
    'project.setting.user.administrator': 'Administrador',

    'project.setting.user.table.user': 'Usuario',
    'project.setting.user.table.role': 'função',
    'project.setting.user.table.username': 'Username',
    'project.setting.user.table.actions': 'Ações',

    // Setting Project Template
    'project.setting.template.title': 'Modelos de projeto',
    'project.setting.template.description': 'Configurar modelos e configurações de projeto padrão',
    'project.setting.template.without': 'Nenhum modelo configurado',
    'project.setting.template.create': 'Criar modelo',

    // Setting Backup
    'project.setting.backup.title': 'Backup do sistema',
    'project.setting.backup.description': 'Gerenciar backups do sistema e exportação de dados.',
    'project.setting.backup.create': 'Criar backup',
    'project.setting.backup.export': 'Exportar backup',

    'project.setting.denied': 'Acesso negado. Privilégios de administrador necessários.',

    // Setting Button
    'project.setting.new': 'Novo usuário',
    'project.setting.save': 'Criar',
    'project.setting.update': 'Atualizar',
    
    // Common
    'common.save': 'Salvar',
    'common.cancel': 'Cancelar',
    'common.close': 'Fechar',
    'common.loading': 'Carregando...',
    'common.select': 'Selecione o tipo',
    'common.delete': 'Excluir',
    'common.delete.confirm': 'Confirmar exclusão',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};