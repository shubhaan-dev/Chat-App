type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;