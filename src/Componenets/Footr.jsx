import React from 'react';

function Footr() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-blue-500 cursor-pointer">Branding</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Design</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Marketing</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-blue-500 cursor-pointer">About Us</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Contact</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Jobs</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-blue-500 cursor-pointer">Terms of Use</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Privacy Policy</a></li>
            <li><a className="hover:text-blue-500 cursor-pointer">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
          <p className="text-sm mb-3">Get the latest furniture trends and offers.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="ShopHub.com"
              className="input input-bordered w-full rounded-md text-sm bg-amber-50"
            />
            <button className="btn btn-primary w-full rounded-md text-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FurniHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footr;
