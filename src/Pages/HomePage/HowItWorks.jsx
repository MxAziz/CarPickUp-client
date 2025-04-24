import { FiSearch, FiCalendar, FiSmile } from 'react-icons/fi';

const HowItWorks = () => {
  return (
    <section className="py-20 pb-28 bg-gray-100 dark:bg-[#232425]">
      <div className="text-center md:w-1/2 mx-auto py-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          How it works
        </h2>
        <p className="dark:text-gray-100 mb-10">
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to book and confirm your vehicle of choice
          online.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="relative md:left-20 flex items-start gap-4 bg-white dark:bg-[#323538] p-4 rounded-xl">
              <FiSearch size={24} className="mt-1 text-gray-700 dark:text-white" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">Browse and select</h3>
                <p className="text-gray-600 text-sm dark:text-gray-100">
                  Choose from our wide range of premium cars, select the pickup
                  and return dates and locations that suit you best.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative md:left-20 flex items-start gap-4 bg-white dark:bg-[#323538] p-4 rounded-xl">
              <FiCalendar size={24} className="mt-1 text-gray-700 dark:text-white" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">Book and confirm</h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  Book your desired car with just a few clicks and receive an
                  instant confirmation via email or SMS.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:left-20  flex items-start gap-4 bg-white dark:bg-[#323538] p-4 rounded-xl">
              <FiSmile size={24} className="mt-1 text-gray-700 dark:text-white" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">Enjoy your ride</h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  Pick up your car at the designated location and enjoy your
                  premium driving experience with our top-quality service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className=" rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1736310307296-4affd9759d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Car"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
