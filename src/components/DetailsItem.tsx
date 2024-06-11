interface DetailsItemProps {
  label: string;
  value: string | number;
}

export default function DetailsItem({ label, value }: DetailsItemProps) {
  return (
    <div className="w-full flex md:flex-col items-center justify-between md:items-start">
      <h6>{label}</h6>
      <h2>{value}</h2>
    </div>
  );
}
