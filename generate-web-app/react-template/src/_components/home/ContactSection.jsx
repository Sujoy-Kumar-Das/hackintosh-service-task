export default function ContactSection({ phone, address }) {
  return (
    <section className="contact">
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </section>
  );
}
