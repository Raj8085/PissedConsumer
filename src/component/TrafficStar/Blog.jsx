import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "Top Ad Formats for 2025",
      description: "Discover the best ad formats to boost your campaigns in the coming year.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "/blog/top-ad-formats-2025"
    },
    {
      title: "How AI is Changing Programmatic Advertising",
      description: "Learn how AI is transforming the way advertisers target and optimize ads.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "/blog/how-ai-is-changing-programmatic-advertising"
    },
    {
      title: "Fraud Prevention in Digital Ads",
      description: "Explore strategies for protecting your campaigns from fraud in the digital world.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "/blog/fraud-prevention-in-digital-ads"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">Insights and Updates from TrafficStars</h1>
        <p className="text-lg text-gray-700 mt-4">
          Stay updated with the latest trends, tips, and insights in the world of digital advertising.
        </p>
      </header>

      {/* Blog Posts Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Link to={post.link} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;