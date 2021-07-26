import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full bg-indigo-200">
      <head></head>
      <main className="mb-auto">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
