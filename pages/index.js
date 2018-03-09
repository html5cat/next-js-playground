import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>Hello Next.js</h1>    
        <ul>
            <PostLink id="hello-next" title="Hello Next.js" />
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs" title="Deploy apps with now" />
        </ul>
    </Layout>
)