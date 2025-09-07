const Footer = () => {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-cover bg-center py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img src="/coffee-logo.png" alt="Espresso Emporium" className="w-10 h-10" />
            <h2 className="text-xl font-bold text-gray-800">Espresso Emporium</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, 
            to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6 text-xl">
            <a href="#" className="hover:text-brown-600">🌐</a>
            <a href="#" className="hover:text-brown-600">🐦</a>
            <a href="#" className="hover:text-brown-600">📸</a>
            <a href="#" className="hover:text-brown-600">💼</a>
          </div>

          {/* Contact Info */}
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-700">📞 +88 0633 333 333</p>
          <p className="flex items-center gap-2 text-gray-700">✉️ info@gmail.com</p>
          <p className="flex items-center gap-2 text-gray-700">📍 72, Wall street, King Road, Dhaka</p>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea placeholder="Message" rows="3" className="textarea textarea-bordered w-full"></textarea>
            <button className="btn btn-outline w-40">Send Message</button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
