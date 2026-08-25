import { notFound } from "next/navigation";

import { getShopPolicy, getPolicyHandles } from "@/lib/shopify/policies";
import { createMetadata } from "@/lib/seo";

import Container from "@/components/layout/Container";
import PageHero from "@/components/blocks/PageHero";

export async function generateStaticParams() {
  return getPolicyHandles().map((handle) => ({ handle }));
}

export async function generateMetadata({ params }) {
  const { handle } = await params;

  if (!getPolicyHandles().includes(handle)) {
    return {};
  }

  const policy = await getShopPolicy(handle);

  return createMetadata({
    title: policy?.title ?? "Policy",
    description: policy?.title ? `${policy.title} for Get Reset.` : undefined,
  });
}

export default async function PolicyPage({ params }) {
  const { handle } = await params;

  if (!getPolicyHandles().includes(handle)) {
    notFound();
  }

  const policy = await getShopPolicy(handle);

  return (
    <>
      <PageHero eyebrow="Policy" title={policy?.title ?? "Policy"} />

      <Container>
        <section className="mx-auto max-w-3xl py-24">
          {policy?.body ? (
            <div
              className="leading-8 text-[var(--foreground-muted)] [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[var(--foreground)] [&_li]:mt-2 [&_p]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: policy.body }}
            />
          ) : (
            <p className="leading-8 text-[var(--foreground-muted)]">
              This policy hasn&apos;t been set up yet. Add it under Settings →
              Policies in the Shopify admin and it will appear here
              automatically.
            </p>
          )}
        </section>
      </Container>
    </>
  );
}
