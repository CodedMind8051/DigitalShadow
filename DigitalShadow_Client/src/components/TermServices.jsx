export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl border border-gray-800 p-8 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using DigitalShadow, you agree to be bound by these
                Terms of Service and our Privacy Policy. If you do not agree, you may 
                not use the application.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                2. Description of Service
              </h2>
              <p className="text-gray-300 leading-relaxed">
                DigitalShadow provides AI-based analysis of YouTube like history
                data to generate productivity insights and reports.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                3. User Responsibilities
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">You must be at least 13 years old to use this service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">You must comply with all applicable laws and regulations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">You must not misuse the application or attempt unauthorized access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">You are responsible for maintaining the security of your account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 border border-purple-500/30">
                    ✓
                  </span>
                  <span className="leading-relaxed">You must provide accurate information when creating an account.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Google API Services Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Use of information received from Google APIs adheres to the{' '}
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-2 font-medium transition-colors"
                >
                  Google API Services User Data Policy
                </a>, including Limited Use requirements. 
                Your YouTube data is only used to provide you with the requested analysis 
                and is not shared with third parties.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Data Usage and Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of DigitalShadow is also governed by our Privacy Policy. 
                We process your YouTube like history data solely to provide the service 
                and do not sell or share your personal information with third parties 
                for marketing purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                6. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All content, branding, software, and materials associated with DigitalShadow
                remain the intellectual property of its owner. You may not copy, modify,
                distribute, or reverse engineer any part of the service without express 
                written permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The service is provided "as is" and "as available" without warranties 
                of any kind, either express or implied. We do not guarantee uninterrupted, 
                timely, secure, or error-free operation. The insights and analyses provided 
                are for informational purposes only.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, DigitalShadow and its operators 
                shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly, arising from the use of the application.
              </p>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                9. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate your access to the service 
                at any time, with or without notice, if these terms are violated or for 
                any other reason. Upon termination, you must cease all use of the application.
              </p>
            </div>

            {/* Section 10 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                10. Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms of Service from time to time. We will notify 
                you of any material changes by posting the new terms on this page and 
                updating the "Last Updated" date. Your continued use of the service after 
                changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Section 11 */}
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                11. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the 
                laws of India. Any disputes arising from these terms shall be subject 
                to the exclusive jurisdiction of the courts in Bihar, India.
              </p>
            </div>

            {/* Section 12 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                12. Severability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, 
                that provision shall be limited or eliminated to the minimum extent necessary 
                so that the Terms shall otherwise remain in full force and effect.
              </p>
            </div>

            {/* Section 13 - Contact */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-bold text-white mb-3">
                13. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For any questions, concerns, or requests regarding these Terms of Service, 
                please contact us at:
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
            By using DigitalShadow, you acknowledge that you have read and understood these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}