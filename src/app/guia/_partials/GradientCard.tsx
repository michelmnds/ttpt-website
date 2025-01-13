interface GradientCardProps {
  children: React.ReactNode;
  title: string;
}

export const GradientCard = ({ title, children }: GradientCardProps) => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-[#00000059] to-transparent bg-opacity-30 rounded-lg py-6 px-10 flex flex-col align-center justify-center gap-2">
      <h2 className="text-[50px] font-bold mb-4 w-auto text-center text-primary">
        {title}
      </h2>
      {children}
    </div>
  );
};
