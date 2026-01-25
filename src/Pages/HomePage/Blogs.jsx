import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock, FaComment, FaHeart, FaShare } from 'react-icons/fa';

export default function Blogs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  const featuredBlog = {
    id: 1,
    title: "The Ultimate Guide to Road Trip Planning in 2026",
    excerpt: "Discover the best tips and tricks for planning an unforgettable road trip. From route planning to packing essentials, we've got you covered for your next adventure.",
    image: "https://i.pinimg.com/736x/44/ba/74/44ba74a43afe808bae9733160af344f8.jpg",
    category: "Travel Tips",
    author: "Sarah Johnson",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    comments: 45,
    likes: 234
  };

  const blogs = [
    {
      id: 2,
      title: "Top 10 Family-Friendly Destinations for Summer",
      excerpt: "Planning a family vacation? Check out these amazing destinations that offer fun activities for all ages.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop",
      category: "Destinations",
      author: "Michael Chen",
      date: "Jan 18, 2026",
      readTime: "5 min read",
      comments: 28,
      likes: 156
    },
    {
      id: 3,
      title: "How to Save Money on Your Next Car Rental",
      excerpt: "Smart tips and strategies to get the best deals on car rentals without compromising on quality or service.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop",
      category: "Money Saving",
      author: "Emily Rodriguez",
      date: "Jan 15, 2026",
      readTime: "6 min read",
      comments: 62,
      likes: 189
    },
    {
      id: 4,
      title: "Essential Safety Tips for First-Time Renters",
      excerpt: "Your safety is our priority. Learn the important safety checks and tips every first-time car renter should know.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
      category: "Safety",
      author: "David Wilson",
      date: "Jan 12, 2026",
      readTime: "7 min read",
      comments: 34,
      likes: 142
    },
    {
      id: 5,
      title: "Electric vs Gas: Which Car Should You Rent?",
      excerpt: "Exploring the pros and cons of electric and gas vehicles to help you make the best choice for your journey.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
      category: "Vehicle Guide",
      author: "Lisa Anderson",
      date: "Jan 10, 2026",
      readTime: "9 min read",
      comments: 51,
      likes: 201
    },
    {
      id: 6,
      title: "Best Scenic Routes for Your Next Adventure",
      excerpt: "Discover breathtaking routes that will make your journey as memorable as your destination.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      category: "Travel Tips",
      author: "James Park",
      date: "Jan 8, 2026",
      readTime: "10 min read",
      comments: 78,
      likes: 312
    }
  ];

  const categories = ["All", "Travel Tips", "Destinations", "Money Saving", "Safety", "Vehicle Guide"];
  const [activeCategory, setActiveCategory] = useState("All");

  const handleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(postId => postId !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-[#232425] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#136b7a] bg-opacity-10 dark:bg-opacity-20 rounded-full mb-4">
            <span className="text-[#136b7a] font-semibold text-sm">OUR BLOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Stories & Tips
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get inspired with travel guides, rental tips, and insider knowledge from our experts
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-16 relative group overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-[#136b7a] text-white rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                  {featuredBlog.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
                {featuredBlog.title}
              </h3>

              <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span className="text-sm">{featuredBlog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span className="text-sm">{featuredBlog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span className="text-sm">{featuredBlog.readTime}</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 bg-white text-[#136b7a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Read Full Article
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#136b7a] text-white shadow-lg transform scale-105'
                  : 'bg-[#F3F4F6] dark:bg-[#2a2b2c] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1a1b1c]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white dark:bg-[#2a2b2c] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === blog.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#136b7a] text-white rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredCard === blog.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <button
                      onClick={() => handleLike(blog.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
                        likedPosts.includes(blog.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 text-gray-800 hover:bg-white'
                      }`}
                    >
                      <FaHeart className="w-4 h-4" />
                      <span className="text-sm">{blog.likes + (likedPosts.includes(blog.id) ? 1 : 0)}</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-800 py-2 rounded-lg font-medium transition-colors">
                      <FaShare className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-[#136b7a] dark:hover:text-[#136b7a] transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#136b7a] to-[#0d4f5a] rounded-full flex items-center justify-center text-white font-semibold">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{blog.author}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{blog.date}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment className="w-3 h-3" />
                      {blog.comments}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-[#136b7a] font-medium hover:gap-2 transition-all">
                    Read More
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Load More Articles
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h3>
            <p className="text-gray-100 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel tips, rental guides, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="bg-white text-[#136b7a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}