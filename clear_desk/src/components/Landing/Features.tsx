import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Send, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Smart Routing",
    icon: <Lightbulb className="w-6 h-6" />,
    desc: "Auto-assign complaints to the right department instantly.",
  },
  {
    title: "Real-time Updates",
    icon: <Send className="w-6 h-6" />,
    desc: "Track complaint progress in real time with email notifications.",
  },
  {
    title: "Secure by Design",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Built with strong access controls and data validation.",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((feature, idx) => (
        <Card key={idx} className="text-center p-6 shadow-lg">
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 text-primary">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
