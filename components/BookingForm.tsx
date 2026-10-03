"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import {
  bookingContactSchema,
  bookingSpaSchema,
  bookingStaySchema,
  type BookingContactInput,
  type BookingSpaInput,
  type BookingStayInput,
} from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import type { Copy } from "@/data/copy";

type Step = 1 | 2 | 3;

export function BookingForm() {
  const { t } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [stay, setStay] = useState<BookingStayInput | null>(null);
  const [spa, setSpa] = useState<BookingSpaInput | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-forest-light p-8 text-olive">
        <CheckCircle2 className="h-10 w-10" />
        <h3 className="mt-4 text-olive">{t.form.inquirySent}</h3>
        <p className="mt-2 text-moss">{t.form.bookingThanks}</p>
      </div>
    );
  }

  return (
    <div>
      <ol className="mb-8 flex items-center gap-3" aria-label={t.form.steps}>
        {[1, 2, 3].map((value) => (
          <li
            key={value}
            className={cn("h-2.5 w-2.5 rounded-full", step >= value ? "bg-sand" : "bg-sage")}
          >
            <span className="sr-only">
              {value}
              {step === value ? `, ${t.form.current}` : ""}
            </span>
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <StayStep
          t={t}
          defaultValues={stay ?? undefined}
          onNext={(values) => {
            setStay(values);
            setStep(2);
          }}
        />
      ) : null}
      {step === 2 ? (
        <SpaStep
          t={t}
          defaultValues={spa ?? undefined}
          onBack={() => setStep(1)}
          onNext={(values) => {
            setSpa(values);
            setStep(3);
          }}
        />
      ) : null}
      {step === 3 && stay && spa ? (
        <ContactStep
          t={t}
          stay={stay}
          spa={spa}
          error={error}
          onBack={() => setStep(2)}
          onSuccess={() => setStatus("success")}
          onError={(message) => {
            setStatus("error");
            setError(message);
          }}
        />
      ) : null}
    </div>
  );
}

function StayStep({
  t,
  defaultValues,
  onNext,
}: {
  t: Copy;
  defaultValues?: BookingStayInput;
  onNext: (values: BookingStayInput) => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingStayInput>({
    resolver: zodResolver(bookingStaySchema),
    defaultValues: defaultValues ?? { guests: 1, roomType: "standard" },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.form.checkIn} error={errors.checkIn?.message}>
          <Input type="date" {...register("checkIn")} />
        </Field>
        <Field label={t.form.checkOut} error={errors.checkOut?.message}>
          <Input type="date" {...register("checkOut")} />
        </Field>
      </div>
      <Field label={t.form.guests} error={errors.guests?.message}>
        <Input type="number" min={1} max={6} {...register("guests")} />
      </Field>
      <Field label={t.form.roomType} error={errors.roomType?.message}>
        <Select
          value={watch("roomType")}
          onValueChange={(value: "standard" | "double") => setValue("roomType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder={t.form.chooseRoom} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">{t.rooms.standardTitle}</SelectItem>
            <SelectItem value="double">{t.rooms.doubleTitle}</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Button type="submit">{t.form.continue}</Button>
    </form>
  );
}

function SpaStep({
  t,
  defaultValues,
  onNext,
  onBack,
}: {
  t: Copy;
  defaultValues?: BookingSpaInput;
  onNext: (values: BookingSpaInput) => void;
  onBack: () => void;
}) {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingSpaInput>({
    resolver: zodResolver(bookingSpaSchema),
    defaultValues: defaultValues ?? {
      moroccanBath: false,
      massage: false,
      sauna: false,
      steam: false,
    },
  });

  const massage = watch("massage");

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <p className="text-sm text-fog">{t.form.spaOptional}</p>
      <Toggle
        label={t.form.moroccanBath}
        checked={watch("moroccanBath")}
        onChange={(checked) => setValue("moroccanBath", checked)}
      />
      <Toggle
        label={t.form.massage}
        checked={massage}
        onChange={(checked) => {
          setValue("massage", checked);
          if (!checked) setValue("massageType", undefined);
        }}
      />
      {massage ? (
        <Field label={t.form.massageType} error={errors.massageType?.message}>
          <Select
            value={watch("massageType")}
            onValueChange={(value: "deep-tissue" | "swedish" | "therapeutic") =>
              setValue("massageType", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t.form.chooseMassage} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deep-tissue">{t.spa.massages[0].title}</SelectItem>
              <SelectItem value="swedish">{t.spa.massages[1].title}</SelectItem>
              <SelectItem value="therapeutic">{t.spa.massages[2].title}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      ) : null}
      <Toggle label={t.form.sauna} checked={watch("sauna")} onChange={(checked) => setValue("sauna", checked)} />
      <Toggle label={t.form.steam} checked={watch("steam")} onChange={(checked) => setValue("steam", checked)} />
      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          {t.form.back}
        </Button>
        <Button type="submit">{t.form.continue}</Button>
      </div>
    </form>
  );
}

function ContactStep({
  t,
  stay,
  spa,
  error,
  onBack,
  onSuccess,
  onError,
}: {
  t: Copy;
  stay: BookingStayInput;
  spa: BookingSpaInput;
  error: string | null;
  onBack: () => void;
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingContactInput>({
    resolver: zodResolver(bookingContactSchema),
  });

  async function onSubmit(values: BookingContactInput) {
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...stay, ...spa, ...values }),
      });
      const payload = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? t.form.bookingFail);
      }
      onSuccess();
    } catch {
      onError(t.form.bookingFail);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
      <Field label={t.form.notes} error={errors.notes?.message}>
        <Textarea {...register("notes")} placeholder={t.form.notesPlaceholder} />
      </Field>
      {error ? <p className="text-sm text-clay">{error}</p> : null}
      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          {t.form.back}
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.form.sending : t.form.sendBooking}
        </Button>
      </div>
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

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-sage bg-surface px-4 py-3">
      <Checkbox checked={checked} onCheckedChange={(value) => onChange(value === true)} />
      <span className="text-sm text-ink">{label}</span>
    </label>
  );
}
