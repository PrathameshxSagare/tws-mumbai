const Loading = () => {
  return (
    <main className="flex min-h-screen w-full items-center bg-bg px-4 py-16 font-general-sans md:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 border-t border-black/15 pt-10 md:pt-14">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">
          Loading
        </p>
        <div className="flex items-end gap-3">
          <span className="h-2 w-16 animate-pulse rounded-full bg-black" />
          <span className="h-2 w-10 animate-pulse rounded-full bg-black/45 [animation-delay:150ms]" />
          <span className="h-2 w-6 animate-pulse rounded-full bg-black/20 [animation-delay:300ms]" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
