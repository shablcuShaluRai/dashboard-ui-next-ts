import clsx from "clsx";

interface ICard {
  className?: string;
  children: any;
}
const Card = ({ className, children }: ICard): JSX.Element => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
