import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  LineChart,
  Code,
  Globe,
  Database,
  Cpu,
  Shield,
  Cloud,
  Smartphone,
} from "lucide-react";

export const THEME = {
  primary: "rgb(0, 223, 255)",
  primaryHover: "rgb(0, 249, 255)",
  secondary: "rgb(0, 86, 209)",
  gradientStart: "rgb(0, 223, 255)",
  gradientEnd: "rgb(0, 86, 209)",
  backgroundLight: "#F9FAFB",
  backgroundSection: "#F2F4F7",
  textPrimary: "#0F172A",
  textSecondary: "#475569",
} as const;

const toRgba = (color: string, alpha: number) => {
  if (color.startsWith("rgb")) {
    const [r = "0", g = "0", b = "0"] = color.match(/\d+/g) ?? [];
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  let hex = color.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Revenue Cycle Management",
      description:
        "Specialized in medical coding with 99.9% quality and 100% production.",
      icon: <LineChart />,
    },
    {
      title: "Product Development",
      description:
        "Custom-built solutions tailored to your business needs with AI-driven automation.",
      icon: <Code />,
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies.",
      icon: <Globe />,
    },
    {
      title: "Database Management",
      description:
        "Efficient database solutions for optimal data storage and retrieval.",
      icon: <Database />,
    },
    {
      title: "Blockchain Services",
      description:
        "Innovative blockchain solutions for secure and transparent transactions.",
      icon: <Cpu />,
    },
    {
      title: "Testing & Security",
      description:
        "Comprehensive testing and security solutions to protect your digital assets.",
      icon: <Shield />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: <Cloud />,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <Smartphone />,
    },
  ];
  return (
    <div
      className="relative z-10 py-10 max-w-7xl mx-auto rounded-[32px] px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: THEME.backgroundSection }}
    >
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-4 text-left lg:px-0">
        <h2
          className="text-3xl font-semibold md:text-4xl lg:text-5xl"
          style={{ color: THEME.textPrimary }}
        >
          Our Services
        </h2>
        <p
          className="max-w-2xl text-base md:text-lg"
          style={{ color: THEME.textSecondary }}
        >
          We offer a comprehensive range of IT services designed to help your
          business thrive in the digital era.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            theme={THEME}
          />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  theme,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  theme: typeof THEME;
}) => {
  const gradientDirection = index < 4 ? "to top" : "to bottom";
  const gradientBackground = `linear-gradient(${gradientDirection}, ${toRgba(
    theme.gradientStart,
    0.18
  )}, transparent)`;
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        delay: Math.min(index * 0.08, 0.4),
        duration: 0.45,
        ease: "easeOut",
      }}
      className={cn(
        "relative flex flex-col py-10 group/feature transition-all duration-300",
        "w-full rounded-2xl border border-neutral-200/60 bg-white/80 px-6 shadow-sm backdrop-blur dark:border-neutral-700/60 dark:bg-neutral-900/50 md:border-0 md:bg-transparent md:px-0 md:shadow-none",
        "lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      style={{
        borderColor: toRgba(theme.secondary, 0.15),
        background: theme.backgroundLight,
      }}
    >
      <div
        className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none"
        style={{ background: gradientBackground }}
      />
      <div
        className="mb-4 relative z-10 px-10"
        style={{ color: theme.secondary }}
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center"
          style={{
            backgroundImage: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
            boxShadow: `0 12px 28px ${toRgba(theme.secondary, 0.35)}`,
          }}
        />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block"
          style={{ color: theme.textPrimary }}
        >
          {title}
        </span>
      </div>
      <p
        className="text-sm max-w-xs relative z-10 px-10"
        style={{ color: theme.textSecondary }}
      >
        {description}
      </p>
    </motion.div>
  );
};
