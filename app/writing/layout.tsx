export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-[#f5f5f7] pb-28 dark:bg-[#0b0b0d]">
      {children}
    </main>
  );
}
