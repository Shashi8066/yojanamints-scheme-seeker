
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl">🌿</span>
              <span className="text-lg font-bold text-gray-900">YojanaMints</span>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted companion for navigating India's government schemes and benefits.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/eligibility-checker" className="text-sm text-gray-600 hover:text-blue-600">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link to="/subsidy-estimator" className="text-sm text-gray-600 hover:text-blue-600">
                  Subsidy Estimator
                </Link>
              </li>
              <li>
                <Link to="/scheme-comparison" className="text-sm text-gray-600 hover:text-blue-600">
                  Compare Schemes
                </Link>
              </li>
              <li>
                <Link to="/scheme-tracker" className="text-sm text-gray-600 hover:text-blue-600">
                  Live Schemes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              Email: contact@yojanamints.com
            </p>
            <div className="mt-4">
              <Link to="/about" className="text-sm text-gray-600 hover:text-blue-600">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 YojanaMints. Not affiliated with Government of India.
            </p>
            <p className="text-sm text-gray-500 mt-2 sm:mt-0">
              For guidance only. Visit official portals for final eligibility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
