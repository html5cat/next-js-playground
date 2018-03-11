import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const ShowLink = ({ show }) => (
    <li>
        <Link as={`/post/${show.id}`} href={`/post?id=${show.title}`}>
            <a>{show.name}</a>
        </Link>
    <style jsx>{`
        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
        }

        a:hover {
            opacity: 0.6;
        }
    `}
    </style>
    </li>
)

const Index = (props) => (
       <Layout>
        <h1>Batman TV shows</h1>
        <ul>
            {props.shows.map(( {show} ) => (
                <ShowLink show={show} key={show.id} />
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }
        `}</style>

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