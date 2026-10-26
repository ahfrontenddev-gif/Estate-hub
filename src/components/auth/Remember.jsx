const Remember = ({ rememberMe, setRememberMe }) => {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-[#4c584e]">
      <input
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className="h-4 w-4 accent-[#10251c]"
      />
      مرا به خاطر بسپار
    </label>
  );
};

export default Remember;
