
const IconBox = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center justify-center gap-3 border-l border-white/10 px-2 py-4 last:border-l-0">
    <Icon className="text-[2rem] text-[#c6d4a5]" />
    <span className="text-[1.25rem] text-white">{value}</span>
    <span className="text-[1.1rem] text-white/45">{label}</span>
  </div>
);

export default IconBox;
