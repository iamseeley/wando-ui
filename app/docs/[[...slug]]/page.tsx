
import { Mdx } from "@layout/mdx-components";
import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation";

interface DocPageProps {
    params: {
      slug: string[]
    }
  }

  async function getDocFromParams({ params }: DocPageProps) {
    const slug = params.slug?.join("/") || ""
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  
    if (!doc) {
      null
    }
  
    return doc
  }

//   export async function generateStaticParams(): Promise<
//   DocPageProps["params"][]
// > {
//   return allDocs.map((doc) => ({
//     slug: doc.slugAsParams.split("/"),
//   }))
// }

export default async function Doc({ params }: DocPageProps) {
    const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  
  return (
    <main>
      <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              {doc.description}
            </p>
          )}
        </div>
      <div>
        <Mdx code={doc.body.code} />
      </div>
    </main>
  )
}
