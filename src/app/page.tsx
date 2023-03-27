import HComp from "@/components/HComp/HComp";
import Button from "@/components/Button/Button";
import PComp from "@/components/PComp/PComp";
import Tag from "@/components/Tag/Tag";

export default function Home() {
    return (
        <main>
            <HComp type='h1'>Wassup Next!</HComp>
            <Button type='normal' className='test-class' arrow='down'>Test button</Button>
            <Button type='transparent' arrow='right'>Test button</Button>
            <PComp size='s'>
                Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
                изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.
                Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя
                Python
            </PComp>
            <PComp>
                Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
                изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.
                Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя
                Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки
                остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам
                GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт
                коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в
                трудоустройстве!
            </PComp>
            <PComp size='l'>
                свое резюме. Скажу вам как прошедший это – реально помогло в
                трудоустройстве!
            </PComp>
            <Tag type={'inactive'}>text</Tag>
            <Tag type={'ghost'} size='m'>text</Tag>
            <Tag type={'sale'} href="https://ya.ru">text</Tag>
            <Tag type={'alert'} size='m'>text</Tag>
            <Tag type={'normal'}>text</Tag>
        </main>
    )
}
