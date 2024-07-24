import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import UpcomingAppointment from './UpcomingAppointment';
import AvailableDoctors from './AvailableDoctors';
import Footer from './Footer';

const profile= () => {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <Header />
        <SearchBar />
        <main className="mt-8">
          <UpcomingAppointment />
          <AvailableDoctors />
        </main>
        <Footer />
      </div>
    );
  };

  export default profile;
  