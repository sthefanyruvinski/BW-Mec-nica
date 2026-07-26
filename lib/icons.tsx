import type { IconKey } from "./content-schema";

type IconProps = {
  size?: number;
};

export function CategoryIcon({ icon, size = 20 }: { icon: IconKey; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "#4a9bdc",
  };

  switch (icon) {
    case "motor":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="9" width="10" height="7" rx="1" />
          <path d="M13 11h3l3 2v2l-3 2h-3" />
          <path d="M5 9V7h5v2M7 16v2M11 16v2" />
        </svg>
      );
    case "arrefecimento":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c2.5 4 5 7.5 5 10.5a5 5 0 1 1-10 0C7 10.5 9.5 7 12 3z" />
        </svg>
      );
    case "transmissao":
      return (
        <svg {...common} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="3.2" />
          <circle cx="17" cy="16" r="3.2" />
          <path d="M11.8 11.2l2.4 2.6" />
        </svg>
      );
    case "suspensao":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v3" />
          <path d="M7 6h10l-2 2H9z" />
          <path d="M8 8v2l8 0V8" />
          <path d="M8.5 10c0 1 1.5 1 1.5 2s-1.5 1-1.5 2 1.5 1 1.5 2-1.5 1-1.5 2" />
          <path d="M15.5 10c0 1-1.5 1-1.5 2s1.5 1 1.5 2-1.5 1-1.5 2 1.5 1 1.5 2" />
          <path d="M9 20h6" />
        </svg>
      );
    case "freios":
      return (
        <svg {...common} strokeWidth={1.8}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="2.5" fill="#4a9bdc" />
          <path d="M12 3.5v3M12 17.5v3M20.5 12h-3M6.5 12h-3" />
        </svg>
      );
    case "escapamento":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="11" height="4" rx="2" />
          <path d="M14 12h5l2-2.5M19 12l2 2.5" />
        </svg>
      );
    case "direcao":
      return (
        <svg {...common} strokeWidth={1.6} strokeLinecap="round">
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 3.5V8M6.5 15.5L10 13M17.5 15.5L14 13" />
        </svg>
      );
    case "lubrificacao":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c2 3.5 4.5 6.8 4.5 9.5a4.5 4.5 0 1 1-9 0C7.5 9.8 10 6.5 12 3z" />
        </svg>
      );
    case "diagnostico":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L21 21" />
        </svg>
      );
    case "geral":
      return (
        <svg {...common} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.8 2.8-2-2 2.8-2.8z" />
        </svg>
      );
  }
}

export function iconLabel(icon: IconKey): string {
  const labels: Record<IconKey, string> = {
    motor: "Motor",
    arrefecimento: "Arrefecimento",
    transmissao: "Transmissão",
    suspensao: "Suspensão",
    freios: "Freios",
    escapamento: "Escapamento",
    direcao: "Direção",
    lubrificacao: "Lubrificação",
    diagnostico: "Diagnóstico",
    geral: "Geral",
  };
  return labels[icon];
}

export type { IconProps };
