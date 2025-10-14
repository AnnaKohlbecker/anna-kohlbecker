import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xqadwnpv");

  return (
    <section className="text-black container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-black">CONTACT</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {state.succeeded ? (
          <div className="text-center flex items-center justify-center min-h-[400px]">
            <p className="text-black">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="hidden"
              name="_subject"
              value="AnnaKohlbecker New Message"
            />
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-destructive text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-black">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                className="min-h-[120px] resize-none border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
                rows={5}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-destructive text-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white transition-all duration-300 shadow-lg hover:shadow-glow"
              size="lg"
            >
              {state.submitting ? "Sending..." : "Send"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
