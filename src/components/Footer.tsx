export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} Nassie Bukunmi. All rights
          reserved.
        </p>

        <p>
          Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}