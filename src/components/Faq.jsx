import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faSearch,
  faFolderOpen,
  faUserCheck,
  faBroom,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

function Faq() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#1e293b] text-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center">Frequently Asked Questions</h1>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          How do I sign up on Smile Shop?
        </h2>
        <p>
          Click on the "Sign In" button in the navbar. Fill in your name, email, phone number, and password — your details will be saved securely in your browser for a seamless experience.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          How do I search for a product by name or category?
        </h2>
        <p>
          Use the search bar at the top of the homepage. Type a product name (e.g., "shoes") or category (e.g., "electronics") and press Enter. You’ll instantly see filtered results that match your query!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
          Where is my data stored after sign-up?
        </h2>
        <p>
          Your sign-up info is safely stored in your browser’s localStorage — only on your device. This helps us personalize your experience without needing to create a server-side account.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faUserCheck} className="mr-2" />
          How can I see if I’m signed in?
        </h2>
        <p>
          Once you sign in, your name will appear in the navbar. This helps you know you're logged in and ready to shop!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faBroom} className="mr-2" />
          How can I clear my sign-in data?
        </h2>
        <p>
          To remove your info, simply clear your browser’s localStorage or use the "Sign Out" feature (coming soon 😉).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sky-400">
          <FontAwesomeIcon icon={faPalette} className="mr-2" />
          What do the colors in the menu mean?
        </h2>
        <p>
          Great question! If a menu item is <span className="text-blue-400 font-semibold">blue</span>, it means you are currently on that page. If it turns <span className="text-yellow-400 font-semibold">yellow</span>, it means your mouse is hovering over it.
        </p>
      </div>
    </div>
  );
}

export default Faq;
