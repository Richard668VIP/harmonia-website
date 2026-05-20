export default function StarRow({ n = 5, size = 13 }: { n?: number; size?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 13 13" fill="#C9A84C">
          <polygon points="6.5,1 8.1,4.8 12.2,5.2 9.3,7.8 10.1,11.9 6.5,9.8 2.9,11.9 3.7,7.8 0.8,5.2 4.9,4.8" />
        </svg>
      ))}
    </div>
  );
}
