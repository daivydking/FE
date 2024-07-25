import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import Upcoming from './Upcoming';
import AvailableDoctors from './AvailableDoctors';
import Footer from './Footer';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <Header />
        <SearchBar />
        <main className="mt-8">
          <Upcoming />
          <AvailableDoctors />
        </main>
        <Footer />
      </div>
  )
}

export default Profile