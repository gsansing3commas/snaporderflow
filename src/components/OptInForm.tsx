
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
                  By checking this box, you agree to receive promotional SMS messages from OrderChat. This is optional and not required to use our services. Message and data rates may apply. Reply STOP to opt out.
                </div>
              </FormItem>
            )}
          />
          
          <div className="text-xs text-white/60 mt-2">
            OrderChat will use the information you provide on this form to be in touch with you and to provide updates and marketing. By submitting this form, you consent to receiving SMS messages from OrderChat at the number provided.
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
