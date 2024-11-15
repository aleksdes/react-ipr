export const Icon: React.FC<{ name: string; size?: string | number }> = ({
  name,
  size = 22,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ width: size, height: size }}
  >
    <use xlinkHref={`/spritemap.svg#${name}`} />
  </svg>
);
