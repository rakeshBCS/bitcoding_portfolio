import React from 'react';

const TimeCalcProAppPrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">Last updated: August 8, 2025</p>

      <p className="mb-4">
        <strong>TimeCalcPro</strong> is a mobile app developed and maintained under{' '}
        <strong>Bitcoding Solution</strong>. This app is provided free of charge and is intended to assist users
        in calculating and storing their daily working hours.
      </p>

      <p className="mb-4">
        Your privacy is very important to us. This policy explains how your data is handled when using the app.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information Collection</h2>
      <p className="mb-4">
        <strong>TimeCalcPro</strong> does not collect, store, or transmit any personal information. All time log
        data is saved locally on your device.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Local Storage</h2>
      <p className="mb-4">
        The time entries you record are saved locally and are only accessible to you. We do not have access to
        your data in any way.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Export Feature</h2>
      <p className="mb-4">
        You can export your time logs as a CSV file. This file is generated directly on your device and is never
        shared externally unless you choose to do so.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. No Ads or Analytics</h2>
      <p className="mb-4">
        <strong>TimeCalcPro</strong> does not use advertising, analytics, or tracking tools. The app is designed
        to be simple, private, and distraction-free.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Security</h2>
      <p className="mb-4">
        Since your data is stored only on your device, there is no risk of external data breaches. You are in
        full control of your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this privacy policy occasionally. Any changes will be reflected on this page with a revised
        date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions, feedback, or concerns about this Privacy Policy, please reach out to us at:{' '}
        <a
          href="mailto:bitcodingsolution@gmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          bitcodingsolution@gmail.com
        </a>
      </p>

      <hr className="my-8" />

      <p className="text-center text-sm text-gray-600">
        <strong>TimeCalcPro</strong> is proudly powered by{' '}
        <a
          href="https://bitcodingsolution.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Bitcoding Solution
        </a>
        .
      </p>

      <p className="text-center text-xs text-gray-400 mt-2">© 2025 Bitcoding Solution. All rights reserved.</p>
    </div>
  );
};

export default TimeCalcProAppPrivacyPolicy;
