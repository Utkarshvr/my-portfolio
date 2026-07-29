import Link from "next/link";

function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

export default function Button({
  children,
  download,
  isLink,
  href,
  isSecondary,
  fullWidth,
  className,
  onClick,
  /** Force new tab. Defaults to true for external URLs, false for internal. */
  openInNewTab,
}: {
  children: React.ReactNode;
  isSecondary?: boolean;
  download?: string;
  isLink?: boolean;
  href?: string | "";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
}) {
  const commonClasses = `px-4 py-2 ${
    fullWidth ? "w-full" : "w-[50%]"
  } rounded-3xl font-bold ${
    isSecondary
      ? "border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
      : "bg-sky-600 hover:bg-sky-800"
  } transition-all`;

  if (isLink) {
    const url = href || "";
    const external =
      openInNewTab ?? (url ? isExternalHref(url) : false);

    return (
      <Link
        href={url}
        download={download}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={`flex items-center justify-center ${commonClasses} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${commonClasses} ${className}`}>
      {children}
    </button>
  );
}
