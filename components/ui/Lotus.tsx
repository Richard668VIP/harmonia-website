export default function Lotus({
  size = 32,
  color = "#C9A84C",
}: {
  size?: number;
  color?: string;
}) {
  const cx = 17, cy = 21;
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      {([[-68, .5], [-36, .75], [0, .92], [36, .75], [68, .5]] as [number,number][]).map(([a, op]) => (
        <ellipse key={a} cx={cx} cy={cy - 8*.28} rx={4.5} ry={8}
          fill={color} opacity={op} transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy - 8*.14} r={8 * .22} fill={color} opacity={.92} />
      <circle cx={cx} cy={cy - 8*.14} r={8 * .09} fill="white"  opacity={.28} />
    </svg>
  );
}
