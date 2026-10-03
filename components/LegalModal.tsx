"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/components/LanguageProvider";

type LegalModalProps = {
  kind: "privacy" | "terms";
};

export function LegalModal({ kind }: LegalModalProps) {
  const { t } = useLanguage();
  const title = kind === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle;
  const body = kind === "privacy" ? t.legal.privacy : t.legal.terms;

  return (
    <Dialog>
      <DialogTrigger className="text-ivory/60 hover:text-sand">
        {kind === "privacy" ? t.footer.privacy : t.footer.terms}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{t.legal.updated}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {body.map((paragraph) => (
            <p key={paragraph} className="text-sm text-moss">
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
