import photo from "../assets/profile-photo.jpg";

export function Avatar({ size = 200 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full p-[3px] bg-gradient-to-br from-[var(--neon)] via-fuchsia-400 to-[var(--neon-cyan)] neon-glow"
      style={{ width: size, height: size }}
    >
      <div className="h-full w-full rounded-full overflow-hidden relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f]">
        <img
          src={photo}
          alt="MD. Sheam Nasemur Rahman"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
      </div>
      <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-emerald-400 ring-4 ring-background animate-pulse" />
    </div>
  );
}
