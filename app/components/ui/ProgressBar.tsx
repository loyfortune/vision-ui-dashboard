
type ProgressBarProps = {
  value: number;
  max?: number;
};

export default function ProgressBar({
  value,
  max = 100,
}: ProgressBarProps) {
  const percentage = Math.min(
    100,
    Math.max(0, (value / max) * 100)
  );

  return (
    <div
      className="h-0.75 w-full overflow-hidden rounded-full
      bg-[#2D2E5F]"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className="h-full rounded-full bg-[#0075FF]
         transition-all"
        style={{ width: `${percentage}%` }}/>
    </div>
  );
}