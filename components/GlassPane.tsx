interface IGlassPane {
  children: any;
  className?: string;
}
const GlassPane = ({ children, className }: IGlassPane): JSX.Element => {
  return (
    <div
      className={`glass rounded-2xl border-solid border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};
export default GlassPane;
