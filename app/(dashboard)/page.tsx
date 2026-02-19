export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Dashboard
      </h1>

      <p className="text-muted-foreground">
        Welcome back! Here’s an overview of your application.
      </p>

      {/* Example content placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-32 rounded-xl border bg-card" />
        <div className="h-32 rounded-xl border bg-card" />
        <div className="h-32 rounded-xl border bg-card" />
      </div>
    </div>
  );
}
