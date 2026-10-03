"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";

export function ContactTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab") === "booking" ? "booking" : "inquiry";

  return (
    <Tabs
      value={tab}
      onValueChange={(value) => {
        const next = value === "booking" ? "/contact?tab=booking" : "/contact";
        router.replace(next, { scroll: false });
      }}
    >
      <TabsList>
        <TabsTrigger value="inquiry">General Inquiry</TabsTrigger>
        <TabsTrigger value="booking">Book a Stay</TabsTrigger>
      </TabsList>
      <TabsContent value="inquiry">
        <ContactForm />
      </TabsContent>
      <TabsContent value="booking">
        <BookingForm />
      </TabsContent>
    </Tabs>
  );
}
