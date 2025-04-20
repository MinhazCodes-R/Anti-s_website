import { Scale, BadgeCheck, Building2, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Scale size={40} className="text-cyan-700" />,
    title: "LEGAL FILING & SEARCHING",
    description:
      "We can file litigation documents and conduct litigation services across Canada – Civil & Criminal.",
  },
  {
    icon: <BadgeCheck size={40} className="text-cyan-700" />,
    title: "CORPORATE REGISTRATION & FILING",
    description:
      "We can file Incorporations, Trade Names, updates to registrations and any other corporate documents. Executor Services, Legalizations, Notary.",
  },
  {
    icon: <Building2 size={40} className="text-cyan-700" />,
    title: "LAND TITLE SEARCH",
    description:
      "We can help you source any information pertaining to a property.",
  },
  {
    icon: <Globe2 size={40} className="text-cyan-700" />,
    title: "US/INTERNATIONAL SEARCHING SERVICES",
    description:
      "We have the ability to search destination access the world for information you may require.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {services.map((service, idx) => (
        <Card
          key={idx}
          className="text-center p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <CardContent className="flex flex-col items-center space-y-4">
            {service.icon}
            <h3 className="font-bold text-xl text-cyan-500 uppercase">
              {service.title}
            </h3>
            <p className="text-base text-gray-600">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
