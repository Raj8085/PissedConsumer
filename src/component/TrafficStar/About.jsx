import { MapPin, Briefcase } from 'lucide-react';

const AboutTraffic = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600">Our Mission and Vision</h1>
        <p className="text-xl text-gray-700 mt-4">
          Revolutionizing Ad Tech Since 2014
        </p>
      </header>

      {/* Who We Are */}
      <section className="relative bg-blue-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700">
          Since 2014, TrafficStars has been at the forefront of digital advertising innovation. Our journey includes achieving significant milestones, scaling global ad networks, and partnering with top publishers to deliver world-class solutions.
        </p>
        <div className="absolute -top-8 right-8">
          <Briefcase className="text-blue-300" size={64} />
        </div>
      </section>

      {/* Our Technology */}
      <section className="relative bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Technology</h2>
        <p className="text-lg text-gray-700">
          We harness AI-driven tools for seamless ad optimization, leverage programmatic advertising for efficiency, and ensure transparency with state-of-the-art fraud detection systems.
        </p>
        <div className="absolute -top-8 left-8">
          <MapPin className="text-blue-300" size={64} />
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member */}
          {["John Doe", "Jane Smith", "Emily Johnson"].map((name, index) => (
            <div key={index} className="text-center">
              <img
                src={`https://via.placeholder.com/150?text=${name}`}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold mt-4">{name}</h3>
              <p className="text-sm text-gray-600">Role {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Office Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Office */}
          {[
            { city: "Limassol", address: "123 Limassol St, Cyprus", phone: "+357 123 4567" },
            { city: "Barcelona", address: "456 Barcelona Ave, Spain", phone: "+34 987 6543" },
          ].map((office, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold">{office.city} Office</h3>
              <p className="text-sm text-gray-600">{office.address}</p>
              <p className="text-sm text-gray-600">{office.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTraffic;