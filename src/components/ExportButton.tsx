import React, { useState } from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { useMemberContext } from '../context/MemberContext';
import { exportToSpreadsheet } from '../utils/spreadsheetService';

export const ExportButton: React.FC = () => {
  const { members, payments } = useMemberContext();
  const [isExporting, setIsExporting] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      try {
        setIsExporting(true);
        const spreadsheetUrl = await exportToSpreadsheet(members, payments, access_token);
        window.open(spreadsheetUrl, '_blank');
      } catch (error) {
        console.error('Export failed:', error);
        alert('L\'exportation a échoué. Veuillez réessayer.');
      } finally {
        setIsExporting(false);
      }
    },
    scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file',
  });

  return (
    <button
      onClick={() => login()}
      disabled={isExporting}
      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
    >
      <FileSpreadsheet className="w-4 h-4 mr-2" />
      {isExporting ? 'Exportation...' : 'Exporter vers Google Sheets'}
    </button>
  );
};