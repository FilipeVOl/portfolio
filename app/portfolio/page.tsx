import { Typography } from "@/components/ui/typography";
import Divider from "../components/Divider";

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl space-y-8">
        <Typography variant="h1">Portfolio<span className="text-secondary">.</span></Typography>
      </div>
    </main>
  );
}