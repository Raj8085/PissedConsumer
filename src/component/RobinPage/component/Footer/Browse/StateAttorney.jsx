import {  Phone, Globe, Mail, MapPin } from 'lucide-react';

const AttorneyGeneralContacts = () => {

  const stateContacts = [
    {
      state: 'Alabama',
      mailingAddress: {
        name: 'Alabama Attorney General',
        street: '501 Washington Avenue',
        city: 'Montgomery',
        zip: '36104'
      },
      website: 'www.alabamaag.gov',
      email: 'consumerinterest@ago.state.al.us',
      phone: '(800) 392-5658'
    },
    {
      state: 'Arizona',
      mailingAddress: {
        name: 'Arizona Attorney General',
        street: '2005 N Central Ave',
        city: 'Phoenix',
        zip: '85004'
      },
      website: 'www.azag.gov',
      email: 'consumerinfo@azag.gov',
      phone: '(602) 542-5763'
    },
    // Add more states here...
  ];

  const generalInfo = {
    definition: 'In the USA the state Attorney General is the chief legal officer of a state who represents the government in litigation, serves as legal advisor to state government agencies and legislatures, ensures that rights and interests of people are protected in a proper way.',
    duties: [
      'representing the state and its agencies in civil actions',
      'acting as public advocate in areas such as child support enforcement, consumer protection, antitrust and utility regulation',
      'assisting and coordinating statewide programs',
      'performing federal and state environmental laws',
      'handling criminal appeals and serious statewide criminal prosecutions',
      'operating victim compensation programs'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          List Of State Attorneys General Contacts
        </h1>

        {/* Information Sections */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Who Is State Attorney General?</h2>
          <p className="text-gray-700 mb-6">{generalInfo.definition}</p>

          <h2 className="text-xl font-semibold mb-4">What Does the State Attorney General Do?</h2>
          <p className="text-gray-700 mb-2">The state attorney general duties may vary from state to state, but basically include:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            {generalInfo.duties.map((duty, index) => (
              <li key={index} className="mb-2">{duty}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">More Related Topics:</h2>
          <ul className="text-blue-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                How to file a complaint with the state attorney general?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instructions and important information
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Cards Section */}
        <h2 className="text-2xl font-semibold mb-6">How to Contact State Attorney General?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateContacts.map((contact) => (
            <div
              key={contact.state}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4">
                State of {contact.state} Attorney General Office
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Mailing address</p>
                    <div className="text-gray-600">
                      <p>{contact.mailingAddress.name}</p>
                      <p>{contact.mailingAddress.street}</p>
                      <p>{contact.mailingAddress.city}, {contact.mailingAddress.zip}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <a
                    href={`https://${contact.website}`}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.website}
                  </a>
                </div>

                {contact.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>

                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm block mt-4"
                >
                  View full contact information
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttorneyGeneralContacts;
