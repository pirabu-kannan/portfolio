interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-400 font-mono text-sm">// {subtitle}</p>}
      <div className="mt-4 w-24 h-1 bg-electric-cyan/50" />
    </div>
  );
};

export default SectionHeader;
