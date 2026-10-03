import { z } from "zod";
import type { Copy } from "@/data/copy";

type FormErrors = Copy["form"]["errors"];

export function createContactSchema(errors: FormErrors) {
  return z.object({
    name: z.string().min(2, errors.name),
    email: z.string().email(errors.email),
    phone: z.string().min(7, errors.phone),
    subject: z.string().min(3, errors.subject),
    message: z.string().min(10, errors.message),
  });
}

export const contactSchema = createContactSchema({
  name: "Please share your name.",
  email: "A valid email is required.",
  phone: "Please include a phone number.",
  subject: "Please add a subject.",
  message: "A little more detail helps us respond well.",
  checkIn: "Check-in date is required.",
  checkOut: "Check-out date is required.",
  checkOutAfter: "Check-out must be after check-in.",
  massageType: "Please choose a massage type.",
});

export type ContactInput = z.infer<typeof contactSchema>;

export const massageTypeSchema = z.enum(["deep-tissue", "swedish", "therapeutic"]);

export function createBookingStaySchema(errors: FormErrors) {
  return z
    .object({
      checkIn: z.string().min(1, errors.checkIn),
      checkOut: z.string().min(1, errors.checkOut),
      guests: z.coerce.number().int().min(1).max(6),
      roomType: z.enum(["standard", "double"]),
    })
    .refine((value) => value.checkOut > value.checkIn, {
      message: errors.checkOutAfter,
      path: ["checkOut"],
    });
}

export const bookingStaySchema = createBookingStaySchema({
  name: "Please share your name.",
  email: "A valid email is required.",
  phone: "Please include a phone number.",
  subject: "Please add a subject.",
  message: "A little more detail helps us respond well.",
  checkIn: "Check-in date is required.",
  checkOut: "Check-out date is required.",
  checkOutAfter: "Check-out must be after check-in.",
  massageType: "Please choose a massage type.",
});

export function createBookingSpaSchema(errors: FormErrors) {
  return z
    .object({
      moroccanBath: z.boolean(),
      massage: z.boolean(),
      massageType: massageTypeSchema.optional(),
      sauna: z.boolean(),
      steam: z.boolean(),
    })
    .refine((value) => !value.massage || Boolean(value.massageType), {
      message: errors.massageType,
      path: ["massageType"],
    });
}

export const bookingSpaSchema = createBookingSpaSchema({
  name: "Please share your name.",
  email: "A valid email is required.",
  phone: "Please include a phone number.",
  subject: "Please add a subject.",
  message: "A little more detail helps us respond well.",
  checkIn: "Check-in date is required.",
  checkOut: "Check-out date is required.",
  checkOutAfter: "Check-out must be after check-in.",
  massageType: "Please choose a massage type.",
});

export function createBookingContactSchema(errors: FormErrors) {
  return z.object({
    name: z.string().min(2, errors.name),
    email: z.string().email(errors.email),
    phone: z.string().min(7, errors.phone),
    notes: z.string().max(1000).optional(),
  });
}

export const bookingContactSchema = createBookingContactSchema({
  name: "Please share your name.",
  email: "A valid email is required.",
  phone: "Please include a phone number.",
  subject: "Please add a subject.",
  message: "A little more detail helps us respond well.",
  checkIn: "Check-in date is required.",
  checkOut: "Check-out date is required.",
  checkOutAfter: "Check-out must be after check-in.",
  massageType: "Please choose a massage type.",
});

export const bookingSchema = z
  .object({
    checkIn: z.string().min(1, "Check-in date is required."),
    checkOut: z.string().min(1, "Check-out date is required."),
    guests: z.coerce.number().int().min(1).max(6),
    roomType: z.enum(["standard", "double"]),
    moroccanBath: z.boolean(),
    massage: z.boolean(),
    massageType: massageTypeSchema.optional(),
    sauna: z.boolean(),
    steam: z.boolean(),
    name: z.string().min(2, "Please share your name."),
    email: z.string().email("A valid email is required."),
    phone: z.string().min(7, "Please include a phone number."),
    notes: z.string().max(1000).optional(),
  })
  .refine((value) => value.checkOut > value.checkIn, {
    message: "Check-out must be after check-in.",
    path: ["checkOut"],
  })
  .refine((value) => !value.massage || Boolean(value.massageType), {
    message: "Please choose a massage type.",
    path: ["massageType"],
  });

export type BookingStayInput = z.infer<typeof bookingStaySchema>;
export type BookingSpaInput = z.infer<typeof bookingSpaSchema>;
export type BookingContactInput = z.infer<typeof bookingContactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
