import React, { useState } from 'react';
import { FileText, Image as ImageIcon, Eye, Download, X } from 'lucide-react';

const PreviewPage: React.FC = () => {
  // 1. Dummy Data
  const [files] = useState([
    { id: 1, name: 'Project_Proposal.pdf', type: 'PDF', size: '2.4 MB', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 2, name: 'Brand_Assets.zip', type: 'Archive', size: '15.8 MB', url: '#' },
    { id: 3, name: 'Website_Mockup.png', type: 'Image', size: '4.1 MB', url: 'https://picsum.photos/800/600' },
    { id: 4, name: 'Invoice_Dec.pdf', type: 'PDF', size: '1.1 MB', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  ]);

  const [previewFile, setPreviewFile] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="bg-white border-b px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Client Portal</h1>
        <p className="text-gray-500 mt-2">Access your shared assets and project documentation.</p>
      </header>

      {/* 2. File Section */}
      <main className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FileText size={20} /> Attached Documents
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((file) => (
            <div key={file.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  {file.type === 'Image' ? <ImageIcon size={24} /> : <FileText size={24} />}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{file.name}</p>
                  <p className="text-xs text-gray-400">{file.type} • {file.size}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setPreviewFile(file)}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
                  title="Preview"
                >
                  <Eye size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-700">{previewFile.name}</h3>
              <button onClick={() => setPreviewFile(null)} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 bg-gray-100 flex items-center justify-center p-8 overflow-auto">
              {previewFile.type === 'Image' ? (
                <img src={previewFile.url} alt="Preview" className="max-w-full h-auto rounded shadow-lg" />
              ) : previewFile.type === 'PDF' ? (
                <iframe src={previewFile.url} className="w-full h-[600px]" title="PDF Preview"></iframe>
              ) : (
                <div className="text-center">
                  <FileText size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Preview not available for this file type.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewPage;