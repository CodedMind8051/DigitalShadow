export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl border border-gray-800 p-8 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Last Updated: February 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl border border-gray-800 p-8">
          <section className="space-y-8">
            {/* Section 1 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                DigitalShadow ("we", "our", or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and protect
                your information when you use our application.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you sign in using Google authentication, we may access:
              </p>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-indigo-500/30">
                    •
                  </span>
                  <span className="leading-relaxed">Your basic Google profile information (name and email address).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-indigo-500/30">
                    •
                  </span>
                  <span className="leading-relaxed">Your YouTube liked videos metadata via the YouTube Data API.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We do not collect or store your Google password.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                3. How We Use Your Data
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use your YouTube liked videos data solely to:
              </p>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Analyze content preferences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Classify videos into categories such as learning or entertainment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Generate productivity and interest insights.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Your data is not sold, rented, or shared with third parties for advertising purposes.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Data Storage
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Data may be stored securely in our database for analysis and reporting purposes.
                We implement reasonable security measures to protect your information.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Third-Party Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                DigitalShadow uses:
              </p>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-indigo-500/30">
                    •
                  </span>
                  <span className="leading-relaxed">Google OAuth for authentication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-indigo-500/30">
                    •
                  </span>
                  <span className="leading-relaxed">YouTube Data API for accessing liked videos metadata.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-indigo-500/30">
                    •
                  </span>
                  <span className="leading-relaxed">AI processing services for content classification.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Use of Google APIs complies with the{' '}
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-2 font-medium transition-colors"
                >
                  Google API Services User Data Policy
                </a>, including the Limited Use requirements.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                6. Data Deletion
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Users may request deletion of their data by contacting us at the email
                address provided below. Upon request, we will permanently remove associated
                data from our systems within a reasonable timeframe.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                7. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-blue-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Access the personal data we hold about you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-blue-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Request correction of inaccurate data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-blue-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Request deletion of your data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-blue-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">Revoke access to your Google account at any time.</span>
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                8. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We employ industry-standard security measures to protect your data, including encryption, 
                secure authentication protocols, and regular security audits. However, no method of 
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of any material changes by posting the updated 
                policy on this page and updating the "Last Updated" date. Continued use of the application 
                constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 10 - Contact */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                10. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions regarding this Privacy Policy, or wish to exercise your 
                data rights, please contact:
              </p>
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-lg p-4 inline-block">
                <p className="text-gray-200 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  shahzadekhan296@gmail.com
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Your privacy is important to us. We are committed to protecting your personal information 
            and being transparent about how we use it.
          </p>
        </div>
      </div>
    </div>
  );
}