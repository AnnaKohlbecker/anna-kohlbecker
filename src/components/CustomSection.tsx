import React from "react";

interface CustomSectionProps {
  title?: string;
  children: React.ReactNode;
}

const CustomSection: React.FC<CustomSectionProps> = ({ title, children }) => {
  return (
    <section className="text-black container mx-auto py-0 mt-32 mb-0">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black">{title}</h2>
        </div>
      )}
      <div className="mx-auto">{children}</div>
    </section>
  );
};

export default CustomSection;
