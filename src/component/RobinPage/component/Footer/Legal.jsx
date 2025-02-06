// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const formSchema = z.object({
//   companyName: z.string().min(2, {
//     message: "Company name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   fullName: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   phone: z.string().optional(),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// })

// export default function LegalDocumentForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       companyName: "",
//       email: "",
//       fullName: "",
//       phone: "",
//       message: "",
//     },
//   })

//   function onSubmit(values) {
//     console.log(values)
//   }

//   return (
//     <div className="container mx-auto p-4 max-w-3xl">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Email Form for Legal Documents</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="companyName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Company Name <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <FormControl>
//                         <Input placeholder="Company you work for" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Your Email <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <FormControl>
//                         <Input type="email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="fullName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         Full Name <span className="text-red-500">*</span>
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Phone</FormLabel>
//                       <FormControl>
//                         <div className="flex">
//                           <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-muted-foreground text-sm">
//                             +1
//                           </span>
//                           <Input className="rounded-l-none" placeholder="(201) 555-0123" {...field} />
//                         </div>
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>
//                       Message <span className="text-red-500">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea placeholder="Type your message here" className="min-h-[150px]" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="space-y-4">
//                 <div>
//                   <Input type="file" className="cursor-pointer" aria-label="Choose file" />
//                 </div>

//                 <div id="recaptcha" className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>

//                 <Button type="submit" className="w-24">
//                   Send
//                 </Button>
//               </div>
//             </form>
//           </Form>

//           <div className="mt-8 text-center text-sm text-muted-foreground">
//             <p>Or use our mailing address:</p>
//             <p className="font-medium">Consumer Opinion LLC</p>
//             <p>701 S CARSON ST SUITE 200</p>
//             <p>CARSON CITY, NV 89701</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function LegalDocumentForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    fullName: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission here
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Email Form for Legal Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Company you work for"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-muted-foreground text-sm">
                    +1
                  </span>
                  <Input
                    id="phone"
                    name="phone"
                    className="rounded-l-none"
                    placeholder="(201) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                className="min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-4">
              <div>
                <Input type="file" className="cursor-pointer" aria-label="Choose file" />
              </div>

              <div id="recaptcha" className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>

              <Button type="submit" className="w-24">
                Send
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Or use our mailing address:</p>
            <p className="font-medium">Consumer Opinion LLC</p>
            <p>701 S CARSON ST SUITE 200</p>
            <p>CARSON CITY, NV 89701</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

