import { Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "UX-Kickstart Workshop Program",
      organization: "Coursera",
      date: "December 2023",
      image: "/images/ux-workshop.jpg",
      pdfUrl: "/certificates/your-certficate.pdf",
    
    },
    {
      title: "Google UX Design Career Program",
      organization: "Coursera",
      date: "October 2023",
      image: "/images/fullstack.png",
      pdfUrl: "/certificates/google-ux.pdf",
    
    },
    {
      title: "Full Stack Development",
      organization: "Coursera",
      date: "August 2023",
      image: "/images/ux-workshop.jpg",
      pdfUrl: "/certificates/your-certificate.pdf",
    
    },
    {
      title: "DSA with Java",
      organization: "Coursera",
      date: "July 2023",
      image: "/images/fullstack.png",
      pdfUrl: "/certificates/Your-Certificate.pdf",
    
    },
    {
      title: "Aspire Leadership Program",
      organization: "Harvard Bussiness School",
      date: "Nov 2024",
      image: "/images/ux-workshop.jpg",
      pdfUrl: "/certificates/Your-Certificates.pdf",
    
    },
    {
      title: "ChatGPT",
      organization: "Coursera",
      date: "June 2023",
      image: "/images/fullstack.png",
      pdfUrl: "/certificates/your-Certificates.pdf",
    
    }
    
  ];
  const handleCertificateClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };
  return (
    <section id="certificates" className="my-10">
      <div className="w-full max-w-[92%] md:max-w-full mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#196EF8]/80 from-[#196EF8]/80 to-accent/20 hover:border-[#F9FBFF]/80 transition-all duration-300"
              onClick={() => handleCertificateClick(cert.pdfUrl)}
            >
              <div className="aspect-video relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground">{cert.organization}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;