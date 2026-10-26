const FooterTitle = ({ children }) => {
  return (
    <h3 className="relative mb-[2.2rem] inline-block text-[1.6rem] font-medium">
      {children}

      <span className="absolute -bottom-[0.8rem] right-0 h-px w-[3rem] bg-[#b5c9a9]" />
    </h3>
  );
};
export default FooterTitle