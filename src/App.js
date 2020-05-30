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
      </div>
    );
  }
}

export default App;
