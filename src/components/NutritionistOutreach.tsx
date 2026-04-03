import { Search } from "lucide-react";
import outreachImg from "@/assets/outreach-nutritionists.png";

const NutritionistOutreach = () => {
  return (
    <div className="mt-6 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-5 h-5 text-primary" />
        <h4 className="text-base font-semibold text-foreground">
          Searching for Nutritionists
        </h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        We reached out to multiple nutritionists and dietologists via Instagram, inviting them to collaborate with our project and share their expertise with students.
      </p>
      <div className="rounded-xl overflow-hidden border border-border">
        <img
          src={outreachImg}
          alt="Instagram messages to nutritionists — outreach conversations with doctor_sabitovaleila, dietolog_muhiddin, aitymzhakupov, aiman_dietolog, and nutriciolog_kazhenova"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default NutritionistOutreach;
