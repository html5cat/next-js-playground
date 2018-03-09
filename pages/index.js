import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
       <Layout>
        <h1>Batman TV shows</h1>
        <ul>
            {props.shows.map(( {show} ) => (
                <li key={show.id}>
                    <Link as={`/post/${show.id}`} href={`/post?id=${show.title}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetch count: ${data.length}`)

    return {
        shows: data
    }
}

export default Index