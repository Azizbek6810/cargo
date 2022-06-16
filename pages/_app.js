import '../styles/globals.css'
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default MyApp
