import React, { useState } from 'react';
import { 
  Plus, Search, UserPlus, UserMinus, ChevronDown, ChevronUp, 
  MapPin, FileText, Briefcase, CheckCircle2 
} from 'lucide-react';

const ProjectLandingPage: React.FC = () => {
  // 1. PROJECT FORM STATE
  const [projectDetails, setProjectDetails] = useState({
    name: '',
    description: '',
    address: ''
  });

  // 2. CUSTOMER LISTS (Dummy Data)
  // The global pool of customers available to be added
  const [availableCustomers] = useState([
    { id: 101, name: 'Acme Corp', industry: 'Manufacturing', email: 'contact@acme.com' },
    { id: 102, name: 'Global Tech', industry: 'Software', email: 'info@globaltech.io' },
    { id: 103, name: 'Green Energy Co', industry: 'Renewables', email: 'support@green.com' },
    { id: 104, name: 'Riverside Retail', industry: 'Commerce', email: 'hello@riverside.com' },
  ]);

  // The customers currently linked to this specific project
  const [associatedCustomers, setAssociatedCustomers] = useState([]);
  
  // 3. UI STATE
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // 4. LOGIC
  const associateCustomer = (customer) => {
    if (!associatedCustomers.find(c => c.id === customer.id)) {
      setAssociatedCustomers([...associatedCustomers, customer]);
    }
  };

  const removeAssociation = (id) => {
    setAssociatedCustomers(associatedCustomers.filter(c => c.id !== id));
  };

  const filteredAvailable = availableCustomers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !associatedCustomers.find(assoc => assoc.id === c.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* SECTION 2: CUSTOMERS ACCORDION */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <button 
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="w-full px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <UserPlus className="text-emerald-600" size={22} />
              <h3 className="text-xl font-bold">Customers Associated</h3>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold">
                {associatedCustomers.length}
              </span>
            </div>
            {isAccordionOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
          </button>

          {isAccordionOpen && (
            <div className="px-8 pb-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                
                {/* Search & Add Pool */}
                <div className="border-r border-slate-100 pr-0 md:pr-4">
                  <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Search Registered Customers</p>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                    <input 
                      type="text"
                      placeholder="Find customer by name..."
                      className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400 bg-slate-50"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {filteredAvailable.map(customer => (
                      <div key={customer.id} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <div>
                          <p className="text-sm font-semibold">{customer.name}</p>
                          <p className="text-[11px] text-slate-400">{customer.industry}</p>
                        </div>
                        <button 
                          onClick={() => associateCustomer(customer)}
                          className="p-1.5 hover:bg-emerald-50 text-emerald-600 rounded-full transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Associated List */}
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Linked to Project</p>
                  <div className="space-y-3">
                    {associatedCustomers.length > 0 ? (
                      associatedCustomers.map(customer => (
                        <div key={customer.id} className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl group">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <div>
                              <p className="text-sm font-bold text-slate-800">{customer.name}</p>
                              <p className="text-[11px] text-slate-500">{customer.email}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeAssociation(customer.id)}
                            className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <UserMinus size={18} />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="border-2 border-dashed border-slate-100 rounded-xl p-8 text-center">
                        <p className="text-sm text-slate-400 italic">No customers linked yet.</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectLandingPage;