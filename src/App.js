import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import Logo from './assets/logo-meetup.svg';
import Avatar from './assets/avatar.jpg';
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="font-sans bg-gray-200">
        <header className="bg-white flex flex-col lg:flex-row items-center justify-between p-4">
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
        <div className="container mx-auto px-8 xl:px-40 mb-16">
          <div className="bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-between p-3 -my-8">
            <div className="flex flex-col lg:flex-row items-center">
              <span className="relative my-4 lg:my-1">
                <input type="text" placeholder="Search" className="text-gray-600 rounded px-2 py-3 w-72" />
                <span className="absolute right-0 top-0 mr-3" style={{ top: "10px" }}>
                  <svg className="text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                </span>
              </span>
              <span className="ml-4">within <a href="/" className="border-b border-gray-500 hover:border-gray-100">50 miles</a> of <a href="/" className="border-b border-gray-500 hover:border-gray-100">Mississauga, Ontario</a></span>
            </div>
            <div className="flex items-center my-4 lg:my-0">
              <button className="border-l border-b border-t border-gray-700 px-6 py-2">Groups</button>
              <button className="border-r border-b border-t border-gray-700 bg-gray-700 text-white px-6 py-2 font-bold">Calendar</button>
            </div>
          </div>
        </div>

        {/* Container for main content */}
        <div className="container mx-auto px-8 xl:px-40 flex flex-col flex-col-reverse lg:flex-row pb-8">
          <div className="w-full lg:w-7/10">

            <div className="pl-3 uppercase font-bold text-sm py-2 pb-4">
              Saturday, May 25
            </div>

            <div className="events border border-gray-400 bg-white mb-8">
              <div className="event border-b border-gray-400 flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
              <div className="event border-b border-gray-400 flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
              <div className="event flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
            </div>

            <div className="pl-3 uppercase font-bold text-sm py-2 pb-4">
              Sunday, May 26
            </div>

            <div className="events border border-gray-400 bg-white mb-8">
              <div className="event border-b border-gray-400 flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
              <div className="event border-b border-gray-400 flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
              <div className="event flex p-4">
                <div className="w-16 mr-4 text-gray-600"><a href="/">6:00 PM</a></div>
                <div>
                  <div className="uppercase font-bold text-gray-700 text-sm"><a href="/">Mississauga .NET user group</a></div>
                  <div className="font-bold text-gray-800 text-xl"><a href="/">Visual Studio 2019 Launch Party</a></div>
                  <div className="text-gray-600">31 .NET coders going</div>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-gray-400 py-8 mb-8">
              <div className="text-center font-bold text-2xl mb-2">
                Host events in Mississauga
              </div>
              <div className="text-center mb-8">Can't find what you're looking for? Create a Meetup group to start hosting local events.</div>

              <div className="flex flex-col sm:flex-row -mx-2">
                <div className="w-full sm:w-1/2 mx-2 bg-white shadow mb-4">
                  <div className="px-6 py-4">
                    <div className="font-bold"><a href="/">Usability</a></div>
                    <div className="text-gray-700 mb-1">593 Follow this topic</div>
                    <div><a href="/" className="text-teal-600 hover:underline">Host events</a></div>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mx-2 bg-white shadow mb-4">
                  <div className="px-6 py-4">
                    <div className="font-bold"><a href="/">Web Development</a></div>
                    <div className="text-gray-700 mb-1">11,079 follow this topic</div>
                    <div><a href="/" className="text-teal-600 hover:underline">Host events</a></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row -mx-2">
                <div className="w-full sm:w-1/2 mx-2 bg-white shadow mb-4">
                  <div className="px-6 py-4">
                    <div className="font-bold"><a href="/">Technology</a></div>
                    <div className="text-gray-700 mb-1">10,093 Follow this topic</div>
                    <div><a href="/" className="text-teal-600 hover:underline">Host events</a></div>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mx-2 bg-white shadow mb-4">
                  <div className="px-6 py-4">
                    <div className="font-bold"><a href="/">PHP</a></div>
                    <div className="mb-1 text-gray-700">1,227 follow this topic</div>
                    <div><a href="/" className="text-teal-600 hover:underline">Host events</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full lg:w-3/10 ml-0 lg:ml-6">
            <div className="pt-2 pb-4">
              &nbsp;
            </div>

            <div className="border border-gray-400 bg-white text-sm mb-8">
              <div className="border-b border-gray-400 flex px-4 py-2">
                <a href="/">All upcoming events</a>
              </div>
              <div className="border-b border-gray-400 flex font-bold bg-purple-100 text-meetup-purple">
                <div className="border-l-4 border-meetup-purple px-4 pl-3 py-2">
                  <a href="/">Your groups and suggestions</a>
                </div>
              </div>
              <div className="border-b border-gray-400 flex px-4 py-2">
                <a href="/">Your groups only</a>
              </div>
              <div className="flex px-4 py-2">
                <a href="/">Your events only</a>
              </div>
            </div>

            <div className="flex lg:justify-end mb-4">
              <button className="bg-white px-4 py-1 text-sm border border-gray-500">Today</button>
            </div>

            <div className="w-full mb-8">
              <DatePicker
                todayButton="Today"
                selected={this.state.startDate}
                onChange={this.handleChange}
                inline
              />
            </div>

            <div className="text-center flex justify-center">
              <a href="/" className="flex">
                <svg className="mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"></path></svg>
                <span>Export to...</span>
              </a>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-8 xl:px-40 py-8">

            <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
              <div><a href="/" className="font-bold">Start a new group</a></div>
              <div><a href="/">Logout</a></div>
            </div>
            <div className="links mb-8">
              <ul className="flex">
                <li className="mr-4"><a href="/">Help</a></li>
                <li className="mr-4"><a href="/">About Us</a></li>
                <li className="mr-4"><a href="/">Meetup Pro</a></li>
                <li className="mr-4"><a href="/">Jobs</a></li>
                <li className="mr-4"><a href="/">Apps</a></li>
                <li className="mr-4"><a href="/">API</a></li>
                <li className="mr-4"><a href="/">Topics</a></li>
                <li className="mr-4"><a href="/">Browse Cities</a></li>
                <li className="mr-4"><a href="/">Blog</a></li>
              </ul>
            </div>
            <div className="social mb-6">
              <div>Follow us</div>
              <div>Social medias</div>
            </div>

            <div className="copyright text-sm text-gray-400 mb-4">
              &copy; 2019 Meetup. Meetup is a wholly owned subsidiary of WeWord Companies Inc.
            </div>

            <div className="privacy">
              <ul className="flex">
                <li className="mr-4"><a href="/">Privacy</a></li>
                <li className="mr-4"><a href="/">Terms</a></li>
              </ul>
            </div>

          </div>
        </footer>

      </div>
    );
  }
}

export default App;
