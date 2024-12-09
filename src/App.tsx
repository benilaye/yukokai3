import React from 'react';
import { MemberList } from './components/MemberList';
import { PaymentHistory } from './components/PaymentHistory';
import { AddMemberForm } from './components/AddMemberForm';
import { ExportButton } from './components/ExportButton';
import { MemberProvider } from './context/MemberContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Dumbbell } from 'lucide-react';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <MemberProvider>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Dumbbell className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">
                    Club de Karaté Yukokai
                  </span>
                </div>
                <div className="flex items-center">
                  <ExportButton />
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <AddMemberForm />
                  <MemberList />
                </div>
                <div className="space-y-6">
                  <PaymentHistory />
                </div>
              </div>
            </div>
          </main>
        </div>
      </MemberProvider>
    </GoogleOAuthProvider>
  );
}

export default App;