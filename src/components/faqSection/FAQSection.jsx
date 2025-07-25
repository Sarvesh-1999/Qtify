import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "Is Qtify free to use?",
    answer: "Yes! It is 100% free, and has 0% ads!",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "No, currently you can only stream songs online.",
  },
];

const FAQSection = () => (
  <section className="w-full max-w-3xl mx-auto my-12">
    <h2 className="text-white text-3xl font-bold text-center mb-8">FAQs</h2>
    {faqs.map((faq, idx) => (
      <Accordion key={idx} className="mb-4 bg-[#181818] text-white border border-[#333] rounded-xl">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#34C94B' }} />}
          aria-controls={`faq-content-${idx}`}
          id={`faq-header-${idx}`}
        >
          <Typography className="font-semibold text-lg">{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-base">{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </section>
);

export default FAQSection;
