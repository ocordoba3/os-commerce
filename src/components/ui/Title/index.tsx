import React from "react";
interface Props {
  title: string;
  subtitle?: string;
}
const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-8 px-0 md:px-20 2xl:px-80">
      <h1 className="text-3xl font-bold capitalize">{title}</h1>
      {subtitle && <h3 className="text-sm opacity-60">{subtitle}</h3>}
    </div>
  );
};

export default Title;
