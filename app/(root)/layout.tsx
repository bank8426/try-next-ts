import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl">Layout Root</h1>
      {children}
    </div>
  );
};

export default Layout;
