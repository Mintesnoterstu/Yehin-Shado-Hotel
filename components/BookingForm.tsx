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

type Step = 1 | 2 | 3;

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [stay, setStay] = useState<BookingStayInput | null>(null);
  const [spa, setSpa] = useState<BookingSpaInput | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-forest-light p-8 text-olive">
        <CheckCircle2 className="h-10 w-10" />
        <h3 className="mt-4 text-olive">Inquiry sent</h3>
        <p className="mt-2 text-moss">
          We have received your stay request. Our team will confirm availability by email or phone.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ol className="mb-8 flex items-center gap-3" aria-label="Booking steps">
        {[1, 2, 3].map((value) => (
          <li
            key={value}
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              step >= value ? "bg-sand" : "bg-sage",
            )}
          >
            <span className="sr-only">
              Step {value}
              {step === value ? ", current" : ""}
            </span>
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <StayStep
          defaultValues={stay ?? undefined}
          onNext={(values) => {
            setStay(values);
            setStep(2);
          }}
        />
      ) : null}
      {step === 2 ? (
        <SpaStep
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
  defaultValues,
  onNext,
}: {
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
        <Field label="Check-in" error={errors.checkIn?.message}>
          <Input type="date" {...register("checkIn")} />
        </Field>
        <Field label="Check-out" error={errors.checkOut?.message}>
          <Input type="date" {...register("checkOut")} />
        </Field>
      </div>
      <Field label="Guests" error={errors.guests?.message}>
        <Input type="number" min={1} max={6} {...register("guests")} />
      </Field>
      <Field label="Room type" error={errors.roomType?.message}>
        <Select
          value={watch("roomType")}
          onValueChange={(value: "standard" | "double") => setValue("roomType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a room" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard Bedroom</SelectItem>
            <SelectItem value="double">Double Bedroom</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Button type="submit">Continue</Button>
    </form>
  );
}

function SpaStep({
  defaultValues,
  onNext,
  onBack,
}: {
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
      <p className="text-sm text-fog">Optional — add spa time to your stay inquiry.</p>
      <Toggle
        label="Moroccan bath"
        checked={watch("moroccanBath")}
        onChange={(checked) => setValue("moroccanBath", checked)}
      />
      <Toggle
        label="Massage"
        checked={massage}
        onChange={(checked) => {
          setValue("massage", checked);
          if (!checked) setValue("massageType", undefined);
        }}
      />
      {massage ? (
        <Field label="Massage type" error={errors.massageType?.message}>
          <Select
            value={watch("massageType")}
            onValueChange={(value: "deep-tissue" | "swedish" | "therapeutic") =>
              setValue("massageType", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a massage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deep-tissue">Deep Tissue</SelectItem>
              <SelectItem value="swedish">Swedish</SelectItem>
              <SelectItem value="therapeutic">Targeted Therapeutic</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      ) : null}
      <Toggle label="Finnish sauna" checked={watch("sauna")} onChange={(checked) => setValue("sauna", checked)} />
      <Toggle label="Steam room" checked={watch("steam")} onChange={(checked) => setValue("steam", checked)} />
      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}

function ContactStep({
  stay,
  spa,
  error,
  onBack,
  onSuccess,
  onError,
}: {
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
        throw new Error(payload.message ?? "Unable to send booking inquiry.");
      }
      onSuccess();
    } catch {
      onError("We could not send this inquiry. Please call or message us on WhatsApp.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field label="Name" error={errors.name?.message}>
        <Input {...register("name")} autoComplete="name" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} autoComplete="tel" />
        </Field>
      </div>
      <Field label="Notes" error={errors.notes?.message}>
        <Textarea {...register("notes")} placeholder="Arrival time, preferences, or questions" />
      </Field>
      {error ? <p className="text-sm text-clay">{error}</p> : null}
      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send booking inquiry"}
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
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-sage bg-white px-4 py-3">
      <Checkbox checked={checked} onCheckedChange={(value) => onChange(value === true)} />
      <span className="text-sm text-ink">{label}</span>
    </label>
  );
}
