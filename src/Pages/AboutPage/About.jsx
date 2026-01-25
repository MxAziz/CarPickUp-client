import { FaCar, FaShieldAlt, FaUsers, FaMapMarkedAlt, FaAward, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    {
      icon: <FaCar className="w-8 h-8" />,
      title: "Wide Selection",
      description: "Choose from hundreds of vehicles ranging from economy to luxury cars"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "All our vehicles are regularly maintained and fully insured for your safety"
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      title: "Multiple Locations",
      description: "Pick up and drop off at convenient locations across the country"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "Competitive rates with no hidden fees, transparent pricing always"
    }
  ];

  const values = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority in everything we do"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in service quality and vehicle maintenance"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest and transparent practices"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Vehicles" },
    { number: "50+", label: "Locations" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "Muhammad Aziz",
      role: "CEO & Founder",
      image: "https://i.pinimg.com/1200x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.jpg"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      image: "https://i.pinimg.com/1200x/17/b6/76/17b6761d5cef6983cf1752973876c705.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Relations Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen mt-14 md:mt-16 bg-white dark:bg-[#232425] transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About CarPickUp
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Your trusted partner for convenient and affordable car rentals
              since 2015
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Founded in 2015, CarPickUp began with a simple vision: to make car
              rentals accessible, affordable, and hassle-free for everyone. What
              started as a small fleet of 20 vehicles has now grown into one of
              the most trusted car rental services in the region.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We believe that transportation should never be a barrier to your
              adventures, business trips, or daily needs. That's why we've built
              a service that puts you first, with transparent pricing, quality
              vehicles, and exceptional customer support.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Today, we serve thousands of satisfied customers across multiple
              locations, and we're constantly expanding to serve you better.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
              alt="Car fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#F3F4F6] dark:bg-[#232425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#136b7a] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best car rental experience with
            features that matter to you
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#232425] border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#136b7a] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#F3F4F6] dark:bg-[#232425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1a1b1c] rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#136b7a] text-white rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dedicated professionals committed to your satisfaction
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-[#136b7a] font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and book your perfect ride
            today
          </p>
          <Link to="/availableCars">
            <button className="bg-white text-[#136b7a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Browse Available Cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}