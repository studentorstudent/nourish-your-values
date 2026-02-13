import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground italic text-sm mb-6">
          "Sustainable nutrition begins where intention meets structure"
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          © 2026 GoodFood SLC Project. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
