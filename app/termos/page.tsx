import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { TermsConditions } from "@/components/terms-conditions"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-irish-green transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-irish-green" />
            <h1 className="text-4xl font-bold font-serif text-gray-900">Termos e Condições</h1>
          </div>
        </div>
      </div>

      <TermsConditions />

      <Footer />
    </div>
  )
}
