import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>Hello Next.js</h1>    
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Next.js is awesome" />
            <PostLink title="Deploy apps with now" />
        </ul>
    </Layout>
)