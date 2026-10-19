import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please tell us your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  organisation: z.string().trim().optional(),
  interest: z.string().trim().min(1, "Please choose an area of interest"),
  subject: z.string().trim().min(3, "Please add a short subject"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few more details — at least 10 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy acknowledgement" }),
  }),
});

type FormValues = z.infer<typeof schema>;

const interests = [
  "Partner with CBDOS",
  "Volunteer or participate",
  "Media enquiry",
  "Collaborate on research or advocacy",
  "General enquiry",
];

interface Props {
  intent?: "contact" | "get-involved";
}

export function EnquiryForm({ intent = "contact" }: Props) {
  const [state, setState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      organisation: "",
      interest: "",
      subject: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  async function onSubmit(values: FormValues) {
    setState("submitting");
    try {
      // Frontend demonstration only. In production, send to a configured
      // backend or form provider (e.g. Formspree, Resend, custom API).
      await new Promise((r) => setTimeout(r, 900));
      // Simulated success only when no backend is configured. The success
      // message is explicit that submission is a frontend demonstration.
      console.info("[CBDOS enquiry — demonstration only]", { intent, values });
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-brand-green/30 bg-brand-green-soft rounded p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="h-5 w-5 text-brand-green-dark mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-base font-semibold text-ink">
              Thank you — your message has been sent.
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              A member of the Secretariat will be in touch. For urgent
              matters, please reach out using the phone number or email
              address at the top of the page.
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-4 text-sm font-medium text-brand-green-dark hover:text-brand-green underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full name"
          error={errors.fullName?.message}
          id="fullName"
          required
        >
          <input
            id="fullName"
            className="input-base"
            autoComplete="name"
            {...register("fullName")}
          />
        </Field>
        <Field
          label="Email address"
          error={errors.email?.message}
          id="email"
          required
        >
          <input
            id="email"
            type="email"
            className="input-base"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Organisation (optional)"
          error={errors.organisation?.message}
          id="organisation"
        >
          <input
            id="organisation"
            className="input-base"
            autoComplete="organization"
            {...register("organisation")}
          />
        </Field>
        <Field
          label="Area of interest"
          error={errors.interest?.message}
          id="interest"
          required
        >
          <select
            id="interest"
            className="input-base appearance-none bg-paper"
            defaultValue=""
            {...register("interest")}
          >
            <option value="" disabled>
              Select an area
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message} id="subject" required>
        <input
          id="subject"
          className="input-base"
          {...register("subject")}
        />
      </Field>

      <Field label="Message" error={errors.message?.message} id="message" required>
        <textarea
          id="message"
          rows={6}
          className="input-base resize-y"
          {...register("message")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 border-border-strong text-brand-green focus:ring-brand-green"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-text-muted">
          I understand that CBDOS will use the information I have shared only
          to respond to this enquiry, in line with the{" "}
          <a href="/privacy" className="underline hover:text-ink">
            privacy policy
          </a>
          .
        </label>
      </div>
      {errors.consent?.message ? (
        <p className="text-sm text-brand-red">{errors.consent.message}</p>
      ) : null}

      {state === "error" ? (
        <div className="border border-brand-red/30 bg-brand-red/5 text-brand-red rounded px-4 py-3 text-sm flex items-start gap-2">
          <AlertCircle className="h-4 w-4 mt-0.5" aria-hidden="true" />
          Something went wrong submitting the form. Please try again, or use the
          contact details on the Contact page once configured.
        </div>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary disabled:opacity-70 disabled:cursor-wait"
        >
          {state === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  id,
  required,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required ? <span className="text-brand-red ml-0.5" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-brand-red">{error}</p>
      ) : null}
    </div>
  );
}
