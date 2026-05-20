export default function Divider({
  color = "#C9A84C",
  width = 130,
  center = true,
}: {
  color?: string;
  width?: number;
  center?: boolean;
}) {
  return (
    <svg width={width} height={18} viewBox={`0 0 ${width} 18`} fill="none"
      style={{ display: "block", margin: center ? "0 auto" : undefined }}>
      <line x1="0"           y1="9" x2={width/2-15} y2="9" stroke={color} strokeWidth=".8" opacity=".45"/>
      <circle cx={width/2-10} cy="9" r="1.5" fill={color} opacity=".5"/>
      <circle cx={width/2}    cy="9" r="3.5" fill={color} opacity=".85"/>
      <circle cx={width/2+10} cy="9" r="1.5" fill={color} opacity=".5"/>
      <line x1={width/2+15}  y1="9" x2={width} y2="9" stroke={color} strokeWidth=".8" opacity=".45"/>
    </svg>
  );
}
