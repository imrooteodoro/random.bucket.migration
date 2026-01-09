'use client';

export function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {children}
    </div>
  );
}
