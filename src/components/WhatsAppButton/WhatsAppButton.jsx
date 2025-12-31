import "./WhatsAppButton.css";

export default function WhatsApp() {
  const phoneNumber = "919999999999"; // replace with client number
  const message = encodeURIComponent(
    "Hello UK Travels, I would like to enquire about your travel packages."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
