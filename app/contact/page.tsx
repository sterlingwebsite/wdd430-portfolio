export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h1>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Have a question or want to work together? Drop a message below.
      </p>
      
      <form className="flex flex-col gap-6 bg-white dark:bg-gray-800/40 p-8 rounded-xl shadow-xs border border-gray-200 dark:border-gray-700/60">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name" 
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:bg-white focus:dark:bg-gray-950 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 outline-hidden transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="your.email@byui.edu" 
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:bg-white focus:dark:bg-gray-950 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 outline-hidden transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Message
          </label>
          <textarea 
            id="message" 
            placeholder="Write your message here..." 
            rows={4} 
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:bg-white focus:dark:bg-gray-950 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 outline-hidden transition-all resize-y"
          ></textarea>
        </div>

        <button 
          type="button" 
          className="self-start px-6 py-3 bg-blue-800 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer text-sm"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
