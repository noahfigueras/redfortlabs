import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  const slugs = [
    "breaking-defi-vulnerabilities",
    "ai-agents-blockchain",
    "flash-loan-attacks",
    "smart-contract-auditing-guide",
    "zero-knowledge-proofs-intro",
    "cross-chain-bridge-security",
  ];
  
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <BlogPostContent slug={resolvedParams.slug} />;
}
