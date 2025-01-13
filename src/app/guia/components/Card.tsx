import { JSX } from "react";

interface CardProps {
  title: string;
  description: string;
  button?: JSX.Element;
}

export const Card = ({ title, description, button }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 items-start bg-secondary p-4 rounded-lg border border-solid border-gray-600">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p
        className="text-gray-200"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {button}
    </div>
  );
};
