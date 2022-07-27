import Layout from '../components/layout';
import StrapiClient from '../lib/strapi-client';

export default function Home() {
	return (
		<Layout>
			<div className="section">
				<div className="container intro">
					<div className="intro-container">
						<main>
							<h1>hello world</h1>
						</main>
					</div>
				</div>
			</div>
		</Layout>
	);
}
const strapiClient = new StrapiClient();

export const getStaticProps = async () => {
	const allArticles = await strapiClient.fetchData('/api/articles');
	return {
		props: {
			articles: allArticles,
		},
	};
};
