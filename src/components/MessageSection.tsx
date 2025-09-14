import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";

const MessageSection = () => {
  const [state, handleSubmit] = useForm("xqadwnpv");

  if (state.succeeded) {
    return (
      <section className="min-h-screen py-20 bg-background flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Thank You!
              </span>
            </h2>
            <p className="text-muted-foreground">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
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
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                className="min-h-[120px] resize-none"
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
              className="w-full bg-gray-500 text-white hover:bg-black active:bg-black focus:bg-black transition-all duration-300"
              size="lg"
            >
              {state.submitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
