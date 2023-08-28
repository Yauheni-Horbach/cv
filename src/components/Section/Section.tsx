import "./styles.css";

interface SectionProps {
  children: React.ReactNode;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id?: string;
}

export const Section = ({ children, onMouseMove, id }: SectionProps) => {
  return (
    <div className="section" onMouseMove={onMouseMove} id={id}>
      {children}
    </div>
  );
};
