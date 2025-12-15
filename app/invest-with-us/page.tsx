import InvestHero from "@/components/invest/invest-hero"
import InvestTypes from "@/components/invest/invest-types"
import InvestRequirements from "@/components/invest/invest-requirements"
import InvestCta from "@/components/invest/invest-cta"

export default function InvestWithUs() {
  return (
    <main>
      <InvestHero />
      <InvestTypes />
      <InvestRequirements />
      <InvestCta />
    </main>
  )
}
