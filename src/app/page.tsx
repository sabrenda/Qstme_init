import { TestZustand } from '@/components';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-center gap-8">
        <TestZustand />
      </main>
    </div>
  );
}
