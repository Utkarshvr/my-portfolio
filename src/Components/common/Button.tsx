import Link from "next/link";
export default function Button({
  children,
  download,
  isLink,
  href,
  isSecondary,
}: {
  children: React.ReactNode;
  isSecondary?: boolean;
  download?: string;
  isLink?: boolean;
  href?: string | "";
}) {
  const commonClasses = `px-4 py-2 w-[50%] rounded-3xl font-bold ${
    isSecondary
      ? "border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
      : "bg-sky-600 hover:bg-sky-800"
  } transition-all`;

  if (isLink) {
    return (
      <Link
        href={href || ""}
        download={download}
        target="_blank"
        className={`flex items-center justify-center ${commonClasses}`}
      >
        {children}
      </Link>
    );
  } else {
    return <button className={commonClasses}>{children}</button>;
  }
}
