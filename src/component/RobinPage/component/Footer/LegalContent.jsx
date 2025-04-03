function LegalContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Legal Information</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6 sm:p-8">
          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 mb-4">
              We are Consumer Opinion LLC. Before initiating litigation against our platform
              or seeking the identity of an individual who has posted a review or comment,
              we encourage you to familiarize yourself with the content appearing below.
            </p>
            <p className="text-gray-700">
              We have compiled this information to aid you, or your agents, for the purpose
              of explaining some of the more common issues we are contacted about. Our hope
              is that together this page will answer the majority of inquiries we receive
              concerning certain legal issues involving our website.
            </p>
          </div>

          {/* What Works Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-2">📚</span> {/* Book Icon */}
              What Works
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">• Subpoena</li>
              <li className="hover:text-blue-600 cursor-pointer">• Court Order</li>
              <li className="hover:text-blue-600 cursor-pointer">• A valid decision of arbitrator (LVP)</li>
              <li className="hover:text-blue-600 cursor-pointer">• Removal by a content author</li>
            </ul>
          </section>

          {/* What Doesn't Work Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">⚠️</span> {/* Warning Icon */}
              What doesn&apos;t work
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">• Legal Threats</li>
              <li className="hover:text-blue-600 cursor-pointer">• Cases Against PC</li>
            </ul>
          </section>

          {/* Common Issues Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-green-600 mr-2">💬</span> {/* Help Icon */}
              The Most Common Issues We Are Contacted About
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">• Ways to remove review or comment</li>
              <li className="hover:text-blue-600 cursor-pointer">• Why do we allow anonymous posts and use of pseudonyms?</li>
              <li className="hover:text-blue-600 cursor-pointer">• Why does our platform ignore my communications?</li>
              <li className="hover:text-blue-600 cursor-pointer">• Section 230 of the Communications Decency Act</li>
              <li className="hover:text-blue-600 cursor-pointer">• One-sided Claims of Confidentiality</li>
              <li className="hover:text-blue-600 cursor-pointer">• Claims of Copyright Infringement</li>
              <li className="hover:text-blue-600 cursor-pointer">• Claims of Trademark Infringement</li>
              <li className="hover:text-blue-600 cursor-pointer">• Platform&apos;s Subpoena Policy</li>
              <li className="hover:text-blue-600 cursor-pointer">• Recommended approach to your legal claims</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LegalContent;
