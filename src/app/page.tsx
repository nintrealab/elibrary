import { Container } from '@/components/container'
import { contents } from '@/data/books';
import { BlogCard } from '@/components/ui/blog-card';

export default async function Home() {
    return (
        <Container breadcrumb={[{ label: "ទំព័រដើម" }, { label: "រឿងអក្សរសិល្ប៍" }]} showHeader={false}>
            <div className='container pt-7 p-5 mx-auto'>

                <section>
                    <h1 className='text-3xl font-bold line-clamp-1 leading-normal'>
                        រឿងអក្សរសិល្ប៍
                    </h1>
                    <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                        {contents.map((item) => (
                            <BlogCard
                                key={item.id || `blog-${Math.random()}`}
                                item={item} cardKey={0}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h1 className='text-3xl font-bold line-clamp-1 leading-normal'>
                        រឿងអក្សរសិល្ប៍
                    </h1>
                    <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                        {contents.map((item) => (
                            <BlogCard
                                key={item.id || `blog-${Math.random()}`}
                                item={item} cardKey={0}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </Container>
    )
}
