export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm">
        
<div className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <img src="/connectly-logo.jpg.jpeg"  alt="Connectly Logo" className="w-8 h-auto object-contain" />
          Connectly
          </div>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
          <a href="/register" className="bg-blue-600 text-white py-2 px-5 rounded-full hover:bg-blue-700 transition">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Connect. Share. Explore.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          The most intuitive platform for social creators, students, and communities. Built with care.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a href="/register" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Create Account
          </a>
          <a href="/login" className="border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-50 transition">
            Login
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Connectly?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">📸 Visual Posts</h3>
              <p className="text-gray-600">Upload images, reels, or quotes. A clean and modern feed awaits.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">💬 Real-Time Chats</h3>
              <p className="text-gray-600">Instant messaging, DMs, and group chats — all streamlined for you.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">📈 Explore</h3>
              <p className="text-gray-600">Discover trending content, hashtags, and rising creators daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <p className="font-semibold text-gray-800 mb-1">@anu_dev</p>
              <p className="text-gray-600">“Simple, beautiful, and fast. Feels like Twitter and Instagram combined.”</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <p className="font-semibold text-gray-800 mb-1">@rahul_uiux</p>
              <p className="text-gray-600">“The UI is so smooth. I use Connectly every day to share my designs!”</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Ready to Connect?</h2>
        <p className="max-w-lg mx-auto text-gray-700 mb-8">
          Your network, stories, and moments — all in one seamless experience. Join now and start sharing.
        </p>
        <a
          href="/register"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition"
        >
          Join Connectly
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-600 px-6 py-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
    
    {/* Left: Logo + Info */}
    <div className="md:w-1/3 space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <span className="bg-blue-100 p-2 rounded-full">💬</span>
        Connectly
      </div>
      <p className="text-gray-500">
        Socializing made simple. Join creators, friends, and communities.
      </p>
      <div className="text-gray-500 space-y-1">
        <p><strong>Address:</strong><br />123 Creator Street, Bengaluru, IN 560001</p>
        <p><strong>Email:</strong> <a href="mailto:support@connectly.app" className="text-blue-600 hover:underline">support@connectly.app</a></p>
      </div>
    </div>

    {/* Right: Link Groups */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
      
      {/* Product */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
        <ul className="space-y-2">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#" className="hover:text-blue-600">Explore</a></li>
          <li><a href="#" className="hover:text-blue-600">Messaging</a></li>
          <li><a href="#" className="hover:text-blue-600">Reels</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="hover:text-blue-600">Press</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
          <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-600">Cookies</a></li>
          <li><a href="#" className="hover:text-blue-600">Security</a></li>
        </ul>
      </div>

    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-12 border-t pt-6 text-center text-xs text-gray-400">
    &copy; {new Date().getFullYear()} Connectly. All rights reserved. Developed by Divya.
  </div>
</footer>

    </main>
  );
}