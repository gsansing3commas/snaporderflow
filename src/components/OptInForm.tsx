
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
  consent: z.boolean()
    .refine(val => val === true, "You must agree to receive messages")
})

export function OptInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      consent: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle submission here
  }

  return (
    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Get Started Now</h2>
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
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="text-sm leading-none text-white">
                  I consent to receive automated transactional and promotional SMS messages from OrderChat.pro. Message frequency varies. Message & data rates may apply. Reply STOP to opt-out.
                </div>
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
