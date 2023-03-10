export default function HomeLoading() {
  return (
    <div className="container flex flex-col flex-grow items-center m-auto h-screen">
      <article className="w-full mt-20 flex flex-col flex-grow">
        <div className="flex-row grid grid-cols-5 gap-4 justify-between">
          <div className="aspect-square rounded-lg bg-slate-300 animate-pulse" />
          <div className="aspect-square rounded-lg bg-slate-300 animate-pulse" />
          <div className="aspect-square rounded-lg bg-slate-300 animate-pulse" />
          <div className="aspect-square rounded-lg bg-slate-300 animate-pulse" />
          <div className="aspect-square rounded-lg bg-slate-300 animate-pulse" />
        </div>
      </article>
    </div>
  );
}
