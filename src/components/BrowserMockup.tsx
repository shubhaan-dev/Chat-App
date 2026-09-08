type BrowserMockupProps = {
  title: string;
};

function BrowserMockup({ title }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition hover:-translate-y-2">

      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500"></div>

        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

        <div className="h-3 w-3 rounded-full bg-green-500"></div>

      </div>

      {/* Screenshot Placeholder */}

      <div className="flex h-64 items-center justify-center text-xl font-semibold text-gray-400">
        {title}
      </div>

    </div>
  );
}

export default BrowserMockup;