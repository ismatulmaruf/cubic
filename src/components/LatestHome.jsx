import React from "react";

const BlogSection = () => {
  // Array of blog posts
  const blogs = [
    {
      id: 1,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Tea-garden-sylhet.jpg?w=686&ssl=1",
      date: "October 15, 2023",
      title: "Tea Gardens in Sylhet: A Must-Visit for Nature Lovers",
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Sajek-Vally.jpg?w=318&ssl=1",
      date: "October 15, 2023",
      title: "Sajek Valley: A Paradise of Clouds and Hills",
    },
    {
      id: 3,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Sundarbans-Royal-Bengal-Tiger.jpg?w=1200&ssl=1",
      date: "October 15, 2023",
      title: "Sundarbans: A Wild Kingdom of Mangroves and Tigers",
    },
    {
      id: 4,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Chandpur.jpg?w=615&ssl=1",
      date: "October 15, 2023",
      title: "Chandpur Visit: A Journey to the Land of Hilsa",
    },
    {
      id: 5,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/rangamati-shuvolong-jhorna.jpg?w=770&ssl=1",
      date: "October 15, 2023",
      title: "Rangamati’s Shuvolong Waterfall: A Hidden Gem in Bangladesh",
    },
    {
      id: 6,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Shohag-Palli-Gazipur.jpg?w=1024&ssl=1",
      date: "October 15, 2023",
      title: "Number of tourist attractions in Gazipur",
    },
    {
      id: 7,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Cubic-Photo-1.jpg?resize=800%2C537&ssl=1",
      date: "October 15, 2023",
      title: "How to get a job abroad",
    },
    {
      id: 8,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Visa.jpg?resize=1248%2C1123&ssl=1",
      date: "October 15, 2023",
      title: "What is visa processing?",
    },
    {
      id: 9,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Study-Visa.jpg?resize=1120%2C736&ssl=1",
      date: "October 15, 2023",
      title: "When to go to a student visa consultant?",
    },
    {
      id: 10,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Maldives.jpeg?resize=1242%2C750&ssl=1",
      date: "October 15, 2023",
      title: "How to choose a travel agent",
    },
    {
      id: 11,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Coxsbazar-Sea-Beach.jpg?resize=1200%2C630&ssl=1",
      date: "October 15, 2023",
      title: "Cox’s Bazar Sea Beach: A Paradise for Beach Lovers",
    },
    {
      id: 12,
      image:
        "https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Kuakata-1.jpg?resize=533%2C400&ssl=1",
      date: "October 15, 2023",
      title: "Kuakata Tour Package: A Guide to Planning Your Trip",
    },
  ];

  return (
    <div
      className="p-12 lg:p-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(6,147,227,0.5) 23%, rgba(155,81,224,0.5) 90%)",
      }}
    >
      {/* Section Heading and Subheading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Latest From Cubic Overseas Blog
        </h2>
        <p className="text-lg text-white">Read and learn about tourism</p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
