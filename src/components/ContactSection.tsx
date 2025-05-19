import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [openOTPModal, setOpenOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [inputOtp, setInputOtp] = useState('');

  const handleVerifyEmail = async () => {
    try {
      // For demonstration purposes, we'll mock the API call
      // In a real application, this would make an actual API call
      console.log("Sending verification email to:", formData.email);
      
      // Mock response
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      
      setOpenOTPModal(true);
      toast({
        title: "OTP Sent!",
        description: "Please check your email for the OTP.",
        variant: "default",
      });
      setOtp(mockOtp); // Using mock OTP for demonstration
      console.log("Generated OTP:", mockOtp);
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleOtpVerification = () => {
    if (inputOtp === otp) {
      setEmailVerified(true);
      setOpenOTPModal(false);
      toast({
        title: "Email Verified!",
        description: "Your email has been verified successfully.",
        variant: "default",
      });
    } else {
      toast({
        title: "Error!",
        description: "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Demo mode - simulating API call
    try {
      console.log("Form submitted with data:", formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setEmailVerified(false);
      setOtp('');
      setInputOtp('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-omega-gray/50 to-omega-black clip-diagonal-reverse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-omega-red">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in our services or have questions? Reach out to us and our team will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-omega-gray/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-omega-red/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-omega-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email Us</p>
                    <a href="mailto:info@omegaslayers.com" className="text-white hover:text-omega-red transition-colors">
                      info@omegaslayers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-omega-red/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-omega-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-white hover:text-omega-red transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-omega-red/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-omega-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Our Office</p>
                    <address className="text-white not-italic">
                      123 Esports Avenue,<br />
                      Gaming District, CA 12345
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64">
              <div className="w-full h-full bg-omega-gray/30 flex items-center justify-center text-gray-400">
                Map Placeholder
              </div>
            </div>
          </div>

          <div className="bg-omega-gray/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-omega-gray/30 border-omega-gray/50 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-omega-gray/30 border-omega-gray/50 text-white"
                    required
                  />
                </div>
              </div>

              {!emailVerified && (
                <>
                  <Button
                    type="button"
                    onClick={handleVerifyEmail}
                    className="bg-omega-red hover:bg-omega-red/90 text-white"
                  >
                    Verify Email
                  </Button>

                  {openOTPModal && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="otp" className="text-white">Enter OTP</label>
                        <Input
                          id="otp"
                          name="otp"
                          value={inputOtp}
                          onChange={(e) => setInputOtp(e.target.value)}
                          className="bg-omega-gray/30 border-omega-gray/50 text-white"
                          required
                        />
                        <Button
                          type="button"
                          onClick={handleOtpVerification}
                          className="bg-green-600 hover:bg-green-700 text-white mt-2"
                        >
                          Verify OTP
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {emailVerified && (
                <div className="text-green-400 font-semibold">Email Verified Successfully!</div>
              )}

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-omega-gray/30 border-omega-gray/50 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-omega-gray/30 border-omega-gray/50 text-white"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-omega-red hover:bg-omega-red/90 text-white button-glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
