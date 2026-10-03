import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(7, "Please include a phone number."),
  subject: z.string().min(3, "Please add a subject."),
  message: z.string().min(10, "A little more detail helps us respond well."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const massageTypeSchema = z.enum(["deep-tissue", "swedish", "therapeutic"]);

export const bookingStaySchema = z
  .object({
    checkIn: z.string().min(1, "Check-in date is required."),
    checkOut: z.string().min(1, "Check-out date is required."),
    guests: z.coerce.number().int().min(1).max(6),
    roomType: z.enum(["standard", "double"]),
  })
  .refine((value) => value.checkOut > value.checkIn, {
    message: "Check-out must be after check-in.",
    path: ["checkOut"],
  });

export const bookingSpaSchema = z
  .object({
    moroccanBath: z.boolean(),
    massage: z.boolean(),
    massageType: massageTypeSchema.optional(),
    sauna: z.boolean(),
    steam: z.boolean(),
  })
  .refine((value) => !value.massage || Boolean(value.massageType), {
    message: "Please choose a massage type.",
    path: ["massageType"],
  });

export const bookingContactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(7, "Please include a phone number."),
  notes: z.string().max(1000).optional(),
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
