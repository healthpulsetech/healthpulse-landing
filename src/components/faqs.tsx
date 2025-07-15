import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  i: number;
  expanded: number | null;
  setExpanded: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  description: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: "What is HealthPulse?",
    description:
      "HealthPulse is an AI-powered, multilingual digital health assistant designed to improve healthcare access and quality in Rwanda. It provides real-time symptom checks, health education, medication reminders, and hospital queue tracking through voice, SMS/USSD, chatbot, and mobile app—all tailored to local languages and needs.",
  },
  {
    title: "Who can use HealthPulse?",
    description:
      "Anyone in Rwanda—including patients, caregivers, and Community Health Workers (CHWs)—can use HealthPulse. It’s designed to support both urban and rural populations with different levels of access to technology.",
  },
  {
    title: "Is HealthPulse free to use?",
    description:
      "Yes. Core features like AI symptom checking and queue tracking are free, supported by partners and donors. Advanced features may be accessed via affordable premium plans.",
  },
  {
    title: "How can I access HealthPulse?",
    description:
      "You can access HealthPulse through various channels: smartphone app, USSD codes, SMS, IVR voice calls, and WhatsApp chatbot—ensuring inclusion even for users without internet or smartphones.",
  },
  {
    title: "In what languages is HealthPulse available?",
    description:
      "HealthPulse currently supports Kinyarwanda, English, and French. Both voice and text interfaces are adapted for local comprehension and ease of use.",
  },
];


const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20">
    
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8 ">
      <h1 className="mb-4 bg-white text-secondary text-center text-2xl font-bold font-mono">
        Frequently asked questions
      </h1>
      <p className="mb-10 text-center text-primary font-mono">
        Need help with something? Here are our most frequently asked questions.
      </p>
      <div className="space-y-4">
        {accordionItems.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
    

    </section>
  );

};

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
}) => {
  const isOpen = i === expanded;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: 0.2 * i,
        duration: 0.8,
      }}
      className="overflow-hidden rounded-lg border border-gray-300 "
    >
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "bg-gray-100 dark:bg-gray-800"
            : "bg-white dark:bg-gray-900",
        }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className="flex cursor-pointer items-center justify-between p-4"
      >
        <h3 className="text-sm text-primary">{title}</h3>
        <div>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="size-5 text-sm"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-white p-4 text-sm text-primary">
              {description}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default FAQ;
