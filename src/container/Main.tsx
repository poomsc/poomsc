import React from "react";

const Main: React.FC = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
  return (
    <main className="h-full overflow-y-auto py-2">
      <div className="container grid mx-auto lg:px-6">{children}</div>
    </main>
  );
};

export default Main;
