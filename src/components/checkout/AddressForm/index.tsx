"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { PATHS } from "@/utils/paths";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  full_name: z.string().min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  phone: z.string(),
  address: z.string().min(1, {
    message: "Required Field",
  }),
  complement_address: z.string(),
  country: z.string().min(1, {
    message: "Required Field",
  }),
  city: z.string().min(1, {
    message: "Required Field",
  }),
});

const AddressForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      address: "",
      complement_address: "",
      country: "",
      city: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.replace(PATHS.checkout);
  }

  return (
    <div className="flex flex-col sm:justify-center sm:items-center">
      <div className="w-full flex flex-col justify-center text-left">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street 45" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="complement_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complementary Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Apartment 101" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Colombia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Bogotá" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end mt-8 w-full">
              <Button
                disabled={!form.formState.isValid}
                className="w-1/3"
                type="submit"
              >
                Place Order
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddressForm;
