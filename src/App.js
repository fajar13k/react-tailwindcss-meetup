import React, { Component } from 'react';
import Logo from './assets/logo-meetup.svg';
import Avatar from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <div className="font-sans bg-gray-200">
        <header className="bg-white flex items-center justify-between p-4">
          <div className="w-32">
            <a href="/"><img src={Logo} alt="logo" /></a>
          </div>
          <ul className="flex items-center text-sm text-gray-600">
            <li className="border-r border-gray-400 pr-4 mr-4"><a href="/" className="text-red-600 font-bold">Start a new group</a></li>
            <li className="mr-6"><a href="/" className="hover:text-red-600">Explore</a></li>
            <li className="mr-6"><a href="/" className="hover:text-red-600">Messages</a></li>
            <li className="mr-6 relative">
              <a href="/" className="hover:text-red-600">Notifications</a>
              <div className="absolute w-2 h-2 rounded-full bg-green-500 right-0 top-0" style={{ right: "-10px" }}></div>
            </li>
            <li>
              <a href="/" className="flex items-center">
                <img src={Avatar} alt="avatar" className="rounded-full w-8 h-8" />
                <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
              </a>
            </li>
          </ul>
        </header>

        {/* Hero header */}
        <div className="bg-meetup-blue text-center py-8 pb-20">
          <div className="text-white text-4xl font-bold">Find your next event</div>
          <div className="text-gray-400">
            <span className="mr-2">41 events in your group</span>
            <span className="mr-2">&middot;</span>
            <span>3,981 events near you</span>
          </div>
        </div>

        {/* Container for middle event finder */}
        <div className="container mx-auto px-40 mb-16">
          <div className="bg-gray-900 text-white flex items-center justify-between p-3 -my-8">
            <div className="flex items-center">
              <span className="relative">
                <input type="text" placeholder="Search" className="text-gray-600 rounded px-2 py-3 w-72" />
                <span className="absolute right-0 top-0 mr-3" style={{ top: "10px" }}>
                  <svg className="text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                </span>
              </span>
              <span className="ml-4">within <a href="/" className="border-b border-gray-500 hover:border-gray-100">50 miles</a> of <a href="/" className="border-b border-gray-500 hover:border-gray-100">Mississauga, Ontario</a></span>
            </div>
            <div className="flex items-center">
              <button className="border-l border-b border-t border-gray-700 px-6 py-2">Groups</button>
              <button className="border-r border-b border-t border-gray-700 bg-gray-700 text-white px-6 py-2 font-bold">Calendar</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
