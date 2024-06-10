import IconRestart from "../assets/icon-refresh.svg";

export default function ButtonRestart({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Restart"
      onClick={onClick}
      className="mt-1"
    >
      <img src={IconRestart} alt="Restart" />
    </button>
  );
}
