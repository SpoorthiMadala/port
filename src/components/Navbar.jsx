import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      bg-glass backdrop-blur-xl border border-white/10
      rounded-full px-6 py-3 flex gap-6 items-center">

      <span className="font-semibold">Spoorthi.dev</span>

      <div className="hidden md:flex gap-4 text-sm">
        {["about","skills","projects","contact"].map(l => (
          <a key={l} href={`#${l}`} className="hover:text-neon">
            {l.toUpperCase()}
          </a>
        ))}
      </div>

      <ThemeToggle theme={theme} setTheme={setTheme} />
    </nav>
  );
}
