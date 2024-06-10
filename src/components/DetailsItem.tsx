interface DetailsItemProps {
  label: string;
  value: string | number;
}

export default function DetailsItem({ label, value }: DetailsItemProps) {
  return (
    <div>
      <h6>{label}</h6>
      <h2>{value}</h2>
    </div>
  );
}
