import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { useForm } from "@modular-forms/qwik";

export const useFormLoader = routeLoader$<any>(() => ({
  email: "",
  password: "",
}));

export default component$(() => {
  useForm<any>({
    loader: useFormLoader(),
  });

  return <></>;
});
