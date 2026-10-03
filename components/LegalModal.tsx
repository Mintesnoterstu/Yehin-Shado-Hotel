"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { legal } from "@/data/legal";

type LegalModalProps = {
  kind: "privacy" | "terms";
};

export function LegalModal({ kind }: LegalModalProps) {
  const copy = kind === "privacy" ? legal.privacy : legal.terms;

  return (
    <Dialog>
      <DialogTrigger className="text-ivory/60 hover:text-sand">
        {kind === "privacy" ? "Privacy" : "Terms"}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.updated}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {copy.body.map((paragraph) => (
            <p key={paragraph} className="text-sm text-moss">
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
