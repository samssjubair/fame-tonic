interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto px-4 md:px-0 md:max-w-[71.428571%]">{children}</div>
  );
};

export default Container;