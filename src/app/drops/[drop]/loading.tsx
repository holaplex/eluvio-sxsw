export default function DropPageLoading() {
  return (
    <main className="m-auto max-w-md">
      <div className="w-20 h-8 text-xl font-bold mb-2 bg-gray-100 animate-pulse" />
      <div className="w-80 relative rounded-lg aspect-square bg-gray-100 animate-pulse" />
      <div className="rounded-md w-full h-8 mt-4 bg-gray-100 animate-pulse" />
    </main>
  );
}
