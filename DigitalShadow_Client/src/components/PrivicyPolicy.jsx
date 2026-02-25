export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">
        Last Updated: February 25, 2026
      </p>

      <section className="space-y-4">

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p>
          DigitalShadow ("we", "our", or "us") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and protect
          your information when you use our application.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
        <p>
          When you sign in using Google authentication, we may access:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Your basic Google profile information (name and email address).</li>
          <li>Your YouTube liked videos metadata via the YouTube Data API.</li>
        </ul>
        <p>
          We do not collect or store your Google password.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Data</h2>
        <p>
          We use your YouTube liked videos data solely to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Analyze content preferences.</li>
          <li>Classify videos into categories such as learning or entertainment.</li>
          <li>Generate productivity and interest insights.</li>
        </ul>
        <p>
          Your data is not sold, rented, or shared with third parties for advertising purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Data Storage</h2>
        <p>
          Data may be stored securely in our database for analysis and reporting purposes.
          We implement reasonable security measures to protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Third-Party Services</h2>
        <p>
          DigitalShadow uses:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Google OAuth for authentication.</li>
          <li>YouTube Data API for accessing liked videos metadata.</li>
          <li>AI processing services for content classification.</li>
        </ul>
        <p>
          Use of Google APIs complies with the Google API Services User Data Policy,
          including the Limited Use requirements.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Data Deletion</h2>
        <p>
          Users may request deletion of their data by contacting us at the email
          address provided below. Upon request, we will permanently remove associated
          data from our systems within a reasonable timeframe.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of
          the application constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Contact Information</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please contact:
        </p>
        <p className="font-medium">
          Email: support@digitalshadow.codedmind.in
        </p>

      </section>
    </div>
  );
}