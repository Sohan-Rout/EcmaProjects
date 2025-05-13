import Timeline from '../../components/Timeline';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-black py-4 px-6 flex justify-center">
        <h1 className="text-white text-5xl font-semibold text-center">
          <span>Know more </span><span className="text-amber-500">about Us</span>
        </h1>
      </nav>
      <Timeline />
    </main>
  );
}
