
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  phoneNumber: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number"),
  marketingConsent: z.boolean().optional() // Making consent optional
})

export function OptInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      marketingConsent: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle submission here
  }

  return (
    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Get Started Now</h2>
      <div className="text-sm text-white/80 mb-4">
        <p className="mb-2">Business Information:</p>
        <p>OrderChat</p>
        <p>1130 Kings Cross, Brunswick, GA, 31525</p>
        <p>303-941-2981</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Enter your phone number" 
                    {...field}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-white/60 mt-1">
                  Your phone number will be used only for service-related communications necessary for using OrderChat.
                </p>
              </FormItem>
            )}
          />
          
          <div className="border-t border-white/10 my-6"></div>
          
          <div className="text-sm text-white/80 mb-4">
            Optional Marketing Communications
          </div>
          
          <FormField
            control={form.control}
            name="marketingConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="text-sm leading-none text-white">
                  By checking this box, you agree to receive promotional SMS messages from OrderChat. This is completely optional and not required to use our services. Message and data rates may apply. Reply STOP to opt out.
                </div>
              </FormItem>
            )}
          />
          
          <div className="text-xs text-white/60 mt-2">
            If you opt in, OrderChat will use your phone number to send you updates and marketing messages. You can opt out at any time by replying STOP.
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
