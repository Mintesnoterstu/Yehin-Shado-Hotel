"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactTabs() {
  const { t } = useLanguage();
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
        <TabsTrigger value="inquiry">{t.contact.inquiry}</TabsTrigger>
        <TabsTrigger value="booking">{t.contact.booking}</TabsTrigger>
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
