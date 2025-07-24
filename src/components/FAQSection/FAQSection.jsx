import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FAQSection.module.css";

const faqList = [
  {
    question: "Is Qtify free to use?",
    answer: "Yes! It is 100% free, and has 0% ads!",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "No, downloading is not supported as of now.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={styles.faqContainer}>
      <Typography variant="h4" className={styles.title}>
        FAQs
      </Typography>

      {faqList.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={styles.accordion}
        >
          <AccordionSummary
          className={styles.accordionSummary}
            expandIcon={
              <ExpandMoreIcon
                className={`${styles.icon} ${
                  expanded === index ? styles.iconOpen : ""
                }`}
              />
            }
          >
            <Typography className={styles.question}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.answer}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
