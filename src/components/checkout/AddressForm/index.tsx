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
  address: z.string().min(1, {
    message: "Required Field",
  }),
  complement_address: z.string(),
  postal_code: z.string(),
  city: z.string().min(1, {
    message: "Required Field",
  }),
  country: z.string().min(1, {
    message: "Required Field",
  }),
  phone: z.string(),
});

const AddressForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      address: "",
      complement_address: "",
      postal_code: "",
      country: "",
      city: "",
      phone: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.replace(PATHS.checkout);
  }

  console.log(form.formState.errors);

  return (
    <div className="flex flex-col sm:justify-center sm:items-center md:px-8">
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
                name="postal_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="111111" {...field} />
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
            </div>

            <div className="flex mt-8 w-full md:w-1/2">
              <Button
                disabled={!form.formState.isValid}
                className="w-full"
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
