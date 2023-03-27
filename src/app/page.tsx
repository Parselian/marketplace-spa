import HComp from "@/components/HComp/HComp";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main>
      <HComp type='h1'>Wassup Next!</HComp>
        <Button type='normal' hasIcon={false}>Test button</Button>
        <Button type='transparent' hasIcon={false}>Test button</Button>
    </main>
  )
}
