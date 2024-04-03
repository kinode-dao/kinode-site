import './FancyMenuDots.scss'

interface FancyMenuDotsProps {
  size: number
  className?: string
}

export const FancyMenuDots: React.FC<FancyMenuDotsProps> = ({ size, className }) => {
  const radius = size / 3
  return <svg
    width={size * 3 / 2}
    height={size}
    viewBox={`0 0 ${size} ${size * 3 / 2}`}
    className={className}
  >
    <rect
      className="circle circle1"
      x={size * 2 / 3}
      y="2px"
      width={size / 2}
      height={size / 2}
      rx={radius}
      ry={radius}
    />
    <rect
      className="circle circle2"
      x={0}
      y={size * 3 / 2 - radius * 2}
      width={size / 2}
      height={size / 2}
      rx={radius}
      ry={radius}
    />
  </svg>;
};

