
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Extra details for mid-level projects
const midExtraDetails = {
  "E-commerce Landing Page": {
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    prerequisites: [
      "Basic HTML structure",
      "Familiarity with Tailwind CSS classes",
      "Basic JavaScript (DOM manipulation, event handling)"
    ],
    steps: [
      {
        label: "Setup HTML & Tailwind",
        code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>VIBE – E-commerce</title>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-white text-slate-800\">\n\n  <!-- Content will go here -->\n\n  <script>/* JS goes here */</script>\n</body>\n</html>`
      },
      {
        label: "Add a Sticky Navbar",
        code: `<nav class=\"flex items-center justify-between py-6 px-8 border-b sticky top-0 bg-white z-50\">\n  <div class=\"text-2xl font-bold\">VIBE</div>\n  <ul class=\"flex space-x-6\">\n    <li><a href=\"#\">Men</a></li>\n    <li><a href=\"#\">Women</a></li>\n    <li><a href=\"#\">Kids</a></li>\n    <li><a href=\"#\">Accessories</a></li>\n  </ul>\n  <div>🛒 <span id=\"cart-count\">0</span></div>\n</nav>`
      },
      {
        label: "Hero Section",
        code: `<section class=\"relative bg-cover bg-center h-[70vh] flex items-center\" \n  style=\"background-image: url('https://source.unsplash.com/1600x600/?running-shoes');\">\n  <div class=\"bg-black bg-opacity-50 text-white p-10 max-w-lg\">\n    <h1 class=\"text-4xl font-bold mb-4\">Unleash Your Vibe</h1>\n    <p class=\"mb-6\">Latest sneakers & sportswear for trendsetters.</p>\n    <a href=\"#\" class=\"bg-white text-black px-6 py-3 font-semibold\">Shop Now</a>\n  </div>\n</section>`
      },
      {
        label: "Categories",
        code: `<section class=\"py-16 px-8\">\n  <h2 class=\"text-3xl font-bold mb-8\">Shop by Category</h2>\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n    <div class=\"relative overflow-hidden\">\n      <img src=\"https://source.unsplash.com/600x600/?men-shoes\" class=\"w-full h-80 object-cover\">\n      <div class=\"absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1\">Men</div>\n    </div>\n    <!-- Add Women & Accessories the same way -->\n  </div>\n</section>`
      },
      {
        label: "Popular Products",
        code: `<section class=\"py-16 px-8\">\n  <h2 class=\"text-3xl font-bold mb-8\">Popular Right Now</h2>\n  <div class=\"grid grid-cols-1 md:grid-cols-4 gap-6\">\n    <div class=\"border p-4 text-center\">\n      <img src=\"https://source.unsplash.com/400x400/?sneakers\" class=\"w-full h-48 object-cover mb-4\">\n      <h3>Vibe Runner</h3>\n      <p>$120</p>\n      <button onclick=\"addToCart()\" class=\"bg-black text-white px-4 py-2\">Add to Cart</button>\n    </div>\n    <!-- Add more products similarly -->\n  </div>\n</section>`
      },
      {
        label: "Join Section",
        code: `<section class=\"bg-black text-white py-16 text-center px-8\">\n  <h2 class=\"text-3xl font-bold mb-4\">Join The Vibe Club</h2>\n  <p class=\"mb-6\">Sign up for exclusive drops, deals & updates.</p>\n  <input type=\"email\" placeholder=\"Your email...\" class=\"p-3 rounded text-black w-64\">\n  <button class=\"bg-white text-black px-6 py-3 ml-2\">Sign Up</button>\n</section>`
      },
      {
        label: "Footer & JS",
        code: `<footer class=\"text-center py-8 text-sm text-gray-500\">\n  © 2025 VIBE. All images from Unsplash.\n</footer>\n\n<script>\n  let count = 0;\n  function addToCart() {\n    count++;\n    document.getElementById(\"cart-count\").textContent = count;\n  }\n</script>`
      }
    ],
    whyUseful: [
      "Builds a multi-section landing page layout",
      "Practice using Tailwind CSS for rapid styling",
      "Learn to add interactivity with JavaScript (cart counter)",
      "Understand responsive layouts and sticky navigation",
      "Foundation for more advanced e-commerce projects"
    ],
    nextSteps: [
      "Make the cart persistent with localStorage",
      "Add product filtering and search",
      "Implement a real checkout flow",
      "Add animations and transitions for better UX",
      "Make the site fully responsive for all devices"
    ]
  }
};

const badgeColors = {
  "Mid Project": "bg-blue-100 text-blue-800",
  Beginner: "bg-yellow-100 text-yellow-800",
  Intermediate: "bg-green-100 text-green-800",
  Advanced: "bg-gray-100 text-gray-800",
};

const MidProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state || {};

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get extra details for this project if available
  const details = midExtraDetails[project?.title] || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-8 w-full max-w-2xl flex flex-col items-center">
        <div className="flex flex-row items-center w-full mb-4">
          {project?.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 object-cover rounded-xl shadow mr-6"/>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {project?.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColors["Mid Project"]}`}>
                Mid Project
              </span>
              {project?.duration && (
                <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800">
                  {project.duration}
                </span>
              )}
              {project?.difficulty && (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColors[project.difficulty] || "bg-gray-100 text-gray-800"}`}>
                  {project.difficulty}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              By TechLearn Solutions
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {details.tech && details.tech.length > 0 && (
          <div className="w-full mb-2">
            <div className="font-semibold text-gray-800 mb-1">Tech Stack:</div>
            <div className="flex flex-wrap gap-2">
              {details.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prerequisites */}
        {details.prerequisites && details.prerequisites.length > 0 && (
          <div className="w-full mb-2">
            <div className="font-semibold text-gray-800 mb-1">Prerequisites:</div>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {details.prerequisites.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps with Embedded Code */}
        {Array.isArray(details.steps) && details.steps.length > 0 && (
          <div className="w-full mb-4">
            <div className="font-semibold text-gray-800 mb-1">Steps:</div>
            <ol className="list-decimal ml-6">
              {details.steps.map((step, i) => (
                <li
                  key={i}
                  className="bg-blue-50 px-4 py-2 my-2 rounded text-gray-800"
                  style={{ marginLeft: '-1.5rem', width: 'calc(100% + 1.5rem)' }}>
                  {typeof step === 'string' ? (
                    <span>{step}</span>
                  ) : (
                    <>
                      <div className="font-semibold mb-2">{step.label}</div>
                      {step.code && (
                        <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-1">
                          <pre className="text-xs"><code>{step.code}</code></pre>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Why Useful Section */}
        {details.whyUseful && details.whyUseful.length > 0 && (
          <div className="w-full mb-4">
            <div className="font-semibold text-gray-800 mb-1">🧠 Why This is Useful</div>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {details.whyUseful.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Steps Section */}
        {details.nextSteps && details.nextSteps.length > 0 && (
          <div className="w-full mb-4">
            <div className="font-semibold text-gray-800 mb-1">🚀 Next Steps</div>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {details.nextSteps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="w-full flex justify-center mt-2">
          <a
            href={`https://wa.me/919000663666?text=Hi, I need help with project ${encodeURIComponent(project?.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg shadow transition">
            Consult Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MidProjectDetail;
