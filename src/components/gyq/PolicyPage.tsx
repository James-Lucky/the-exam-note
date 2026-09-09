import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Brand from "./Brand";

type PolicyKind = "privacy" | "terms" | "refunds";
const copy: Record<
  PolicyKind,
  { title: string; intro: string; sections: Array<[string, string]> }
> = {
  privacy: {
    title: "Privacy Policy",
    intro: "A clear summary of what GYQ collects and why.",
    sections: [
      [
        "Information we collect",
        "We collect the account details you provide, such as name and email, along with your selected class, subject and study activity. We collect only what is needed to provide and improve GYQ.",
      ],
      [
        "How we use it",
        "We use this information to maintain your account, personalise question sets and provide support. We do not sell your personal information.",
      ],
      [
        "Your choices",
        "You can ask us to correct or delete your account information by contacting us through our Instagram handle. Do not share passwords or payment credentials in messages.",
      ],
      [
        "Student safety",
        "GYQ is designed for students. A parent or guardian should review use of the service where required. This draft policy must be reviewed by an India-qualified lawyer before launch.",
      ],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "Please read before using GYQ or purchasing a Crammer Pass.",
    sections: [
      [
        "What GYQ does",
        "GYQ uses AI and historical PYQ patterns to suggest revision questions and practice material. It is a study-support tool only; it does not know, obtain or guarantee any future exam question, paper, result or score.",
      ],
      [
        "No unfair activity",
        "GYQ does not support cheating, paper leaks, unauthorised access, or any unfair or illegal examination activity. You must use the material only for lawful personal study.",
      ],
      [
        "Your responsibility",
        "You remain responsible for your preparation, answer writing and exam conduct. AI-generated content can be incomplete or incorrect; verify it with NCERT and your school resources.",
      ],
      [
        "Account use",
        "Keep your account details private. Do not misuse the platform, upload harmful material or attempt to disrupt the service.",
      ],
      [
        "Changes",
        "We may update these terms as the product changes. Continued use after an update means you accept the revised terms.",
      ],
    ],
  },
  refunds: {
    title: "Refund & Cancellation Policy",
    intro: "Crammer Pass is a short-duration digital access product.",
    sections: [
      [
        "No-refund policy",
        "Purchases of a Crammer Pass are generally non-refundable once access has been activated, because the digital content and AI features become available immediately.",
      ],
      [
        "Payment errors",
        "If you are charged but access is not activated, contact support with your payment reference so we can investigate and resolve the issue.",
      ],
      [
        "Important",
        "This policy is displayed before purchase. Consumer rights that cannot legally be excluded remain unaffected. This draft must be reviewed by an India-qualified lawyer before accepting live payments.",
      ],
    ],
  },
};
export default function PolicyPage({ kind }: { kind: PolicyKind }) {
  const content = copy[kind];
  return (
    <main className="ambient min-h-screen bg-[#f5f7fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[70px] max-w-4xl items-center px-4 sm:px-6">
          <Brand />
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1 text-xs font-bold text-slate-500"
        >
          <ArrowLeft size={14} /> Back to GYQ
        </Link>
        <div className="mt-5 rounded-[28px] bg-white p-6 shadow-sm sm:p-9">
          <ShieldCheck className="text-blue-600" size={27} />
          <p className="mt-5 text-[11px] font-black tracking-widest text-blue-600">
            GYQ POLICIES · DRAFT
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">
            {content.title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {content.intro}
          </p>
          <div className="mt-8 space-y-7">
            {content.sections.map(([heading, text]) => (
              <section key={heading}>
                <h2 className="font-black">{heading}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </section>
            ))}
          </div>
          <p className="mt-9 rounded-xl bg-amber-50 p-4 text-xs leading-5 text-amber-800">
            <b>Before launch:</b> Have this policy reviewed by an
            India-qualified lawyer and publish a support email, business
            identity and final effective date.
          </p>
        </div>
      </article>
    </main>
  );
}
