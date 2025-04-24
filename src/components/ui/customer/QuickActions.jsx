export default function QuickActions({ activeAction, setActiveAction, infoContent }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {[
            { key: "search", label: "Search New Vendors" },
            { key: "tokens", label: "Buy More Tokens" },
            { key: "contacts", label: "View All Contacts" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveAction(key)}
              className={`bg-accent text-white py-4 px-6 rounded-lg shadow-md font-semibold transition 
                hover:bg-accent/90 focus:outline-none focus:ring-4 focus:ring-accent/50
                ${activeAction === key ? "ring-4 ring-offset-2 ring-accent/70" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
  
        <div
          className="bg-card p-6 rounded-xl shadow-inner border border-accent/30 text-gray-700 dark:text-gray-300 max-w-3xl"
          style={{ minHeight: "4.5rem" }}
        >
          {activeAction ? (
            <p className="text-lg">{infoContent[activeAction]}</p>
          ) : (
            <p className="text-gray-500 italic">Click a button above to see more info.</p>
          )}
        </div>
      </div>
    );
  }
  