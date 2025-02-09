import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast"; // Import toast hook

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: "yourmail@gmail.com", // Target email address
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_9jfk5y8k", // Replace with your EmailJS Service ID
        "template_o89vq7gpv", // Replace with your EmailJS Template ID
        templateParams,
        "gcULbDlDSRDRODPg3" // Replace with your EmailJS Public Key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <form
            className="space-y-6 md:space-y-8 p-4 md:p-8 rounded-lg border border-[#196EF8]/80 w-full sm:w-[90%] mx-auto bg-[#0A192F]"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
                rows={4}
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="h-[250px] md:h-[400px] rounded-lg overflow-hidden border border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5997798838537!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1645451234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
