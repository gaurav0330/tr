export default function OverviewCard({ icon, label, value }) {
    return (
      <div className="bg-card p-6 rounded-xl shadow-md flex items-center gap-5 hover:shadow-lg transition-shadow">
        {icon}
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
        </div>
      </div>
    );
  }
  