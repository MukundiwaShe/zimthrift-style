import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Bhero Store. Can't find what you're looking for? Contact us on WhatsApp!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Are the clothes original and legit?</AccordionTrigger>
              <AccordionContent>
                Yes! All our clothes are 100% original and authentic. We source our items from trusted suppliers and each piece is carefully inspected for quality and authenticity before being listed. We do not sell counterfeit or fake items.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What condition are the clothes in?</AccordionTrigger>
              <AccordionContent>
                All items are thoroughly cleaned, washed, and ironed before sale. We categorize items as "Like New" (minimal wear, excellent condition), "Gently Used" (light signs of wear but still great), or "Good" (visible wear but fully functional). Each listing clearly states the condition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How do I pay for my order?</AccordionTrigger>
              <AccordionContent>
                We accept EcoCash, bank transfers, and cash on delivery for Harare customers. Once you place your order, we'll send you payment details via WhatsApp. Payment is required before delivery for EcoCash and bank transfers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How long does delivery take?</AccordionTrigger>
              <AccordionContent>
                Harare deliveries are usually done within 24-48 hours. For other cities like Bulawayo, Mutare, and Gweru, delivery takes 2-5 business days depending on your location. We use trusted courier services to ensure your items arrive safely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Can I return or exchange items?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 3 days of delivery if the item doesn't match the description or has defects we didn't disclose. Items must be unworn and in the same condition you received them. Contact us on WhatsApp to arrange a return or exchange.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Why buy from Bhero Store instead of Mbare?</AccordionTrigger>
              <AccordionContent>
                Shopping with us saves you time and hassle! No more spending hours digging through piles at Mupedzanhamo. We hand-pick quality items, wash and iron them, and deliver straight to you. Same great prices ($1-$15), but with convenience and quality assurance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">How do I know my size?</AccordionTrigger>
              <AccordionContent>
                Each item listing includes the size. If you're unsure, send us a WhatsApp message with your measurements and we'll help you find the right fit. We can also provide additional photos or measurements of specific items upon request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">Do you deliver outside Harare?</AccordionTrigger>
              <AccordionContent>
                Yes! We deliver nationwide across Zimbabwe including Bulawayo, Mutare, Gweru, Masvingo, and other cities. Delivery times vary by location (2-5 business days). Contact us for specific delivery details to your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">Are the prices in USD or ZWL?</AccordionTrigger>
              <AccordionContent>
                All our prices are in USD. We accept payment in USD via EcoCash USD, bank transfer, or cash. For ZWL payments, we use the current exchange rate at the time of purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">How do I place an order?</AccordionTrigger>
              <AccordionContent>
                Simply browse our products, add items to your cart, and proceed to checkout. You can also contact us directly on WhatsApp with the items you want, and we'll process your order manually. We'll confirm availability and send you payment details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;