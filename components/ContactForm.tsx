"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { createContactSchema, type ContactInput } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(createContactSchema(t.form.errors)),
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? t.form.sendFail);
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setError(t.form.sendFail);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-forest-light p-8 text-olive">
        <CheckCircle2 className="h-8 w-8" />
        <h3 className="mt-4 text-olive">{t.form.messageReceived}</h3>
        <p className="mt-2 text-moss">{t.form.thankYou}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label={t.form.name} error={errors.name?.message}>
        <Input {...register("name")} autoComplete="name" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.form.email} error={errors.email?.message}>
          <Input type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label={t.form.phone} error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} autoComplete="tel" />
        </Field>
      </div>
      <Field label={t.form.subject} error={errors.subject?.message}>
        <Input {...register("subject")} />
      </Field>
      <Field label={t.form.message} error={errors.message?.message}>
        <Textarea {...register("message")} />
      </Field>
      {error ? <p className="text-sm text-clay">{error}</p> : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.form.sending : t.form.sendInquiry}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-clay">{error}</p> : null}
    </div>
  );
}
